import React, { useRef } from 'react'
import { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from '../firebase';
import './SignUpScreen.css'

function SignInScreen() {

  const emailRef = useRef(null);
  const passwordRef = useRef(null);


  const register = (e) => {
    e.preventDefault();

  //   createUserWithEmailAndPassword(
  //     emailRef.current.value,
  //     passwordRef.current.value
  //   ).then((authUser) => {

  //   }).catch(error => {
  //     alert(error.message)
  //   })
  // }
  createUserWithEmailAndPassword(
    auth,
    emailRef.current.value,
    passwordRef.current.value
  ).then((userCredential) => {
    const authUser = userCredential.user;
    // do something with the authenticated user
  }).catch((error) => {
    alert(error.message);
  });
};

  const signIn = (e) => {
    e.preventDefault();

  //   signInWithEmailAndPassword(
  //     emailRef.current.value,
  //     passwordRef.current.value
  //   ).then((authUser) => {

  //   }).catch(error => {
  //     alert(error.message)
  //   })
  // }
  signInWithEmailAndPassword(
    auth,
    emailRef.current.value,
    passwordRef.current.value
  ).then((userCredential) => {
    const authUser = userCredential.user;
    // do something with the authenticated user
  }).catch((error) => {
    alert(error.message);
  });
};

  return (
    <div className='signUpScreen'>
        <form>
          <h1>Sign In</h1>
          <input ref={emailRef} placeholder='Email' type="email" />
          <input ref={passwordRef} placeholder='Password' type="password" />
          <button type='submit' onClick={signIn}>Sign In</button>
          <h4>
            <span className="signUpScreen__gray">New to Netflix? </span>            
            <span className="signUpScreen__link" onClick={register}>Sign up now.</span>
          </h4>
        </form>
    </div>
  )
}

export default SignInScreen