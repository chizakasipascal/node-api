const expresse=require('express');
const app=expresse();
require ('./services/dbSerices')


const postsRoutes=require('./routes/postsController'); 
app.use('/',postsRoutes);


app.listen(2700 ,()=>{
    console.log("Server stated to port 2700");
});
