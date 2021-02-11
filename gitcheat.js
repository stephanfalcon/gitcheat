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
                reject(error.message)
            }
            if (stderr) {
                console.log(`add stderr: ${stderr}`);
            }
            setTimeout(()=>{
                console.log(`add stdout: ${stdout}`);
                resolve()
            },250)

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
                return reject()
            }
            if (stderr) {
                console.log(`commit stderr: ${stderr}`);
                return resolve()
            }
            setTimeout(()=>{
                console.log(`commit stdout: ${stdout}`);
                resolve()
            },250)
        }) 
    })
}

const pushFunc = () => {
    try {
        fs.unlinkSync(path)

      } catch(err) {
      }
    return new Promise((resolve,reject)=>{
        exec(`git push`,(error, stdout,stderr)=>{
            if (error) {
                console.log(`push error: ${error.message}`);
                return reject(error)
            }
            if (stderr) {
                console.log(`push stderr: ${stderr}`);
                return resolve()
            }
            setTimeout(()=>{
                console.log(`push stdout: ${stdout}`);
                resolve()
            },250)
        })
    })
}

addFunc()
.then(commitFunc()
.then(pushFunc()
.catch()))