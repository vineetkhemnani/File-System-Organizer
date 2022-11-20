#!/usr/bin/env node
const fs = require("fs");
const { type } = require("os");
const path=require("path");
const treeObj=require("./commands/tree");
const organizeObj = require("./commands/organize");
const helpObj= require("./commands/help");
let inputArr = process.argv.slice(2); //slice(2)--> 0-2
// node main.js hello how are you
//  1    2       3
// after slicing--> inputArr= hello how are you
// console.log(inputArr);
// node main.js tree "directoryPath"
// inputArr= [ 'tree', 'directoryPath' ]
//          inputArr[0]   inputArr[1]
// node main.js organize "directoryPath"
// node main.js help
let types = {
    media: ["mp4", "mkv", "mp3", "jpg", "png", "jpeg"],
    archives: ["zip", "7z", "rar", "tar", "gz", "ar", "iso", "xz"],
    documents: [
      "docx",
      "doc",
      "pdf",
      "xlsx",
      "xls",
      "odt",
      "ods",
      "odp",
      "odg",
      "odf",
      "txt",
      "ps",
      "tex",
      "pptx"
    ],
    app: ["exe", "dmg", "pkg", "deb"],
  };

let command = inputArr[0];
switch(command){
    case "tree":
        treeObj.treeKey(inputArr[1]);
        break;
    case "organize":
        organizeObj.organizeKey(inputArr[1])
        break;
    case "help":
        helpObj.helpkey();
        break;
    default:
        console.log("🙏 Please input correct command")
        break;
}







