import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import firebase_app from "@/lib/firebase";

const auth = getAuth(firebase_app);

const signinUser = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log(userCredential)
    return { userCredential, error: null };
  } catch (error) {
    console.log(error)
    return { userCredential: null, error };
  }
};

export default signinUser;
