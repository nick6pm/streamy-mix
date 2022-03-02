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
      overflow="hidden"
      position="relative"
      padding="160px 240px 160px 240px"
      backgroundColor="rgba(0,0,0,1)"
      {...rest}
      {...getOverrideProps(overrides, "Flex")}
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
        {...getOverrideProps(overrides, "Flex.Flex[0]")}
      >
        <Flex
          gap="16px"
          direction="column"
          shrink="0"
          width="960px"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Flex.Flex[0].Flex[0]")}
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
            children="UPDATES"
            {...getOverrideProps(overrides, "Flex.Flex[0].Flex[0].Text[0]")}
          ></Text>
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
            position="relative"
            padding="0px 0px 0px 0px"
            children="2.26.22&#xA;&#xA;Pre Beta Launch - Opening up registration for the first 100 signups. Pre-Beta Users will recieve early access to the StreamyMix app, inside updates, and exclusive content."
            {...getOverrideProps(overrides, "Flex.Flex[0].Flex[0].Text[1]")}
          ></Text>
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
            position="relative"
            padding="0px 0px 0px 0px"
            children="Tech Notes: The StreamyMix pre-beta UI & app are running as a serverless React Application with scalability through AWS to reach users around the world without cost to stability, security, or speed. This architecture will allow StreamyMix to grow fast and implement new features rapidly."
            {...getOverrideProps(overrides, "Flex.Flex[0].Flex[0].Text[1]")}
          ></Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
