# Simple but smart elevator

* elevator turns busy (red)
* load of more than 20 will require 2 or more elevators
* css animations for idle, fetch, load, bring, unload
* closest free (not busy) elevator fetches
* busy elevator turns red while idle turns black
* Status logging made simple: 0- | 0 up | 0 down | 12 load
* addition logging for loading people into the elevator
* If back end server is up, query http://localhost:8080/status/{id} for status history id=0 for A (1st lift), id=1 for B (2nd lift), and so on

## Getting Started

For Front End:
Make sure you have the latest packages installed

```
npm install
bower install
```

Note: If you don't have `npm` installed, make sure you have
[node](http://nodejs.com) installed. If you don't have bower,
`npm install -g bower`.

The above steps will download all the required software to
build and run this app, such as [grunt](http://gruntjs.com),
[requirejs](http://requirejs.org), and [jquery](http://jquery.com).

For Back End:
Make sure Java sdk and maven is installed


## Running the server

Front End:
You can run your app using `grunt preview`. This will start a
server on `localhost:8000`, meaning you can simply go to the
url [localhost:8000/index.html](http://localhost:8000/index.html)
while it's running.

Back End:
You can run the back end restful service using `mvn tomcat7:run`. This will start the server on `localhost:8080`, if you are wondering how the front end talks to the back end without hitting the cross domain constraint you can check out grunt connect proxy, I have set it to proxy any /status to port 8080


