import {db  } from "../firebase.config";
import { getDocs , collection ,doc , deleteDoc} from "firebase/firestore" ;

 //  getting posts from database
const getPosts = async ( )=>{
  
    const collectionsRef = collection(db , "users") ;
    const  data = await getDocs(collectionsRef) ;
    setListPostes(data.docs.map((doc)=>({...doc.data(), id:doc.id})
  
    ))
  }
  
  //  rerender ui
  useEffect(()=>{
    getPosts()
    }, [ ])

// delete Element 
const deletItem = async(id )=>{
    await deleteDoc( doc(  db , "users" , id))
}

