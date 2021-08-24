let db = require('../data/dataBase');

module.exports = {
    menu : (req, res) => {
        res.render('menu', {
            db
        })
    },
}