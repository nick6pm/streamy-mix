import React, {} from "react"
import '../App.css';
import { withAuthenticator} from "@aws-amplify/ui-react";
import { StreamyBasic } from "../ui-components/StreamyBasic";

function componentDidMount (signOut, user) {
  const reloadCount = sessionStorage.getItem('reloadCount');
  if(reloadCount < 2) {
    sessionStorage.setItem('reloadCount', String(reloadCount + 1));
    window.location.reload();
  } else {
    sessionStorage.removeItem('reloadCount');
  }
}

export function StreamyApp() {
  componentDidMount();
  return (
    <StreamyBasic height="61.5vh"/>

  );
}

export default withAuthenticator(StreamyApp)