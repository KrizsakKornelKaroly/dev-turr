import { useState } from "react";
import { useRouter } from "next/navigation";
import signinUser from "../bejelentkezes/signinUser";

const useHandleSignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [singInError, setSingInError] = useState(null);
  const router = useRouter();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setSingInError(null);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleFirebaseError = (error) => {
    if(error.message === 'Firebase: Error (auth/invalid-credential).') setSingInError("Hibás email vagy jelszó")
  };
  
  const handleSignIn = async (e) => {
    try {
      e.preventDefault();
  
      const { userCredential, error } = await signinUser(email, password);
  
      if (error?.message) {
        handleFirebaseError(error);
        return
      }

      console.log(userCredential)
      router.push("/")

    } catch (unexpectedError) {
      console.error("Unexpected error:", unexpectedError);
    }
  };
  

  return {
    singInError,
    handleEmailChange,
    handlePasswordChange,
    handleSignIn,
  };
};

export default useHandleSignIn;
