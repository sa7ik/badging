const http=require("http")
const port=3000

const server=http.createServer(function(req,res){
res.write("hello Node")
res.end()
})
const fakeData = "https://jsonplaceholder.typicode.com/posts"


const getData=async () => {
    const res = await fetch (fakeData)
    const data = await res.json()
    console.log(data);
    
}

getData();
