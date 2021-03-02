const fs = require("fs")
const { pushd } = require("shelljs")
const Time = require("./time.js")

const writer = () => {
    let time = new Time()
    let parsed = {time:time.values.time}
    fs.writeFileSync("./data.json", JSON.stringify(parsed))
    let rawData = JSON.parse(fs.readFileSync("./data.json"))
    console.log(rawData)
}

module.exports = writer