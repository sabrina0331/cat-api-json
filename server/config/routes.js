const controller = require("../controllers/controller")

module.exports = function(app){
   app.get('/',controller.getAll),
   app.get('/new/:type',controller.addOneCat),
   app.get('/remove/:type/',controller.deleteOneCat),
   app.get('/showOneCat/:type/',controller.showOneCat)
//    app.get('/updateOneCat/:id/:type/',controller.updateOneCat)

}
