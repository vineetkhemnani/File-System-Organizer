const fs = require("fs");
const path=require("path");
function organizeFn(dirPath){
    let destPath;
    console.log("Organize command implemented for ", dirPath);
    // 1. input --> directory path given
    if(dirPath==undefined){
        // console.log("Kindly enter the path");
        destPath=process.cwd();
        return;
    }else{
        let DoesExist=fs.existsSync(dirPath);
        if(DoesExist){
            
            // 2. create --> organized_files -> directory
            destPath = path.join(dirPath,"organized_files");
            if(fs.existsSync(destPath)==false){
                fs.mkdirSync(destPath);
            }

        }else{
         console.log("Kindly enter the correct path");
            return;
        }
    }
    organizeHelper(dirPath,destPath);
    // 
    
}
function organizeHelper(src , dest){
    // 3. check all files-> identify categories of all files present in directory
    // fs.readdirSync() method is used to synchronously read the contents of a given directory
    let childNames = fs.readdirSync(src);
    // console.log(childNames);
    for(let i=0; i<childNames.length; i++){
        let childAddress = path.join(src, childNames[i]);
        let isFile = fs.lstatSync(childAddress).isFile();
        if(isFile){
            // console.log(childNames[i]);
            let category = getCategory(childNames[i]);
            console.log(childNames[i], " belongs to --> ", category);
            // 4. copy files to that organized directory according to their categories
            sendFiles(childAddress,dest,category);
        }
    }
    
}

function getCategory(name){
    let ext = path.extname(name)
    ext = ext.slice(1)  // we will take out the extension names of the files 
    //console.log(ext)


    for(let type in types){
        let cTypeArr = types[type]
         //console.log(cTypeArr)

        for(let i=0 ; i<cTypeArr.length ;i++){
            if(ext == cTypeArr[i])
          // we matched the extensions with the values presnet in ctypeArr

            return type
         }
    }

return 'others'

}

function sendFiles(srcFilePath,dest,category){
    let categoryPath=path.join(dest,category);
    if(fs.existsSync(categoryPath)==false){
        fs.mkdirSync(categoryPath);
    }
    let fileName=path.basename(srcFilePath);
    let destFilePath=path.join(categoryPath, fileName);
    fs.copyFileSync(srcFilePath, destFilePath);
    fs.unlinkSync(srcFilePath);
    console.log(fileName, " copied to ", destFilePath);


}

module.exports={
    organizeKey:organizeFn
}