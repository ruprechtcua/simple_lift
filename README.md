# Simple but smart elevator

![alt tag](https://raw.githubusercontent.com/ruprechtcua/simple_lift/master/scrn.png)

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
Make sure Java sdk and maven are installed


## Running the server

Front End:
You can run your app using `grunt preview`. This will start a
server on `localhost:8000`, meaning you can simply go to the
url [localhost:8000/index.html](http://localhost:8000/index.html)
while it's running.

Back End:
You can run the back end restful service using `mvn tomcat7:run`. This will start the server on `localhost:8080`, if you are wondering how the front end talks to the back end without hitting the cross domain constraint you can check out grunt connect proxy, I have set it to proxy any `/status` to port `8080`


