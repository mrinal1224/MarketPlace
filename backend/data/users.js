import bcrypt from "bcryptjs"


const users = [


    {
        name:'John Doe',
        email : "john@example.com",
        password: bcrypt.hashSync("123456" , 10),
        isAdmin : true
    },
      {
        name:'Jane Doe',
        email : "jane@example.com",
        password:  bcrypt.hashSync("123456" , 10),
        
    },
      {
        name:'Steve Rogers',
        email : "captain@example.com",
        password: bcrypt.hashSync("123456" , 10),
        
    }




]

export default users