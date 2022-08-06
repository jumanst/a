var http = require('http') // 파이썬에서 import와 비슷한 것: 외부 모듈 가져오기
var fs = require('fs')
var app = http.createServer(function(request , response){
    //if(request.url == "/"){
    //    url = '/index.html'
    //}
    response.writeHead(200, {'Content-Type' : "text/html; charset=utf-8"}) ;
    response.end("hello")
})
app.listen(3000)
