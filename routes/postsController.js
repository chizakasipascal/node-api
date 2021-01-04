const expresse=require('express');
const router=expresse.Router();

const {PostsModels}=require('../models/postsModels')

router.get('/',(req,res)=>{
    PostsModels.find((err,docs)=>{
        console.log(docs);
    });
});

module.exports=router