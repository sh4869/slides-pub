const ghpages = require("gh-pages");
const path = require("path");

const GH_TOKEN = process.env.GH_TOKEN;

ghpages.publish(
    path.join(__dirname, '..', 'dest'),
    {
        repo: 'https://' + GH_TOKEN + '@github.com/sh4869/slides',
        user: {
            name: "sh4869",
            email: "nobuk4869@gmail.com",
        },
        message: "[ci skip] UPDATEE WEBPAGE",
        branch: "gh-pages"
    },
    function (err) {
        if(err){
            console.log(err);
            process.exit(1);
        } else {
            console.log("Update WebPage");
        }
    }
);