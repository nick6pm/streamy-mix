import {React, useEffect, useState} from 'react';
import './App.css';
import { BrowserRouter as  Router, Route, Routes} from "react-router-dom"
import { NavBar, MarketingFooter, SideBar } from './ui-components';
import { default as Beta } from './Pages/Beta'
import { default as StreamyApp } from './Pages/StreamyApp'
import { default as Home } from './Pages/Home'
import { Auth } from 'aws-amplify';
import { UpdatePage } from './Pages/UpdatePage';
import { Profile } from './Pages/Profile';
import { default as Logout } from './Pages/Logout';


export function App (signOut, user) {

  const [loggedIn, setLoggedIn] = useState(false);

  const assessLogin = () => {
  Auth.currentAuthenticatedUser().then(sess => 
    {console.log('Logged In'); setLoggedIn(true);}).catch(() => 
    {console.log('Logged Out'); setLoggedIn(false);})
  };
  useEffect(() => {
    assessLogin();
  }, []);

  return (

<Router>
<div> 
<NavBar/>
{loggedIn ? ( <SideBar/>) : (<></>)}
</div>
<Routes>
  <Route path="/" element={< Home />} />
  <Route path="/beta" element={< Beta />} />
  <Route path="/app" element={< StreamyApp />} />
  {loggedIn ? ( <Route path="/logout" element={< Logout />} />) 
  : (<Route path="/logout" element={< Home />} />)}
  <Route path="/updates" element={< UpdatePage />} />
  <Route path="/profile" element={< Profile />} />
  <Route path="*" element={< Home />} />
</Routes>
<div>
  <MarketingFooter/>
</div>
</Router>
  );
}

export default (App);