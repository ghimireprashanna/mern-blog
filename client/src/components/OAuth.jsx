import { Button } from 'flowbite-react'
import React from 'react'
import { AiFillGoogleCircle } from 'react-icons/ai'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { app } from '../firebase'
import { useDispatch } from 'react-redux'
import { signInSuccess } from '../redux/user/userSlice'
import { useNavigate } from 'react-router-dom'



const OAuth = () => {
  const auth = getAuth(app)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleGoogleClick = async () => {
    const provider = new GoogleAuthProvider()
    provider.setCustomParameters({ prompt: 'select_account'})
    try {
      const resultsFromGoogle = await signInWithPopup(auth, provider)
      const res = await fetch("/api/auth/google", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: resultsFromGoogle.user.displayName,
          email: resultsFromGoogle.user.email,
          googlePhotoUrl: resultsFromGoogle.user.photoURL,
        }),
      })
      const data = await res.json()
      if(res.ok){
        dispatch(signInSuccess(data))
        navigate('/')
      }
      
    } catch (error) {
      console.log(error);
      
    }
  }
  return (
    <Button type='button' className="hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" outline
    onClick={handleGoogleClick}>
      <AiFillGoogleCircle className='w-6 h-6 mr-2'/>
        Continue with Google
        </Button>
  )
}

export default OAuth