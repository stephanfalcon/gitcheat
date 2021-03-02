var shell = require("shelljs")
var {exec} = require("child_process")
const Time = require("./time.js")
const writer = require("./jsonWriter")

const Timer = (interval = process.argv[2]) => {
    let seconds = 0
    let main = setInterval(()=>{


        let now = new Time()
        console.log(now.values.minutes)
        if(now.values.minutes == interval){
            writer()
            shell.exec("git add .")
            shell.exec(`git commit -m "sent from gitcheat at: ${now.values.time}"`)
            shell.exec('git push')
            clearInterval(main)
        }

    },1000)
}

const startInt = () => {
    Timer()
}

const testTimer = () =>{

    setInterval(()=>{
        let now = new Time()
        console.log(now.values.time)
    },1000)
}

Timer()
