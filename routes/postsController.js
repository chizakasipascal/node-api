const expresse = require('express');
const router = expresse.Router();
const ObjectID = require('mongoose').Types.ObjectId;

const { PostsModels } = require('../models/postsModels')

router.get("/", (req, res) => {
    PostsModels.find((err, docs) => {
        if (!err) res.send(docs);
        else console.log("Error file" + err);
    });
});


router.post("/", (req, res) => {
    console.log(req.body);
    const newRecord = PostsModels({
        author: req.body.author,
        message: req.body.message
    });
    newRecord.save((err, docs) => {
        if (!err) res.send(docs)
        else console.log("Erreur d'enregistrement : " + err);

    });
});

//modifier le donne
router.put("/:id", (req, res) => {
    if (!ObjectID.isValid(req.params.id)) 
       return res.status(400).send("Error Id Unknows " + req.params.id);

    const updateRecord = {
        author: req.body.author,
        message: req.body.message
    };

    PostsModels.findByIdAndUpdate(
        req.params.id,
        { $set: updateRecord },
        { new: true },
        (err, docs) => {
            if (!err) res.send(docs)
            else console.log("Error de modification" + err);
        });
});


//suppression de la donnee

router.delete("/:id",(req,res)=>{
    if (!ObjectID.isValid(req.params.id)) 
        return res.status(400).send("Error Id unknows "+req.params.id);

    PostsModels.findByIdAndRemove(
        req.params.id,
        (err,docs)=>{
            if (!err)res.send(docs);
            else console.log("Les f chier n'exist pas veiller " +err);
    });
    
});
module.exports = router;