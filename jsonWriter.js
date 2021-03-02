const fs = require("fs")
const { pushd } = require("shelljs")
const Time = require("./time.js")
let time = new Time()
const writer = () => {

    let parsed = {time:time.values.time}
    fs.writeFileSync("./data.json", JSON.stringify(parsed))
    let rawData = JSON.parse(fs.readFileSync("./data.json"))
}

module.exports = writer