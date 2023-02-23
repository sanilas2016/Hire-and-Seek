const db=require('./db')


const register=(profilepic,name,subtitle,email,mobile,highest,year,skills,location,uname,pswd,cv)=>{

    return db.User.findOne({uname})
    .then(user=>{
  
      if(user){
        return {
          status:false,
          statusCode:400,
          message:"User already exist"
        }
      }
      else{
        const newUser=new db.User({

         profilepic:profilepic,
          name:name,
          subtitle:subtitle,
         
          email:email,
          mobile:mobile,
          highest:highest,
          year:year,
          skills:skills,
          location:location,
          uname:uname,
          pswd:pswd,
          cv:cv
        })
        newUser.save();
       
        return {
          status:true,
          statusCode:200,
          message:"Register Successfull"
        }
      }
        
      })
    }

    const login=(uname,pswd)=>{
      return db.User.findOne({uname,pswd})
      .then(user=>{
        if(user){
          currentUser=user.name;
          currentUname=user.uname;
          return {
            status:true,
            statusCode:200,
            message:"Login success",
           
            currentUser:currentUser,
            currentUname:currentUname
            
          }
  
        }
        else{
          return {
            status:false,
            statusCode:400,
            message:"Invalid login"
          }
        }
      })
    }


    const getProducts=()=>{
      return db.User.find().then((result)=>{
  
          if(result){
              return{
                  status:true,
                  statusCode:200,
                  products:result
              }
          }
          else{
              return{
                  status:false,
                  statusCode:400,
                  message:'No products found'
              }
          }
  
      }
  
      )
  }

  const deleteuser=(uname)=>{
    return db.User.deleteOne({uname})
    .then(user=>{
      if (user) {
        return {
          status:true,
          statusCode:200,
          message:"User deleted successfully"
        }
      }
      else{
        return {
          status:false,
          statusCode:400,
          message:"User not found"
        }
  
      }
    })
  }


  const getdetails=(uname)=>{
    return db.User.findOne({uname})
    .then(user=>{
      if (user) {
        return {
          status:true,
          statusCode:200,
          details:user
        }
      }
      else{
        return {
          status:false,
          statusCode:400,
          message:"User not found"
        }
  
      }
    })
  }
  



    module.exports={
        register,
        login,
        getProducts,
        deleteuser,
        getdetails
      }

