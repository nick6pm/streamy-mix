import '../App.css';
import React from "react"
import '@aws-amplify/ui-react/styles.css';
import { withAuthenticator } from "@aws-amplify/ui-react";
import { Updates } from '../ui-components';


export function UpdatePage(signOut, user) {
return (
    <Updates width="100vw" height="71.9vh"/>

 );
}


export default withAuthenticator(UpdatePage)