//mongodb connection
const mongoose = require('mongoose')
const url = "mongodb://localhost:27017/newdb";
const connectDBs = async () =>{
    try {
        await mongoose.connect(url,{
            useUnifiedTopology : true,
            useNewUrlParser:true
            
        });
    } catch (error) {
        console.log(err);
    }

}
module.exports = connectDBs