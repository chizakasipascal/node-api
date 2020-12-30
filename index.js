const expresse=require('express');
const app=expresse();
require ('./services/dbSerices')
app.listen(5500 ,()=>{
    console.log("Server stated to port 5500");
});
