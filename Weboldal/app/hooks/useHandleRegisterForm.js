import { useState } from "react";
import registerUser from "../regisztracio/registerUser";
import { useRouter } from "next/navigation";
import {
  collection,
  addDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { db } from "@/lib/firebase";

const useHandleRegisterForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);
  const [emailError, setEmailError] = useState(null);
  const router = useRouter();

  const usersCollection = collection(db, "users");
  const userData = {
    email,
    username,
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    setUsernameError(null);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError(null);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError(null);
  };

  const isUsernameTaken = async () => {
    const usernameQuery = query(usersCollection, where("username", "==", username));
    const querySnapshot = await getDocs(usernameQuery);
    return querySnapshot;
  };

  const checkUserExist = async () => {
    const querySnapshot = await isUsernameTaken();

    if (querySnapshot.size > 0) {
      setUsernameError('Ez a felhasználónév foglalt');
      return { userCredential: null, error: undefined, usernameError: true };
    } else {
      setUsernameError(null);
      return await registerUser(email, password);
    }
  };

  const createUserDoc = async () => {
    const newDocRef = await addDoc(usersCollection, userData);
    console.log('New document added with ID:', newDocRef.id);
  };

  const handleFirebaseError = (error) => {
    if (error.message === "Firebase: Error (auth/email-already-in-use).") {
      setEmailError("Ez az email cím foglalt.");
    }
    if (
      error.message === "Firebase: Password should be at least 6 characters (auth/weak-password)."
    ) {
      setPasswordError("Legalább 6 karakter legyen a jelszód");
    }
  };
  
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
  
      const { userCredential, error, usernameError } = await checkUserExist();
  
      if (error?.message) {
        handleFirebaseError(error);
      } else if (!usernameError) {
        await createUserDoc();
        console.log(userCredential);
        router.push("/");
      }
    } catch (unexpectedError) {
      console.error("Unexpected error:", unexpectedError);
    }
  };
  

  return {
    passwordError,
    emailError,
    usernameError,
    handleUsernameChange,
    handleEmailChange,
    handlePasswordChange,
    handleSubmit,
  };
};

export default useHandleRegisterForm;
