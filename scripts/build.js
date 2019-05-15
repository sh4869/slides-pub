const fs = require('fs-extra');
const pug = require("pug");

const copySlides = () => {
    fs.copySync(__dirname + "/../slides/", __dirname + "/../dest/slides/");
}

const generateIndexPage = () => {
    fs.copySync(__dirname + "/../style.css", __dirname + "/../dest/style.css");
    const info = JSON.parse(fs.readFileSync(__dirname + "/../slides.json"));
    const value = pug.compileFile(__dirname + "/../index.pug", { pretty: true })({ slides: info });
    fs.writeFileSync(__dirname + "/../dest/index.html", value);
}

copySlides();

generateIndexPage();