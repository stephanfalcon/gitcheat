const {exec} = require("child_process")

const fs = require('fs')

const path = './.git/index.lock'

var d = new Date();
var n = d.toString();


const addFunc = () => {
    return new Promise((resolve,reject)=>{
        exec("git add .",(error, stdout,stderr)=>{
            if (error) {
                console.log(`add error: ${error.message}`);
                reject()
            }
            if (stderr) {
                console.log(`add stderr: ${stderr}`);
                
                resolve()
            }
            console.log(`add stdout: ${stdout}`);
            resolve()
        })
    })
}

const commitFunc = () => {
    try {
        fs.unlinkSync(path)

      } catch(err) {
      }
    return new Promise((resolve,reject)=>{
                exec(`git commit -m "submitted with gitcheat; interval: ${n}"`,(error, stdout,stderr)=>{
            if (error) {
                console.log(`commit error: ${error.message}`);
                reject()
            }
            if (stderr) {
                console.log(`commit stderr: ${stderr}`);
                resolve()
            }
            console.log(`commit stdout: ${stdout}`);
            resolve()
        }) 
    })
}

const pushFunc = () => {
    return new Promise((resolve,reject)=>{
        exec(`git push`,(error, stdout,stderr)=>{
            if (error) {
                console.log(`push error: ${error.message}`);
                reject()
            }
            if (stderr) {
                console.log(`push stderr: ${stderr}`);
                resolve()
            }
            console.log(`push stdout: ${stdout}`);
            resolve()
        })
    })
}

addFunc()
.then(commitFunc()
.then(pushFunc()
.catch()))