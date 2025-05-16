import './App.css'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from './firebase/firebase.init';
import { useState } from 'react';
function App() {
  const [user, setUser] = useState(null);

const googleProvider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
signInWithPopup(auth,googleProvider)
.then(result =>{
  console.log(result.user);
  setUser(result.user);
})
.catch(error => console.log('ERROR', error))
  }

  return (
    <>
      <h1>Simple Firebase Dimple copy</h1>
      <button onClick={handleGoogleSignIn}>Login With Google</button>
      <button>Login With Github</button>
      <button>Submit</button>
    {
      user && <div>
        <h3>User: {user.displayName}</h3>
        <p>Email: {user.email}</p>
        <img src={user.photoURL} alt="" />
      </div>
    } 
    </>
  )
}

export default App
