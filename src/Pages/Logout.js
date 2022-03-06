import { Auth } from "aws-amplify";
import { useNavigate } from "react-router-dom";
import  {HeroLayout3} from "../ui-components";
import {React} from "react"

const signOut = async () => {
  try {
      await Auth.signOut();
      window.location.reload();
  } catch (error) {
      console.log('error signing out: ', error);
  }
};

export function Logout() {
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
                 await (signOut()) 
                }} } 

      return(
<HeroLayout3 overrides={loggedOut} height="100vh" /> 
    );
}


export default (Logout);
