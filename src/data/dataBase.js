let fs = require('fs');

module.exports = {
    data: JSON.parse(fs.readFileSync('./src/data/dataBase.json', 'utf-8')),
    menu: JSON.parse(fs.readFileSync('./src/data/menu.json', 'utf-8')),
    writeJson : (dataBase) => {
        fs.writeFileSync("./src/data/dataBase.json", JSON.stringify(dataBase)), 'utf-8'
    }
}
