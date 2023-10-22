// import neccessair functions
import {  createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from "../firebase.config";

// create a  component called  "CreateUser"
// create the rquired states as "email " and "password"

// create a function to create a new user 
const submitHandler =  (e)=>{
    e.preventDefault();
      createUserWithEmailAndPassword(auth , userEmail ,userPassword)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log("user is => ",user.email , user.id)
      // ...
    })
    .catch((error) => {
        console.log(error.message)
      // ..
    });

}


