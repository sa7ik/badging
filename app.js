const http=require("http")
const port=3000

const server=http.createServer(function(req,res){
res.write("hello Node")
res.end()
})
server.listen(port,function(error){
    if (error){
        console.log("error");
    }
    else{
        console.log("success");
        
        
    }
})