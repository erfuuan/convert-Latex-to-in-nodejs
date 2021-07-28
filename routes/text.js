const express = require("express")
const router = express.Router()
const fs = require("fs")
var cmd = require('node-cmd');
router.post("/", (req, res, next) => {
    var name=req.body.text
    var t =
        "\\documentclass{article}"
        + "\n"
        + "\\usepackage[a4paper,top=2.5cm,right=3cm,bottom=2.5cm,left=2.5cm]{geometry}"
        + "\n"
        + "\\usepackage{xepersian}"
        + "\n"
        + "\\settextfont{DejaVu Sans}"
        + "\n"
        + "\\title{"
            +name+" }"
        + "\n"
        + "\\author{"+
        name
        +"}"
        + "\n"
        + "\\date{۱ خرداد ۱۴۰۰}"
        + "\n"
        + "\\begin{document}"
        + "\n"
        + "\\maketitle"
        + "\n"
        + name
        + "\n"
        + "\\begin{flushleft}"  
        + "\n"
        + "\\end{flushleft}"
        + "\n"
        + "\\begin{center}"
        + "\n"
        + "\n"
        +"سلام"
        +"\n"
        + name+"\n"
        + "\\end{center}"
        + "\n"
        + "\\end{document}"
    fs.writeFile('1latex.tex', t, (err) => {
        if (err) throw err;
    })
    cmd.run('xelatex 1latex.tex')
    res.send("ok")
})
module.exports = router;

