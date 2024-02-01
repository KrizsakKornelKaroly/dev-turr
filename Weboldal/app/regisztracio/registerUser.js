import { createUserWithEmailAndPassword, getAuth, sendEmailVerification } from "firebase/auth";
import firebase_app from "@/lib/firebase";

const auth = getAuth(firebase_app);

const registerUser = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    await sendEmailVerification(userCredential.user)
    return { userCredential };
  } catch (error) {
    console.error(error);
    return { error };
  }
};

export default registerUser;
