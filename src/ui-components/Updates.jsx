/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text } from "@aws-amplify/ui-react";
export default function Updates(props) {
  const { overrides: overridesProp, ...rest } = props;
  const overrides = { ...overridesProp };
  return (
    <Flex
      gap="10px"
      direction="column"
      justifyContent="center"
      alignItems="center"
      alignSelf="stretch"
      overflow="hidden"
      position="relative"
      width="auto"
      height={"700px"}
      padding="0px 100px 0px 100px"
      backgroundColor="rgba(0,0,0,1)"
    >
        <Flex
        gap="24px"
        direction="column"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        width="max-content"
        position="relative"
        padding="0px 0px 0px 0px"
      >
          <Text
            fontFamily="Inter"
            fontSize="30px"
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
            children="UPDATES"
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
            children="2.26.22&#xA;&#xA;Pre Beta Launch - Opening up registration for the first 100 signups. Pre-Beta Users will recieve early access to the StreamyMix app, inside updates, and exclusive content."
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
            children="Tech Notes: The StreamyMix pre-beta UI & app are running as a serverless React Application with scalability through AWS to reach users around the world without cost to stability, security, or speed. This architecture will allow StreamyMix to grow fast and implement new features rapidly."
          ></Text>
        </Flex>
    </Flex>
  );
}