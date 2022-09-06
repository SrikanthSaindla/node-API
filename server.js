//Http Module

 var http=require("http")
 var fs=require("fs")
 var url=require("url")

/*http.createServer((req,res)=>{

    res.write(req.url)
     
    res.end()
    console.log("server is Running")
}).listen(3600)*/

//file system Module
//readFile,appendFile,writeFile,unlink=>to deleteth file
/*http.createServer((req,res)=>{
   fs.unlink("text.txt", (error)=>{
          if(err) throw err
          console.log("file dtetlte")
         res.end();
   })
}).listen(8080)*/

//url module

/*var address="http://localhost:8080/home.html?year=2018&month=feb"

var q=url.parse(address,true)
console.log(q.host)
console.log(q.pathname)
console.log(q.search)*/


http.createServer((req,res)=>{
    fs.readFile("data.json",(err,data)=>{
        res.write(data)
        res.end()
        console.log("Api running")
    })
}).listen(8080)
