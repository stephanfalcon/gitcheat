var shell = require("shelljs")

const Timer = () => {
    let seconds = 0
    let interval = 0 

        shell.exec("git add .")
        shell.exec('git commit -m "uploaded from index.js"')
        shell.exec('git push')
}

Timer()