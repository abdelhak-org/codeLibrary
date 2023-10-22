import React , { useState} from 'react'
import {db ,auth} from "../firebase.config";
import { addDoc , collection } from "firebase/firestore";
import { signOut} from "firebase/auth";

// create a AddPost Component 
// create required states 
const [PostTitle   , setPostTitle]  = useState("");
const [PostAuthour , setPostAuthour]  = useState("");
const [post        , setPost]  = useState("") ;

// create addPost function
const pushPost = async(e )=>{
    e.preventDefault();
    const collectionRef= collection(db ,"users")
     await  addDoc(collectionRef , {
        title:PostTitle ,
        author:{name :PostAuthour , id: currentUser.uid  },
        body:post
    });
    setPostTitle("");
    setPostAuthour("")
    setPost("")
};

// logOut function


const logOut= async()=>{
    await signOut(auth);
   
  }