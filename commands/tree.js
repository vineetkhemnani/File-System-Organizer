const fs = require("fs");
const path=require("path");
function treeFn(dirPath){
    console.log("Tree command implemented for ", dirPath);
    if(dirPath==undefined){
        // console.log("Kindly enter the path");
        treeHelper(process.cwd(),"")
        return;
    }else{
        let DoesExist=fs.existsSync(dirPath);
        if(DoesExist){
            treeHelper(dirPath, "");

        }else{
         console.log("Kindly enter the correct path");
            return;
        }
    }
}

function treeHelper(dirPath,indent){
let isFile = fs.lstatSync(dirPath).isFile();
if(isFile == true){
    let fileName = path.basename(dirPath);
    console.log(indent+" ├── "+fileName);
}else{
    let dirName=path.basename(dirPath)
    console.log(indent+" └── "+dirName); 
    let childrens = fs.readdirSync(dirPath);
    for (let i = 0; i <  childrens.length; i++) {
        let childPath = path.join(dirPath, childrens[i]);
        treeHelper(childPath, indent+"\t")
        
    }
}
}

module.exports={
    treeKey:treeFn
}