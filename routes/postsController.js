const expresse=require('express'); 
const router=expresse.Router();
const ObjectID=require('mongoose').Types.ObjectId;

const {PostsModels}=require('../models/postsModels')

router.get('/',(req,res)=>{
    PostsModels.find((err,docs)=>{
        if (!err)res.send(docs);
        else console.log("Error file" + err);
    });
});


router.post('/',(req,res)=>{
    console.log(req.body );
    const newRecord=PostsModels({
        author:req.body.author,
        message:req.body.message
    });
    newRecord.save((err,docs)=>{
        if (!err) res.send(docs)
        else console.log("Erreur d'enregistrement : "+err);
            
    });
});

//modifier le donne
router.put('/:id',(req,res)=>{

});

module.exports=router;