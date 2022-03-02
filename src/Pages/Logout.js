import { Auth } from "aws-amplify";
import { useNavigate } from "react-router-dom";
import  {HeroLayout3} from "../ui-components";
import {React} from "react"

function componentDidMount (signOut, user) {
  const reloadCount = sessionStorage.getItem('reloadCount');
  if(reloadCount < 1) {
    sessionStorage.setItem('reloadCount', String(reloadCount + 1));
    window.location.reload();
  } else {
    sessionStorage.removeItem('reloadCount');
  }
}

export function Logout() {
let navigate = useNavigate()
    const loggedOut = {
      "Flex.Flex[0].Text[0]" : { 
         children: "" }, 
        "Flex.Flex[0].Flex[0].Text[0]" : { 
             children: "See Ya Later!" },
            "Flex.Flex[0].Flex[0].Text[1]" : { 
               children: "" },
               "Flex.Flex[0].Button[0]" : { 
                children: "logout",
                onClick: async () => {
                 await (Auth.signOut()) (componentDidMount())
                }} } 

      return(
<HeroLayout3 overrides={loggedOut} height="71.9vh "width='100vw' /> 
    );
}


export default (Logout);
