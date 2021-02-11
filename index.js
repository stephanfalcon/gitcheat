const {exec} = require("child_process")
var poop = "poop"
const gitPush = (interval) => {
    exec(`node gitcheat.js ${interval}`, (error , stdout, stderr)=>{
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
    })
}

const Timer = () => {
    let seconds = 0
    let interval = 0 
    setInterval(()=>{
        if(seconds == 10){
            gitPush(interval)
            seconds = 0
            interval ++
        }
    }, 1000)
}

Timer()