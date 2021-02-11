const {exec} = require("child_process")

const addFunc = () => {
    return new Promise((resolve,reject)=>{
        exec("git add .",(error, stdout,stderr)=>{
            if (error) {
                console.log(`error: ${error.message}`);
                reject()
            }
            if (stderr) {
                console.log(`stderr: ${stderr}`);
                resolve()
            }
            console.log(`stdout: ${stdout}`);
            resolve()
        })
    })
}

const commitFunc = () => {
    return new Promise((resolve,reject)=>{
                exec(`git commit -m "submitted with gitcheat; interval: ${process.argv[2]}"`,(error, stdout,stderr)=>{
            if (error) {
                console.log(`error: ${error.message}`);
                reject()
            }
            if (stderr) {
                console.log(`stderr: ${stderr}`);
                resolve()
            }
            console.log(`stdout: ${stdout}`);
            resolve()
        })
    })
}

const pushFunc = () => {
    return new Promise((resolve,reject)=>{
        exec(`git push`,(error, stdout,stderr)=>{
            if (error) {
                console.log(`error: ${error.message}`);
                reject()
            }
            if (stderr) {
                console.log(`stderr: ${stderr}`);
                resolve()
            }
            console.log(`stdout: ${stdout}`);
            resolve()
        })
    })
}

addFunc()
.then(commitFunc()
.then(pushFunc()
.catch()))