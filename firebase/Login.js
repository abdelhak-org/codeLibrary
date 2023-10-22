import { auth } from "../firebase.config";
import { signInWithEmailAndPassword } from "firebase/auth";

// create login Component
// create login Function
const login = async (e) => {
  e.preventDefault();
  await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
};

// create useEffect to rerender ui

useEffect(() => {}, [loginEmail]);
