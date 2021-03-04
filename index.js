var shell = require("shelljs")
var { exec } = require("child_process")
const Time = require("./time.js")
const writer = require("./jsonWriter")

const timer = (interval = process.argv[2]) => {

    let main = setInterval(() => {
        let now = new Time()
        console.log(now.values.time)
        if (now.values.everyHour == interval) {
            pushFunc(now)
        }
    }, 1000)
}

const startInt = () => {
    Timer()
}

const pushFunc = (now) => {
    writer()
    shell.exec("git add .")
    shell.exec(`git commit -m "sent from gitcheat at: ${now.values.time}"`)
    shell.exec('git push')
}

const testTimer = () => {
    setInterval(() => {
        let now = new Time()
        console.log(now.values.time)
    }, 1000)
}
var rightnow = new Time()
pushFunc(rightnow)
timer()