import UserModel from "./../models/User.js";
import bcrypt from 'bcrypt';
class UserController {
  static helloWorld = (req, res) => {
    res.send("Hello World!...");
  };

  static home = (req, res) => {
    res.render("index", { title: "Home" });
  };
  // Creating Doc using model
  static createDoc = async (req, res) => {
    const hashPassword = await bcrypt.hash(req.body.password, 10)
    try {
      const doc = new UserModel({
        name: req.body.name,
        email: req.body.email, 
        password:hashPassword,
      });
      // Saving the doc
      console.log(doc)
      await doc?.save();
      res.redirect("/login");
    } catch (error) {
      console.log(error.message);
    }
  };

  static registration = (req, res) => {
    res.render("registration", { title: "Registration" });
  };
  static dashBoard = (req, res) => {
    res.render("dashboard", { title: "Dashboard" });
  };
  static login = (req, res) => {
    res.render("login", { title: "Login" });
  };

  static verifyUser = async (req, res)=>{
    try {
        const {email, password} = req?.body;
        const findEmail = await  UserModel?.findOne({email: email})
        // console.log(findEmail)
        if(findEmail != null){
            const isMatch = await bcrypt.compare(password, findEmail.password)
        if (findEmail.email==email && isMatch) {
            res.redirect("/dashboard ")
        } else {
            res.send('<h1>Enter Valid Password</h1>')
        }
    }else{
        res.send('<h1>please register First</h1>')
    }
    } catch (error) {
        console.log(error.message)
    }
  }
}

export default UserController;
