const {exec} = require("child_process")

const Timer = () => {
    let seconds = 0
    let interval = 0 

        exec("start ./upload.bat", (error, stdout, stderr) => {
            if (error) {
                console.log(`error: ${error.message}`);
                return;
            }
            if (stderr) {
                console.log(`stderr: ${stderr}`);
                return;
            }
            console.log(`stdout: ${stdout}`)

})}

Timer()