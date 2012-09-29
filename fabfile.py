import BaseHTTPServer, SimpleHTTPServer
import SocketServer
import ssl
import fileinput
import re
from fabric.api import *

def run():
	port = 4443
	# create recipes.dev.json based on recipes.json
	print("Creating dev copy of cookbook")
	local("cp recipes.json recipes.dev.json")
	for line in fileinput.input("recipes.dev.json", inplace=1):
		print re.sub(r'("script"\s*:\s*)"https?://.*/([^/]*.js)"',
				r'\1"https://localhost:'+str(port)+r'/\2"', line),

	# start server
	httpd = BaseHTTPServer.HTTPServer(('localhost', port), SimpleHTTPServer.SimpleHTTPRequestHandler)
	httpd.socket = ssl.wrap_socket (httpd.socket, certfile='localhost.pem', server_side=True)
	print("Starting web server on port %s (Ctrl+C to stop)"%port)
	httpd.serve_forever()
