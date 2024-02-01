'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import registerUser from './registerUser';

function Page() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError ] = useState(null)

  const router = useRouter();

  
  const handleForm = async (event) => {
    event.preventDefault();
 
    const userCredential = await registerUser(email, password);

    if(error) {
      console.log(error.code)
      setError(error);
    }

    else {
      console.log(userCredential)  
    // router.push("/")
    }

  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h1 className="text-2xl font-bold mb-6">Sign up</h1>
        <form onSubmit={handleForm} className="form">
                <label htmlFor="email">
                    <p>Email</p>
                    <input onChange={(e) => setEmail(e.target.value)} required type="email" name="email" id="email" placeholder="example@mail.com" />
                </label>
                <label htmlFor="password">
                    <p>Password</p>
                    <input onChange={(e) => setPassword(e.target.value)} required type="password" name="password" id="password" placeholder="password" />
                </label>
                <button type="submit">Sign up</button>
            </form>
      </div>
    </div>
  );
}

export default Page;
