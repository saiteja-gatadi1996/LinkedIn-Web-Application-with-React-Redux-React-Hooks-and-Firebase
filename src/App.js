import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widgets from './Widgets';
import { login, logout, selectUser } from './feature/userSlice';
import {useSelector} from 'react-redux'
import Login from './Login';
import {useDispatch} from 'react-redux'
import { auth } from './firebase'

function App() {
  const user=useSelector(selectUser)
  const dispatch=useDispatch()

  useEffect(()=>{
    auth.onAuthStateChanged((userAuth)=>{
      if(userAuth){
        //user logged in
        dispatch(login({
          email:userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl: userAuth.photoURL,
        }));
        
      }else{
        //user is logged out
        dispatch(logout());
        
      }
    })
  },[])

  return (
    <div className="app">
      <Header/>

      {/* if there is no user, render login page otherwise render out the rest of the app */}
        {!user?(
        <Login/>):(
              <div className="app__body">
              <Sidebar/>
              <Feed/>
              <Widgets/>
            </div>
        )}

      
    </div>
  );
}

export default App;
