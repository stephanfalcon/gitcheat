var shell = require("shelljs")
var {exec} = require("child_process")
const Time = require("./time.js")
const writer = require("./jsonWriter")

const Timer = (interval = process.argv[2]) => {
    let seconds = 0
    setInterval(()=>{

        writer()
        let now = new Time()
        console.log(now.values.minutes)
        if(now.values.minutes == interval){
            
            shell.exec("git add .")
            shell.exec(`git commit -m "sent from gitcheat at: ${now.values.time}"`)
            shell.exec('git push')
            shell.exec("^C")
        }

    },1000)

}

const testTimer = () =>{

    setInterval(()=>{
        let now = new Time()
        console.log(now.values.time)
    },1000)
}

Timer()
