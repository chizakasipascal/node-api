const expresse=require('express');
const app=expresse();
const bodyParser=require('body-parser');
const mongoose=require('mongoose');
const cors=require('cors');
mongoose.set('useFindAndModify',false);

require ('./services/dbSerices')

const postsRoutes=require('./routes/postsController'); 
app.use(bodyParser.json());
app.use(cors()) //on ouvre l'access a tout le monde
app.use('/posts',postsRoutes);


app.listen(2700 ,()=>{
    console.log("Server stated to port 2700");
});
 