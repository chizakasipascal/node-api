const expresse=require('express');
const app=expresse();
const bodyParser=require('body-parser');

require ('./services/dbSerices')

const postsRoutes=require('./routes/postsController'); 
app.use(bodyParser.json());
app.use('/posts',postsRoutes);


app.listen(2700 ,()=>{
    console.log("Server stated to port 2700");
});
 