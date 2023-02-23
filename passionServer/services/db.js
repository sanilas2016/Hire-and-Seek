
const mongoose=require('mongoose');


mongoose.connect('mongodb://localhost:27017/passion',()=>{
    console.log('Connected to MongoDB');
})


const Product=mongoose.model('Product',{
    id:Number,
    title:String,
    price:Number,
    description:String,
    category:String,
    image:String,
    rating:{
        rate:Number,
        count:Number
    }
})

const User=mongoose.model('User',{
    profilepic:String,
    name:String,
    subtitle:String,
    
    email:String,
    mobile:Number,
    highest:String,
    year:Number,
    skills:String,
    location:String,
    
    uname:String,
    pswd:String,
    cv:String
})


module.exports={
    Product,
    User
   
}