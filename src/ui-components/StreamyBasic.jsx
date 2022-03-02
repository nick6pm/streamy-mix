import React from "react";
import '../App.css';
import { Flex, Text } from "@aws-amplify/ui-react";

export function StreamyBasic() {
  return (
    <Flex
      gap="10px"
      direction="column"
      justifyContent="center"
      alignItems="center"
      overflow="hidden"
      position="relative"
      height={"698px"}
      padding="160px 240px 160px 240px"
      backgroundColor="rgba(0,0,0,1)"
    >
      <Flex
        gap="24px"
        direction="column"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        width="960px"
        position="relative"
        padding="0px 0px 0px 0px"
      >
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="700"
          color="rgba(255,255,255,1)"
          lineHeight="20px"
          textAlign="center"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          letterSpacing="0.49px"
          width="960px"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          children=""
        ></Text>
        <Flex
          gap="16px"
          direction="column"
          shrink="0"
          width="960px"
          position="relative"
          padding="0px 0px 0px 0px"
        >
          <Text
            fontFamily="Inter"
            fontSize="40px"
            fontWeight="700"
            color="rgba(255,255,255,1)"
            lineHeight="48px"
            textAlign="center"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            width="960px"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            children="COMING SOON :"
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(255,255,255,1)"
            lineHeight="24px"
            textAlign="center"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            letterSpacing="0.010000000000000009px"
            width="960px"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            children=""
          ></Text>
        </Flex>
        <Text
            fontFamily="Inter"
            fontSize="20px"
            fontStyle="italic"
            fontWeight="700"
            color="rgba(255,255,255,1)"
            lineHeight="48px"
            textAlign="center"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            width="960px"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            children="
            STREAMYVIDEO - Automated Music/ Dialog/ SFX Mixing"
          ></Text>
      </Flex>
      <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(255,255,255,1)"
            lineHeight="24px"
            textAlign="center"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            letterSpacing="0.010000000000000009px"
            width="960px"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            children=""
          ></Text>
                  <Text
            fontFamily="Inter"
            fontSize="20px"
            fontWeight="700"
            fontStyle="italic"
            color="rgba(255,255,255,1)"
            lineHeight="48px"
            textAlign="center"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            width="960px"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            children=" 
            STREAMYVOCALS - Automated Vocal Mixing"
          ></Text>
    </Flex>
  );
}

export default (StreamyBasic)