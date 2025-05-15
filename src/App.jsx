import './App.css'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from './firebase/firebase.init';
function App() {

const googleProvider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
signInWithPopup(auth,googleProvider)
.then(result =>{
  console.log(result.user);
})
.catch(error => console.log('ERROR', error))
  }

  return (
    <>
     
      <h1>Simple Firebase Dimple copy</h1>
      <button onClick={handleGoogleSignIn}>Login With Google</button>
     
    </>
  )
}

export default App
