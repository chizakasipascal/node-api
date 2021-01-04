const mongoose=require('mongoose');
mongoose.connect(
    "mongodb://127.0.0.1:27017/node-api",
    {useNewUrlParser : true,useUnifiedTopology:true},
    (err)=>{
        if (!err) {
            console.log("MongoDB Conncted");
        } else {
            console.log("ERROR SERVER "+err);
        }
    }
);
