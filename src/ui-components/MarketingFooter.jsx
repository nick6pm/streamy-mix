/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Text, Flex } from "@aws-amplify/ui-react";
export default function MarketingFooter(props) {
  const { overrides: overridesProp, ...rest } = props;
  const overrides = { ...overridesProp };
  return (
    <Flex
    gap="10px"
    direction="column"
    justifyContent="center"
    alignItems="center"
    width="auto"
    height="auto"
    overflow="hidden"
    position="relative"
    padding="100px 0px 0px 0px"
    backgroundColor="rgba(0,0,0,1)"
    {...rest}
    {...getOverrideProps(overrides, "Flex")}
  >
    <Flex
    direction="row"
    justifyContent="center"
    alignItems="center"
    alignSelf="stretch"
    height = "auto"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "View")}
    >
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="400"
        color="rgba(255,255,255,1)"
        lineHeight="24px"
        textAlign="center"
        display="flex-start"
        alignSelf="center"
        direction="column"
        justifyContent="center"
        letterSpacing="0.010000000000000009px"
        position="relative"
        bottom="25px"
        padding="0px 0px 0px 0px"
        children="STREAMSTATE LLC 2022"
        {...getOverrideProps(overrides, "View.Text[0]")}
      ></Text>
    </Flex>
  </Flex>
  );
}
