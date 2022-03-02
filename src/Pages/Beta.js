import '../App.css';
import React, {useState} from "react";
//import {JoinBeta} from "../ui-components"
import '@aws-amplify/ui-react/styles.css';
import { withAuthenticator } from "@aws-amplify/ui-react";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import { Profile as profUpdate } from '../models';
import { DataStore } from "aws-amplify";


export function Beta(signOut, user) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const notify = () => {
      toast('SAVED: Thanks for Joining!') }

    const saveForm = async () => {
    try {
    await DataStore.save( 
        new profUpdate( {
        name: name,
        email: email
    }));
    } catch (err ) { console.log(err); }}
    
  const addFormOverrides = {
    "Flex.TextField[0]" : { 
        onChange: (event) => {setName(event.target.value); 
        } }, 
        "Flex.TextField[1]" : { 
            onChange: (event) => {setEmail(event.target.value); 
            } },
            "Flex.Button[0]": {
        onClick: async () => {
          { await saveForm() ( notify())} }
    } }
return (
/*<JoinBeta overrides={addFormOverrides} alignItems= "center" height= "81.5vh"/> */
<></>)}


export default withAuthenticator(Beta)