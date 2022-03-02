/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text, View } from "@aws-amplify/ui-react";
export default function FAQItem(props) {
  const { overrides: overridesProp, ...rest } = props;
  const overrides = { ...overridesProp };
  return (
    <Flex
      gap="0"
      direction="column"
      width="1280px"
      justifyContent="center"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "Flex")}
    >
      <Flex
        gap="0"
        direction="row"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="24px 24px 24px 24px"
        backgroundColor="rgba(0,0,0,1)"
        {...getOverrideProps(overrides, "Flex.Flex[0]")}
      >
        <Flex
          gap="16px"
          direction="column"
          width="1232px"
          grow="1"
          basis="1232px"
          height="144px"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Flex.Flex[0].Flex[0]")}
        >
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="700"
            color="rgba(255,255,255,1)"
            lineHeight="24px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            width="1232px"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            children="What’s the company?"
            {...getOverrideProps(overrides, "Flex.Flex[0].Flex[0].Text[0]")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(255,255,255,1)"
            lineHeight="24px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            letterSpacing="0.010000000000000009px"
            width="1232px"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            children="Founded 2019 in Spokane, WA. StreamState LLC is Focused on innovative creative & collaborative Software Solutions."
            {...getOverrideProps(overrides, "Flex.Flex[0].Flex[0].Text[1]")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="700"
            color="rgba(255,255,255,1)"
            lineHeight="24px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            width="1232px"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            children="When will StreamyMix be publically released?"
            {...getOverrideProps(overrides, "Flex.Flex[0].Flex[0].Text[2]")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(255,255,255,1)"
            lineHeight="24px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            letterSpacing="0.010000000000000009px"
            width="1232px"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            children="With over 100 pre-beta users; StreamyMix will be in Beta for the first quarter of 2022 with expectations of releasing Full-Alpha the following quarter."
            {...getOverrideProps(overrides, "Flex.Flex[0].Flex[0].Text[3]")}
          ></Text>
        </Flex>
      </Flex>
      <View
        width="1280px"
        height="1px"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Flex.View[0]")}
      >
        <View
          position="absolute"
          top="0%"
          bottom="0%"
          left="0%"
          right="0%"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(174.00000482797623,179.000004529953,183.00000429153442,1)"
          {...getOverrideProps(overrides, "Flex.View[0].View[0]")}
        ></View>
      </View>
    </Flex>
  );
}
