import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Text } from "@aws-amplify/ui-react";
import { useNavigate } from "react-router-dom";

export default function HeroLayout3(props) {
  const { overrides: overridesProp, ...rest } = props;
  const overrides = { ...overridesProp };
  let navigate = useNavigate()
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
          children="Download Professional Sounding Videos & Vocals in minutes!"
          {...getOverrideProps(overrides, "Flex.Flex[0].Text[0]")}
        ></Text>
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
            children="Audio Post-Production in the Cloud"
            {...getOverrideProps(overrides, "Flex.Flex[0].Flex[0].Text[0]")}
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
            children="Cutting Edge Post-Audio Automation for Modern Creators"
            {...getOverrideProps(overrides, "Flex.Flex[0].Flex[0].Text[1]")}
          ></Text>
        </Flex>
        <Button
        onClick={() => (navigate("/app"))}
          display="flex"
          shrink="0"
          width="206px"
          size="large"
          variation="primary"
          children="Get Started"
          {...getOverrideProps(overrides, "Flex.Flex[0].Button[0]")}
        ></Button>
      </Flex>
    </Flex>
  );
}