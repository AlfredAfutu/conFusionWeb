import web
import os
import threading

from os.path import expanduser
home = expanduser("~")

render = web.template.render('app/')

urls = (
     '/', 'index'
   )

app = web.application(urls, globals())

class index(threading.Thread):
    def __init__(self):
	    threading.Thread.__init__(self)
		
    def GET(self):
        print "in get"
       
        return render.menu()
if __name__ == "__main__":
    app.run()
