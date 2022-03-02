import '../App.css';
//import {EditProfile} from "../ui-components"
import '@aws-amplify/ui-react/styles.css';
import { withAuthenticator } from "@aws-amplify/ui-react";
import { DataStore } from "aws-amplify";
import React, {useState} from "react";
import { Profile as profUpdate } from '../models';
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

export function Profile(signOut, user) {
  
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const notify = () => {
      toast('saved!') }

    const saveForm = async () => {
    try {
    await DataStore.save( 
        new profUpdate( {
        name: name,
        email: email
    }));
    } catch (err ) { console.log(err); }}
    
  const addFormOverrides = {
    "Flex.Flex[0].Flex[1].TextField[0]" : { 
        onChange: (event) => {setName(event.target.value); 
        } }, 
        "Flex.Flex[0].Flex[1].TextField[1]" : { 
            onChange: (event) => {setEmail(event.target.value); 
            } },
            "Flex.Flex[2].Button[0]": {
        onClick: async () => {
          { await saveForm() ( notify())} }
    } }

return (
   /* <EditProfile alignItems= "center" height= "81.5vh"/> /*overrides={addFormOverrides}*/ 
<></>
 );
}

export default withAuthenticator(Profile)