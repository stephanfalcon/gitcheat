var shell = require("shelljs")
var {exec} = require("child_process")
const time = require("time")

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


const Timer = async () => {
    let seconds = 0
    let interval = 0 
    setTimeout(()=>{
            // shell.cd("..")
            shell.exec("git add .")
            shell.exec('git commit -m "uploaded from with cmd"')
            shell.exec('git push')
        },10)
        // await addFunc()
        // await commitFunc()
        // await pushFunc()
    }

    Timer()