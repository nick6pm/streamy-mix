import React from "react";
import '../App.css';
import { Flex, Text } from "@aws-amplify/ui-react";

export function StreamyBasic() {
  return (
    <Flex
      gap="10px"
      direction="column"
      justifyContent="flex-start"
      alignItems="center"
      alignSelf="stretch"
      overflow="hidden"
      position="relative"
      width="100vw"
      height="100vh"
      padding="10px 20px 0px 20px"
      backgroundColor="rgba(0,0,0,1)"
    >
        <Flex
        gap="24px"
        direction="column"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        width="auto"
        height={"auto"}
        position="relative"
        padding="0px 0px 0px 0px"
      >
          <Text
            fontFamily="Inter"
            fontSize="35px"
            fontWeight="700"
            color="rgba(255,255,255,1)"
            lineHeight="48px"
            textAlign="center"
            display="flex"
            direction="row"
            justifyContent="flex-start"
            shrink="0"
            position="relative"
            alignSelf="center"
            padding="0px 0px 20px 0px"
            children="COMING SOON"
          ></Text>      
        </Flex>
        <Flex
        gap="24px"
        direction="column"
        justifyContent="center"
        alignItems="center"
        alignSelf="center"
        shrink="0"
        width="auto"
        position="relative"
        padding="0px 20px 0px 20px"
      >
            <Text
            fontFamily="Inter"
            fontSize="20px"
            fontStyle="italic"
            fontWeight="700"
            color="rgb(119,136,153)"
            lineHeight="48px"
            textAlign="center"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            children="
            STREAMYVIDEO - Automated Music/ Dialog/ SFX Mixing"
          ></Text>
        </Flex>
        <Flex
        gap="24px"
        direction="column"
        justifyContent="center"
        alignItems="center"
        alignSelf="center"
        shrink="0"
        width="auto"
        position="relative"
        padding="0px 20px 0px 20px"
      >
            <Text
            fontFamily="Inter"
            fontSize="20px"
            fontWeight="700"
            fontStyle="italic"
            color="rgb(119,136,153)"
            lineHeight="48px"
            textAlign="center"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            children=" 
            STREAMYVOCALS - Automated Vocal Mixing"
          ></Text>
        </Flex>
    </Flex>
  );
}

export default (StreamyBasic)