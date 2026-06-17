const http=require("http"),fs=require("fs"),path=require("path");
const root=process.cwd();
const types={".html":"text/html",".css":"text/css",".js":"text/javascript"};
http.createServer((req,res)=>{
  let p=decodeURIComponent(req.url.split("?")[0]);
  if(p==="/")p="/Luke-Renton-CV.html";
  const fp=path.join(root,p);
  fs.readFile(fp,(e,d)=>{
    if(e){res.writeHead(404);res.end("not found");return;}
    res.writeHead(200,{"Content-Type":types[path.extname(fp)]||"application/octet-stream"});
    res.end(d);
  });
}).listen(8731,()=>console.log("serving on http://localhost:8731"));
