const showdown = require("showdown");
const fs = require('fs-extra');

const converter = new showdown.Converter();
converter.addExtension({
    type: "output",
    regex: /<p>%%%<\/p>/g,
    replace: "</section>\n<section>"
},
    "section");
const file = fs.readFileSync(__dirname + "/../" + process.argv[2]).toString();
console.log("<section>\n" + converter.makeHtml(file) + "\n</section>");
