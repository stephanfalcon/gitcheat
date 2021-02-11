const {exec} = require("child_process")

const addFunc = () => {
    exec(`git add .`,(error, stdout,stderr)=>{
        if (error) {
            console.log(`error: ${error.message}`);

        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);

        }
        console.log(`stdout: ${stdout}`);

    })
}

const commitFunc = () => {
    exec(`git commit`,(error, stdout,stderr)=>{
        if (error) {
            console.log(`error: ${error.message}`);

        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);

        }
        console.log(`stdout: ${stdout}`);

    })
}

const pushFunc = () => {

        exec(`git push`,(error, stdout,stderr)=>{
            if (error) {
                console.log(`error: ${error.message}`);

            }
            if (stderr) {
                console.log(`stderr: ${stderr}`);

            }
            console.log(`stdout: ${stdout}`);
 
        })
    }

addFunc()
commitFunc()
pushFunc()
