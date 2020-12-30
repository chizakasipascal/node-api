const mongoose=require('mongoose');
mongoose.connect(
    "mongodb://localhost:2707/node-api",
    {useNewUrlParser : true,useUnifiedTopology:true},
    (err)=>{
        if (!err) {
            console.log("MongoDB Conncted");
        } else {
            console.log("ERROR SERVER "+err);
        }
    }
);