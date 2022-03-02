import {React, useEffect, useState} from "react"
import '../App.css';
import {HeroLayout3, NavBar} from "../ui-components"
import { Auth } from 'aws-amplify';
import { default as StreamyApp } from './StreamyApp'

export function Home () {
  
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

loggedIn ? ( <StreamyApp height="81.5vh"/>  ) : (   <NavBar width='100vw'/>, <HeroLayout3 alignItems= "center" height= "81vh"/> )

);
}

export default Home;