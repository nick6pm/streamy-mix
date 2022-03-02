/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Text, View } from "@aws-amplify/ui-react";
export default function MarketingFooter(props) {
  const { overrides: overridesProp, ...rest } = props;
  const overrides = { ...overridesProp };
  return (
    <View
      width="1440px"
      height="100px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "View")}
    >
      <View
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(0,0,0,1)"
        {...getOverrideProps(overrides, "View.View[0]")}
      ></View>
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="400"
        color="rgba(255,255,255,1)"
        lineHeight="24px"
        textAlign="center"
        display="flex"
        direction="column"
        justifyContent="center"
        letterSpacing="0.010000000000000009px"
        width="234px"
        height="100px"
        position="absolute"
        bottom="0px"
        right="0px"
        padding="0px 0px 0px 0px"
        children="STREAMSTATE LLC 2022"
        {...getOverrideProps(overrides, "View.Text[0]")}
      ></Text>
    </View>
  );
}
