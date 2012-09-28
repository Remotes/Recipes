import SimpleHTTPServer
import SocketServer
import fileinput
import re
from fabric.api import *

def run(port = 8000):
	# create recipes.dev.json based on recipes.json
	print("Creating dev copy of cookbook")
	local("cp recipes.json recipes.dev.json")
	for line in fileinput.input("recipes.dev.json", inplace=1):
		print re.sub(r'("script"\s*:\s*)"https?://.*/([^/]*.js)"',
				r'\1"http://localhost:'+str(port)+r'/\2"', line),

	# start server
	Handler = SimpleHTTPServer.SimpleHTTPRequestHandler
	httpd = SocketServer.TCPServer(("", int(port)), Handler)
	print("Starting web server on port %s (Ctrl+C to stop)"%port)
	httpd.serve_forever()
