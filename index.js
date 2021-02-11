var shell = require("shelljs")
var {exec} = require("child_process")


var addFunc = async () => {
    exec('git add .', (error, stdout, stderr) => {
        if (error) {
            console.error(`exec error: ${error}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
        console.error(`stderr: ${stderr}`);
    });
}

var commitFunc = async () => {
    await exec('git commit -m "submitted with child process', (error, stdout, stderr) => {
        if (error) {
            console.error(`exec error: ${error}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
        console.error(`stderr: ${stderr}`);
    });
}

var pushFunc = async () => {
    await exec('git push', (error, stdout, stderr) => {
        if (error) {
            console.error(`exec error: ${error}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
        console.error(`stderr: ${stderr}`);
    });
}

var cmdStack = async () =>{
    await exec('git push', (error, stdout, stderr) => {
        if (error) {
            console.error(`exec error: ${error}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
        console.error(`stderr: ${stderr}`);
    })
}

const Timer = async () => {
    let seconds = 0
    let interval = 0 
    // setTimeout(()=>{
        //     cmd.exec("git add .")
        //     cmd.exec('git commit -m "uploaded from with cmd"')
        //     cmd.exec('git push')
        // },10)
        await addFunc()
        await commitFunc()
        await pushFunc()
    }

    Timer()