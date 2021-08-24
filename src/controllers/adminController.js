const { data , menu , writeJson } = require('../data/dataBase');
let db = require('../data/dataBase');

module.exports = {
    admin : (req, res) => {
        res.render('admin/adminIndex', {
            db
        })
    },
    restaurant:(req,res) => {

    },
    formAddResto : (req,res)=> {
        res.render('admin/addResto')
    },
    addResto : (req, res) => {
        let lastId = 1;

        data.forEach( resto => {
            if(resto.id > lastId){
                lastId = resto.id
            }            
        });
        
        let newResto = {
            id: lastId + 1,
            sucursal : req.body.nombre.trim(),
            dirección : req.body.dirección.trim(),
            telefono: req.body.telefono.trim(),
            horarios: "n/n"
        }
        data.push(newResto)
        
        writeJson(data);

        res.redirect('/admin')
    }, 
    editForm :  (req, res) =>{
        let restaurant = data.find( resto => {
            return resto.id === +req.params.id
        })

        res.render('admin/editarResto', {
            restaurant : restaurant
        })
    },
    editResto : (req, res) => {
        /* Como acceder al req.body con restructuracion*/
        let {id, sucursal, dirección, telefono} = req.body

        data.forEach( element => {
            if(element.id === +req.params.id){
                element.id = element.id,
                element.sucursal = sucursal,
                element.dirección = dirección,
                element.telefono = telefono
            }
        })

         writeJson(data); 

        res.redirect('/admin')
    },

    deleteResto: (req, res) => {
        data.forEach( local => {
            if(local.id === +req.params.id){
                let localAEliminar = data.indexOf(local);
                data.splice(localAEliminar, 1)
            }
        })

        writeJson(data);

        res.redirect('/');
    }
}