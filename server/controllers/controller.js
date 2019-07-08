const Cat = require('../models/cat')

module.exports = {
    getAll: function(req,res){
        Cat.find({},function(err,cats){
            if(err){
                res.json(err)
            }else{
                res.json(cats)
            }
        })
    },
    addOneCat: function(req,res){
        var newCat = new Cat({ type: req.params.type })
        newCat.save(function(err,cats){
            if(err){
                res.json(err)
            }else{
                res.json(cats)
            }
        })
    },
    showOneCat: function(req,res){
        Cat.find({type: req.params.type},function(err,cat){
            if(err){
                res.json(err)
            }else{
                res.json(cat)
            }
        })

    },
    // updateOneCat: function(req,res){
    //     Cat.updateOne({ _id: req.params.id,function(err,cat){
    //        if(err){
    //            res.json(err)
    //        } else{
    //            cat.type = req.body.type;
    //            cat.save(function(err,cats){
    //                if(err){
    //                    res.json(err)
    //                }else{
    //                    res.json(cats)
    //                }
    //            })
    //        }
    //     }})
    
    // },

    deleteOneCat: function(req,res){
        Cat.remove({ type: req.params.type },function(err,cats){
            if(err){
                res.json(err)
            }else{
                res.json(cats)
            }
        })
    },
    
}
