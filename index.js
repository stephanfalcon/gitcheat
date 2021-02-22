var shell = require("shelljs")
var {exec} = require("child_process")
const Time = require("./time.js")

// var addFunc = async () => {
//     exec('git add .');
// }

// var commitFunc = async () => {
//     await exec('git commit -m "submitted with child process 439');
// }

// var pushFunc = async () => {
//     await exec('git push');
// }

// var cmdStack = async () =>{
//     await exec('git push')
// }


const Timer = (interval=process.argv[2]) => {
    let seconds = 0
    setInterval(()=>{
            // shell.cd("..")
            let now = new Time()
            if(now.values.seconds == interval){
                shell.exec("git add .")
                shell.exec(`git commit -m "sent from gitcheat at: ${now.values.time}"`)
                shell.exec('git push')
            }

        },1000)
        // await addFunc()
        // await commitFunc()
        // await pushFunc()
    }

    // Timer()

const testTimer = () =>{

    setInterval(()=>{
        let now = new Time()
        console.log(now.values.time)
    },1000)
}
Timer()
