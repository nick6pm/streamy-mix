/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import {
  getOverrideProps,
  getOverridesFromVariants,
} from "@aws-amplify/ui-react/internal";
import { Flex, Icon, Text, View } from "@aws-amplify/ui-react";
export default function TierPricing(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        "Flex.Flex[0].Flex[0].Text[0]": {},
        "Flex.Flex[0].Flex[0].Text[1]": {},
        "Flex.Flex[0].Flex[0].Flex[0].Text[0]": {},
        "Flex.Flex[0].Flex[0].Flex[0]": {},
        "Flex.Flex[0].Flex[0].View[0].View[0]": {},
        "Flex.Flex[0].Flex[0].View[0]": {},
        "Flex.Flex[0].Flex[0].Flex[1].View[0].Icon[0]": {},
        "Flex.Flex[0].Flex[0].Flex[1].View[0].Icon[1]": {},
        "Flex.Flex[0].Flex[0].Flex[1].View[0]": {},
        "Flex.Flex[0].Flex[0].Flex[1].Text[0]": {},
        "Flex.Flex[0].Flex[0].Flex[1]": {},
        "Flex.Flex[0].Flex[0].Flex[2].View[0].Icon[0]": {},
        "Flex.Flex[0].Flex[0].Flex[2].View[0].Icon[1]": {},
        "Flex.Flex[0].Flex[0].Flex[2].View[0]": {},
        "Flex.Flex[0].Flex[0].Flex[2].Text[0]": {},
        "Flex.Flex[0].Flex[0].Flex[2]": {},
        "Flex.Flex[0].Flex[0]": {},
        "Flex.Flex[0].Flex[1].Text[0]": {},
        "Flex.Flex[0].Flex[1].Text[1]": {},
        "Flex.Flex[0].Flex[1].Flex[0].Text[0]": {},
        "Flex.Flex[0].Flex[1].Flex[0]": {},
        "Flex.Flex[0].Flex[1].View[0].View[0]": {},
        "Flex.Flex[0].Flex[1].View[0]": {},
        "Flex.Flex[0].Flex[1].Flex[1].View[0].Icon[0]": {},
        "Flex.Flex[0].Flex[1].Flex[1].View[0].Icon[1]": {},
        "Flex.Flex[0].Flex[1].Flex[1].View[0]": {},
        "Flex.Flex[0].Flex[1].Flex[1].Text[0]": {},
        "Flex.Flex[0].Flex[1].Flex[1]": {},
        "Flex.Flex[0].Flex[1].Flex[2].View[0].Icon[0]": {},
        "Flex.Flex[0].Flex[1].Flex[2].View[0].Icon[1]": {},
        "Flex.Flex[0].Flex[1].Flex[2].View[0]": {},
        "Flex.Flex[0].Flex[1].Flex[2].Text[0]": {},
        "Flex.Flex[0].Flex[1].Flex[2]": {},
        "Flex.Flex[0].Flex[1]": {},
        "Flex.Flex[0].Flex[2].Text[0]": {},
        "Flex.Flex[0].Flex[2].Text[1]": {},
        "Flex.Flex[0].Flex[2].Flex[0].Text[0]": {},
        "Flex.Flex[0].Flex[2].Flex[0]": {},
        "Flex.Flex[0].Flex[2].View[0].View[0]": {},
        "Flex.Flex[0].Flex[2].View[0]": {},
        "Flex.Flex[0].Flex[2].Flex[1].View[0].Icon[0]": {},
        "Flex.Flex[0].Flex[2].Flex[1].View[0].Icon[1]": {},
        "Flex.Flex[0].Flex[2].Flex[1].View[0]": {},
        "Flex.Flex[0].Flex[2].Flex[1].Text[0]": {},
        "Flex.Flex[0].Flex[2].Flex[1]": {},
        "Flex.Flex[0].Flex[2].Flex[2].View[0].Icon[0]": {},
        "Flex.Flex[0].Flex[2].Flex[2].View[0].Icon[1]": {},
        "Flex.Flex[0].Flex[2].Flex[2].View[0]": {},
        "Flex.Flex[0].Flex[2].Flex[2].Text[0]": {},
        "Flex.Flex[0].Flex[2].Flex[2]": {},
        "Flex.Flex[0].Flex[2].Flex[3].View[0].Icon[0]": {},
        "Flex.Flex[0].Flex[2].Flex[3].View[0].Icon[1]": {},
        "Flex.Flex[0].Flex[2].Flex[3].View[0]": {},
        "Flex.Flex[0].Flex[2].Flex[3].Text[0]": {},
        "Flex.Flex[0].Flex[2].Flex[3]": {},
        "Flex.Flex[0].Flex[2]": {},
        "Flex.Flex[0].Flex[3].Text[0]": {},
        "Flex.Flex[0].Flex[3].Text[1]": {},
        "Flex.Flex[0].Flex[3].Flex[0].Text[0]": {},
        "Flex.Flex[0].Flex[3].Flex[0]": {},
        "Flex.Flex[0].Flex[3].View[0].View[0]": {},
        "Flex.Flex[0].Flex[3].View[0]": {},
        "Flex.Flex[0].Flex[3].Flex[1].View[0].Icon[0]": {},
        "Flex.Flex[0].Flex[3].Flex[1].View[0].Icon[1]": {},
        "Flex.Flex[0].Flex[3].Flex[1].View[0]": {},
        "Flex.Flex[0].Flex[3].Flex[1].Text[0]": {},
        "Flex.Flex[0].Flex[3].Flex[1]": {},
        "Flex.Flex[0].Flex[3].Flex[2].View[0].Icon[0]": {},
        "Flex.Flex[0].Flex[3].Flex[2].View[0].Icon[1]": {},
        "Flex.Flex[0].Flex[3].Flex[2].View[0]": {},
        "Flex.Flex[0].Flex[3].Flex[2].Text[0]": {},
        "Flex.Flex[0].Flex[3].Flex[2]": {},
        "Flex.Flex[0].Flex[3].Flex[3].View[0].Icon[0]": {},
        "Flex.Flex[0].Flex[3].Flex[3].View[0].Icon[1]": {},
        "Flex.Flex[0].Flex[3].Flex[3].View[0]": {},
        "Flex.Flex[0].Flex[3].Flex[3].Text[0]": {},
        "Flex.Flex[0].Flex[3].Flex[3]": {},
        "Flex.Flex[0].Flex[3]": {},
        "Flex.Flex[0]": {},
        Flex: {},
      },
      variantValues: { property1: "Default" },
    },
    {
      overrides: {
        "Flex.Flex[0].Flex[0].Text[0]": { children: "CREDIT" },
        "Flex.Flex[0].Flex[0].Text[1]": { children: "$5" },
        "Flex.Flex[0].Flex[0].Flex[0].Text[0]": {},
        "Flex.Flex[0].Flex[0].Flex[0]": {},
        "Flex.Flex[0].Flex[0].View[0].View[0]": {
          backgroundColor: "rgba(0,0,0,1)",
        },
        "Flex.Flex[0].Flex[0].View[0]": {},
        "Flex.Flex[0].Flex[0].Flex[1].View[0].Icon[0]": {},
        "Flex.Flex[0].Flex[0].Flex[1].View[0].Icon[1]": {},
        "Flex.Flex[0].Flex[0].Flex[1].View[0]": {},
        "Flex.Flex[0].Flex[0].Flex[1].Text[0]": {},
        "Flex.Flex[0].Flex[0].Flex[1]": {},
        "Flex.Flex[0].Flex[0].Flex[2]": {},
        "Flex.Flex[0].Flex[0]": {},
        "Flex.Flex[0].Flex[1].Text[0]": { children: "PREMIUM " },
        "Flex.Flex[0].Flex[1].Text[1]": { children: "$20" },
        "Flex.Flex[0].Flex[1].Flex[0].Text[0]": { color: "rgba(0,0,0,1)" },
        "Flex.Flex[0].Flex[1].Flex[0]": {},
        "Flex.Flex[0].Flex[1].View[0].View[0]": {
          backgroundColor: "rgba(0,0,0,1)",
        },
        "Flex.Flex[0].Flex[1].View[0]": {},
        "Flex.Flex[0].Flex[1].Flex[1].View[0].Icon[0]": {},
        "Flex.Flex[0].Flex[1].Flex[1].View[0].Icon[1]": {},
        "Flex.Flex[0].Flex[1].Flex[1].View[0]": {},
        "Flex.Flex[0].Flex[1].Flex[1].Text[0]": {
          children: "5 Regular Credits  (over 2mins)             (monthly)",
        },
        "Flex.Flex[0].Flex[1].Flex[1]": {},
        "Flex.Flex[0].Flex[1]": { height: "354px" },
        "Flex.Flex[0].Flex[2].Text[0]": { children: "CREATOR\nBUNDLE" },
        "Flex.Flex[0].Flex[2].Text[1]": { children: "$100" },
        "Flex.Flex[0].Flex[2].Flex[0].Text[0]": {},
        "Flex.Flex[0].Flex[2].Flex[0]": {},
        "Flex.Flex[0].Flex[2].View[0].View[0]": {
          backgroundColor: "rgba(0,0,0,1)",
        },
        "Flex.Flex[0].Flex[2].View[0]": {},
        "Flex.Flex[0].Flex[2].Flex[1].View[0].Icon[0]": {},
        "Flex.Flex[0].Flex[2].Flex[1].View[0].Icon[1]": {},
        "Flex.Flex[0].Flex[2].Flex[1].View[0]": {},
        "Flex.Flex[0].Flex[2].Flex[1].Text[0]": {},
        "Flex.Flex[0].Flex[2].Flex[1]": {},
        "Flex.Flex[0].Flex[2].Flex[2].View[0].Icon[0]": {},
        "Flex.Flex[0].Flex[2].Flex[2].View[0].Icon[1]": {},
        "Flex.Flex[0].Flex[2].Flex[2].View[0]": {},
        "Flex.Flex[0].Flex[2].Flex[2].Text[0]": {
          children: "5 Premium Credits  (over 5mins)         (monthly)",
        },
        "Flex.Flex[0].Flex[2].Flex[2]": {},
        "Flex.Flex[0].Flex[2]": { height: "474px" },
        "Flex.Flex[0].Flex[3].Text[0]": { children: "BUSINESS\nCOMBO" },
        "Flex.Flex[0].Flex[3].Text[1]": { children: "$450" },
        "Flex.Flex[0].Flex[3].Flex[0].Text[0]": {},
        "Flex.Flex[0].Flex[3].Flex[0]": {},
        "Flex.Flex[0].Flex[3].View[0].View[0]": {
          backgroundColor: "rgba(0,0,0,1)",
        },
        "Flex.Flex[0].Flex[3].View[0]": {},
        "Flex.Flex[0].Flex[3].Flex[1].View[0].Icon[0]": {},
        "Flex.Flex[0].Flex[3].Flex[1].View[0].Icon[1]": {},
        "Flex.Flex[0].Flex[3].Flex[1].View[0]": {},
        "Flex.Flex[0].Flex[3].Flex[1].Text[0]": {},
        "Flex.Flex[0].Flex[3].Flex[1]": {},
        "Flex.Flex[0].Flex[3].Flex[2].View[0].Icon[0]": {},
        "Flex.Flex[0].Flex[3].Flex[2].View[0].Icon[1]": {},
        "Flex.Flex[0].Flex[3].Flex[2].View[0]": {},
        "Flex.Flex[0].Flex[3].Flex[2].Text[0]": {
          children: "15 Premium Credits \n(over 5 mins)         (monthly)",
        },
        "Flex.Flex[0].Flex[3].Flex[2]": {},
        "Flex.Flex[0].Flex[3]": { height: "474px" },
        "Flex.Flex[0]": { height: "474px" },
        Flex: {},
      },
      variantValues: { property1: "Variant2" },
    },
  ];
  const mergeVariantsAndOverrides = (variants, overrides) => {
    const overrideKeys = new Set(Object.keys(overrides));
    const sharedKeys = Object.keys(variants).filter((variantKey) =>
      overrideKeys.has(variantKey)
    );
    const merged = Object.fromEntries(
      sharedKeys.map((sharedKey) => [
        sharedKey,
        { ...variants[sharedKey], ...overrides[sharedKey] },
      ])
    );
    return {
      ...variants,
      ...overrides,
      ...merged,
    };
  };
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <Flex
      gap="24px"
      direction="row"
      width="1440px"
      justifyContent="center"
      alignItems="center"
      overflow="hidden"
      position="relative"
      padding="40px 140px 40px 140px"
      backgroundColor="rgba(0,0,0,1)"
      {...rest}
      {...getOverrideProps(overrides, "Flex")}
    >
      <Flex
        gap="24px"
        direction="row"
        width="1160px"
        alignItems="flex-start"
        grow="1"
        basis="1160px"
        height="450px"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Flex.Flex[0]")}
      >
        <Flex
          gap="24px"
          direction="column"
          width="272px"
          height="378px"
          justifyContent="center"
          alignItems="center"
          grow="1"
          basis="272px"
          position="relative"
          padding="24px 24px 24px 24px"
          backgroundColor="rgba(0,0,0,1)"
          {...getOverrideProps(overrides, "Flex.Flex[0].Flex[0]")}
        >
          <Text
            fontFamily="Inter"
            fontSize="40px"
            fontWeight="400"
            color="rgba(255,255,255,1)"
            lineHeight="48px"
            textAlign="center"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            width="224px"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            children="FREE"
            {...getOverrideProps(overrides, "Flex.Flex[0].Flex[0].Text[0]")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="32px"
            fontWeight="400"
            color="rgba(255,255,255,1)"
            lineHeight="40px"
            textAlign="center"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            width="224px"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            children="$0/mo"
            {...getOverrideProps(overrides, "Flex.Flex[0].Flex[0].Text[1]")}
          ></Text>
          <Flex
            gap="10px"
            direction="row"
            height="48px"
            justifyContent="center"
            alignItems="center"
            grow="1"
            basis="48px"
            alignSelf="stretch"
            position="relative"
            borderRadius="4px"
            padding="12px 24px 12px 24px"
            backgroundColor="rgba(255,255,255,1)"
            {...getOverrideProps(overrides, "Flex.Flex[0].Flex[0].Flex[0]")}
          >
            <Text
              fontFamily="Inter"
              fontSize="20px"
              fontWeight="400"
              color="rgba(0,0,0,1)"
              lineHeight="24px"
              textAlign="left"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              letterSpacing="0.65px"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              children="Select"
              {...getOverrideProps(
                overrides,
                "Flex.Flex[0].Flex[0].Flex[0].Text[0]"
              )}
            ></Text>
          </Flex>
          <View
            width="224px"
            height="2px"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            backgroundColor="rgba(255,255,255,1)"
            {...getOverrideProps(overrides, "Flex.Flex[0].Flex[0].View[0]")}
          >
            <View
              position="absolute"
              top="0%"
              bottom="0%"
              left="0%"
              right="0%"
              padding="0px 0px 0px 0px"
              backgroundColor="rgba(174.00000482797623,179.000004529953,183.00000429153442,1)"
              {...getOverrideProps(
                overrides,
                "Flex.Flex[0].Flex[0].View[0].View[0]"
              )}
            ></View>
          </View>
          <Flex
            gap="16px"
            direction="row"
            alignItems="flex-start"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Flex.Flex[0].Flex[0].Flex[1]")}
          >
            <View
              width="24px"
              height="24px"
              shrink="0"
              overflow="hidden"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(
                overrides,
                "Flex.Flex[0].Flex[0].Flex[1].View[0]"
              )}
            >
              <Icon
                width="24px"
                height="24px"
                pathData=""
                viewBox={{ minX: 0, minY: 0, width: 24, height: 24 }}
                position="absolute"
                top="0%"
                bottom="0%"
                left="0%"
                right="0%"
                {...getOverrideProps(
                  overrides,
                  "Flex.Flex[0].Flex[0].Flex[1].View[0].Icon[0]"
                )}
              ></Icon>
              <Icon
                width="17.589996337890625px"
                height="13.41015625px"
                pathData="M5.59 10.58L1.42 6.41L0 7.82L5.59 13.41L17.59 1.41L16.18 0L5.59 10.58Z"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 17.589996337890625,
                  height: 13.41015625,
                }}
                color="rgba(119.00000050663948,202.00000315904617,133.00000727176666,1)"
                position="absolute"
                top="23.291667302449547%"
                bottom="20.833333333333336%"
                left="14.208333690961203%"
                right="12.499999006589253%"
                {...getOverrideProps(
                  overrides,
                  "Flex.Flex[0].Flex[0].Flex[1].View[0].Icon[1]"
                )}
              ></Icon>
            </View>
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="700"
              color="rgba(255,255,255,1)"
              lineHeight="24px"
              textAlign="center"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              letterSpacing="0.010000000000000009px"
              width="184px"
              grow="1"
              basis="184px"
              position="relative"
              padding="0px 0px 0px 0px"
              children="1 Regular Credit (monthly)"
              {...getOverrideProps(
                overrides,
                "Flex.Flex[0].Flex[0].Flex[1].Text[0]"
              )}
            ></Text>
          </Flex>
          <Flex
            gap="16px"
            direction="row"
            alignItems="flex-start"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Flex.Flex[0].Flex[0].Flex[2]")}
          >
            <View
              width="24px"
              height="24px"
              shrink="0"
              overflow="hidden"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(
                overrides,
                "Flex.Flex[0].Flex[0].Flex[2].View[0]"
              )}
            >
              <Icon
                width="24px"
                height="24px"
                pathData=""
                viewBox={{ minX: 0, minY: 0, width: 24, height: 24 }}
                position="absolute"
                top="0%"
                bottom="0%"
                left="0%"
                right="0%"
                {...getOverrideProps(
                  overrides,
                  "Flex.Flex[0].Flex[0].Flex[2].View[0].Icon[0]"
                )}
              ></Icon>
              <Icon
                width="17.589996337890625px"
                height="13.41015625px"
                pathData="M5.59 10.58L1.42 6.41L0 7.82L5.59 13.41L17.59 1.41L16.18 0L5.59 10.58Z"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 17.589996337890625,
                  height: 13.41015625,
                }}
                color="rgba(149.00000631809235,4.000000236555934,4.000000236555934,1)"
                position="absolute"
                top="23.291667302449547%"
                bottom="20.833333333333336%"
                left="14.208333690961203%"
                right="12.499999006589253%"
                {...getOverrideProps(
                  overrides,
                  "Flex.Flex[0].Flex[0].Flex[2].View[0].Icon[1]"
                )}
              ></Icon>
            </View>
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="700"
              color="rgba(255,255,255,1)"
              lineHeight="24px"
              textAlign="center"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              letterSpacing="0.010000000000000009px"
              width="184px"
              grow="1"
              basis="184px"
              position="relative"
              padding="0px 0px 0px 0px"
              children="ADS"
              {...getOverrideProps(
                overrides,
                "Flex.Flex[0].Flex[0].Flex[2].Text[0]"
              )}
            ></Text>
          </Flex>
        </Flex>
        <Flex
          gap="24px"
          direction="column"
          width="272px"
          justifyContent="center"
          alignItems="center"
          grow="1"
          basis="272px"
          height="378px"
          position="relative"
          padding="24px 24px 24px 24px"
          backgroundColor="rgba(0,0,0,1)"
          {...getOverrideProps(overrides, "Flex.Flex[0].Flex[1]")}
        >
          <Text
            fontFamily="Inter"
            fontSize="40px"
            fontWeight="400"
            color="rgba(255,255,255,1)"
            lineHeight="48px"
            textAlign="center"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            width="224px"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            children="BASIC"
            {...getOverrideProps(overrides, "Flex.Flex[0].Flex[1].Text[0]")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="32px"
            fontWeight="400"
            color="rgba(255,255,255,1)"
            lineHeight="40px"
            textAlign="center"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            width="224px"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            children="$9.99/mo"
            {...getOverrideProps(overrides, "Flex.Flex[0].Flex[1].Text[1]")}
          ></Text>
          <Flex
            gap="10px"
            direction="row"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            borderRadius="4px"
            padding="12px 24px 12px 24px"
            backgroundColor="rgba(255,255,255,1)"
            {...getOverrideProps(overrides, "Flex.Flex[0].Flex[1].Flex[0]")}
          >
            <Text
              fontFamily="Inter"
              fontSize="20px"
              fontWeight="400"
              color="rgba(35.00000171363354,47.0000009983778,62.00000010430813,1)"
              lineHeight="24px"
              textAlign="left"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              letterSpacing="0.65px"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              children="Select"
              {...getOverrideProps(
                overrides,
                "Flex.Flex[0].Flex[1].Flex[0].Text[0]"
              )}
            ></Text>
          </Flex>
          <View
            width="224px"
            height="2px"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Flex.Flex[0].Flex[1].View[0]")}
          >
            <View
              position="absolute"
              top="0%"
              bottom="0%"
              left="0%"
              right="0%"
              padding="0px 0px 0px 0px"
              backgroundColor="rgba(174.00000482797623,179.000004529953,183.00000429153442,1)"
              {...getOverrideProps(
                overrides,
                "Flex.Flex[0].Flex[1].View[0].View[0]"
              )}
            ></View>
          </View>
          <Flex
            gap="16px"
            direction="row"
            alignItems="flex-start"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Flex.Flex[0].Flex[1].Flex[1]")}
          >
            <View
              width="24px"
              height="24px"
              shrink="0"
              overflow="hidden"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(
                overrides,
                "Flex.Flex[0].Flex[1].Flex[1].View[0]"
              )}
            >
              <Icon
                width="24px"
                height="24px"
                pathData=""
                viewBox={{ minX: 0, minY: 0, width: 24, height: 24 }}
                position="absolute"
                top="0%"
                bottom="0%"
                left="0%"
                right="0%"
                {...getOverrideProps(
                  overrides,
                  "Flex.Flex[0].Flex[1].Flex[1].View[0].Icon[0]"
                )}
              ></Icon>
              <Icon
                width="17.589996337890625px"
                height="13.41015625px"
                pathData="M5.59 10.58L1.42 6.41L0 7.82L5.59 13.41L17.59 1.41L16.18 0L5.59 10.58Z"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 17.589996337890625,
                  height: 13.41015625,
                }}
                color="rgba(119.00000050663948,202.00000315904617,133.00000727176666,1)"
                position="absolute"
                top="23.291667302449547%"
                bottom="20.833333333333336%"
                left="14.208333690961203%"
                right="12.499999006589253%"
                {...getOverrideProps(
                  overrides,
                  "Flex.Flex[0].Flex[1].Flex[1].View[0].Icon[1]"
                )}
              ></Icon>
            </View>
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="700"
              color="rgba(255,255,255,1)"
              lineHeight="24px"
              textAlign="center"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              letterSpacing="0.010000000000000009px"
              width="184px"
              grow="1"
              basis="184px"
              position="relative"
              padding="0px 0px 0px 0px"
              children="5 Regular Credits (monthly)"
              {...getOverrideProps(
                overrides,
                "Flex.Flex[0].Flex[1].Flex[1].Text[0]"
              )}
            ></Text>
          </Flex>
          <Flex
            gap="16px"
            direction="row"
            alignItems="flex-start"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Flex.Flex[0].Flex[1].Flex[2]")}
          >
            <View
              width="24px"
              height="24px"
              shrink="0"
              overflow="hidden"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(
                overrides,
                "Flex.Flex[0].Flex[1].Flex[2].View[0]"
              )}
            >
              <Icon
                width="24px"
                height="24px"
                pathData=""
                viewBox={{ minX: 0, minY: 0, width: 24, height: 24 }}
                position="absolute"
                top="0%"
                bottom="0%"
                left="0%"
                right="0%"
                {...getOverrideProps(
                  overrides,
                  "Flex.Flex[0].Flex[1].Flex[2].View[0].Icon[0]"
                )}
              ></Icon>
              <Icon
                width="17.589996337890625px"
                height="13.41015625px"
                pathData="M5.59 10.58L1.42 6.41L0 7.82L5.59 13.41L17.59 1.41L16.18 0L5.59 10.58Z"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 17.589996337890625,
                  height: 13.41015625,
                }}
                color="rgba(149.00000631809235,4.000000236555934,4.000000236555934,1)"
                position="absolute"
                top="23.291667302449547%"
                bottom="20.833333333333336%"
                left="14.208333690961203%"
                right="12.499999006589253%"
                {...getOverrideProps(
                  overrides,
                  "Flex.Flex[0].Flex[1].Flex[2].View[0].Icon[1]"
                )}
              ></Icon>
            </View>
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="700"
              color="rgba(255,255,255,1)"
              lineHeight="24px"
              textAlign="center"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              letterSpacing="0.010000000000000009px"
              width="184px"
              grow="1"
              basis="184px"
              position="relative"
              padding="0px 0px 0px 0px"
              children="ADS"
              {...getOverrideProps(
                overrides,
                "Flex.Flex[0].Flex[1].Flex[2].Text[0]"
              )}
            ></Text>
          </Flex>
        </Flex>
        <Flex
          gap="24px"
          direction="column"
          width="272px"
          justifyContent="center"
          alignItems="center"
          grow="1"
          basis="272px"
          height="450px"
          position="relative"
          padding="24px 24px 24px 24px"
          backgroundColor="rgba(0,0,0,1)"
          {...getOverrideProps(overrides, "Flex.Flex[0].Flex[2]")}
        >
          <Text
            fontFamily="Inter"
            fontSize="40px"
            fontWeight="400"
            color="rgba(255,255,255,1)"
            lineHeight="48px"
            textAlign="center"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            width="224px"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            children="CREATOR"
            {...getOverrideProps(overrides, "Flex.Flex[0].Flex[2].Text[0]")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="32px"
            fontWeight="400"
            color="rgba(255,255,255,1)"
            lineHeight="40px"
            textAlign="center"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            width="224px"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            children="$19.99/mo"
            {...getOverrideProps(overrides, "Flex.Flex[0].Flex[2].Text[1]")}
          ></Text>
          <Flex
            gap="10px"
            direction="row"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            borderRadius="4px"
            padding="12px 24px 12px 24px"
            backgroundColor="rgba(255,255,255,1)"
            {...getOverrideProps(overrides, "Flex.Flex[0].Flex[2].Flex[0]")}
          >
            <Text
              fontFamily="Inter"
              fontSize="20px"
              fontWeight="400"
              color="rgba(0,0,0,1)"
              lineHeight="24px"
              textAlign="left"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              letterSpacing="0.65px"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              children="Select"
              {...getOverrideProps(
                overrides,
                "Flex.Flex[0].Flex[2].Flex[0].Text[0]"
              )}
            ></Text>
          </Flex>
          <View
            width="224px"
            height="2px"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Flex.Flex[0].Flex[2].View[0]")}
          >
            <View
              position="absolute"
              top="0%"
              bottom="0%"
              left="0%"
              right="0%"
              padding="0px 0px 0px 0px"
              backgroundColor="rgba(174.00000482797623,179.000004529953,183.00000429153442,1)"
              {...getOverrideProps(
                overrides,
                "Flex.Flex[0].Flex[2].View[0].View[0]"
              )}
            ></View>
          </View>
          <Flex
            gap="16px"
            direction="row"
            alignItems="flex-start"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Flex.Flex[0].Flex[2].Flex[1]")}
          >
            <View
              width="24px"
              height="24px"
              shrink="0"
              overflow="hidden"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(
                overrides,
                "Flex.Flex[0].Flex[2].Flex[1].View[0]"
              )}
            >
              <Icon
                width="24px"
                height="24px"
                pathData=""
                viewBox={{ minX: 0, minY: 0, width: 24, height: 24 }}
                position="absolute"
                top="0%"
                bottom="0%"
                left="0%"
                right="0%"
                {...getOverrideProps(
                  overrides,
                  "Flex.Flex[0].Flex[2].Flex[1].View[0].Icon[0]"
                )}
              ></Icon>
              <Icon
                width="17.59002685546875px"
                height="13.41015625px"
                pathData="M5.59 10.58L1.42 6.41L0 7.82L5.59 13.41L17.59 1.41L16.18 0L5.59 10.58Z"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 17.59002685546875,
                  height: 13.41015625,
                }}
                color="rgba(63.999996185302734,169.83334600925446,191.00000381469727,1)"
                position="absolute"
                top="23.291667302449547%"
                bottom="20.833333333333336%"
                left="14.208333690961203%"
                right="12.499999006589253%"
                {...getOverrideProps(
                  overrides,
                  "Flex.Flex[0].Flex[2].Flex[1].View[0].Icon[1]"
                )}
              ></Icon>
            </View>
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="700"
              color="rgba(255,255,255,1)"
              lineHeight="24px"
              textAlign="center"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              letterSpacing="0.010000000000000009px"
              width="184px"
              grow="1"
              basis="184px"
              position="relative"
              padding="0px 0px 0px 0px"
              children="10 Regular Credits (monthly)"
              {...getOverrideProps(
                overrides,
                "Flex.Flex[0].Flex[2].Flex[1].Text[0]"
              )}
            ></Text>
          </Flex>
          <Flex
            gap="16px"
            direction="row"
            alignItems="flex-start"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Flex.Flex[0].Flex[2].Flex[2]")}
          >
            <View
              width="24px"
              height="24px"
              shrink="0"
              overflow="hidden"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(
                overrides,
                "Flex.Flex[0].Flex[2].Flex[2].View[0]"
              )}
            >
              <Icon
                width="24px"
                height="24px"
                pathData=""
                viewBox={{ minX: 0, minY: 0, width: 24, height: 24 }}
                position="absolute"
                top="0%"
                bottom="0%"
                left="0%"
                right="0%"
                {...getOverrideProps(
                  overrides,
                  "Flex.Flex[0].Flex[2].Flex[2].View[0].Icon[0]"
                )}
              ></Icon>
              <Icon
                width="17.59002685546875px"
                height="13.41015625px"
                pathData="M5.59 10.58L1.42 6.41L0 7.82L5.59 13.41L17.59 1.41L16.18 0L5.59 10.58Z"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 17.59002685546875,
                  height: 13.41015625,
                }}
                color="rgba(63.999996185302734,169.83334600925446,191.00000381469727,1)"
                position="absolute"
                top="23.291667302449547%"
                bottom="20.833333333333336%"
                left="14.208333690961203%"
                right="12.499999006589253%"
                {...getOverrideProps(
                  overrides,
                  "Flex.Flex[0].Flex[2].Flex[2].View[0].Icon[1]"
                )}
              ></Icon>
            </View>
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="700"
              color="rgba(255,255,255,1)"
              lineHeight="24px"
              textAlign="center"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              letterSpacing="0.010000000000000009px"
              width="184px"
              grow="1"
              basis="184px"
              position="relative"
              padding="0px 0px 0px 0px"
              children="5 Premium Credits (monthly)"
              {...getOverrideProps(
                overrides,
                "Flex.Flex[0].Flex[2].Flex[2].Text[0]"
              )}
            ></Text>
          </Flex>
          <Flex
            gap="16px"
            direction="row"
            alignItems="flex-start"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Flex.Flex[0].Flex[2].Flex[3]")}
          >
            <View
              width="24px"
              height="24px"
              shrink="0"
              overflow="hidden"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(
                overrides,
                "Flex.Flex[0].Flex[2].Flex[3].View[0]"
              )}
            >
              <Icon
                width="24px"
                height="24px"
                pathData=""
                viewBox={{ minX: 0, minY: 0, width: 24, height: 24 }}
                position="absolute"
                top="0%"
                bottom="0%"
                left="0%"
                right="0%"
                {...getOverrideProps(
                  overrides,
                  "Flex.Flex[0].Flex[2].Flex[3].View[0].Icon[0]"
                )}
              ></Icon>
              <Icon
                width="17.59002685546875px"
                height="13.41015625px"
                pathData="M5.59 10.58L1.42 6.41L0 7.82L5.59 13.41L17.59 1.41L16.18 0L5.59 10.58Z"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 17.59002685546875,
                  height: 13.41015625,
                }}
                color="rgba(63.999996185302734,169.83334600925446,191.00000381469727,1)"
                position="absolute"
                top="23.291667302449547%"
                bottom="20.833333333333336%"
                left="14.208333690961203%"
                right="12.499999006589253%"
                {...getOverrideProps(
                  overrides,
                  "Flex.Flex[0].Flex[2].Flex[3].View[0].Icon[1]"
                )}
              ></Icon>
            </View>
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="700"
              color="rgba(255,255,255,1)"
              lineHeight="24px"
              textAlign="center"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              letterSpacing="0.010000000000000009px"
              width="184px"
              grow="1"
              basis="184px"
              position="relative"
              padding="0px 0px 0px 0px"
              children="No ADS"
              {...getOverrideProps(
                overrides,
                "Flex.Flex[0].Flex[2].Flex[3].Text[0]"
              )}
            ></Text>
          </Flex>
        </Flex>
        <Flex
          gap="24px"
          direction="column"
          width="272px"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          height="450px"
          position="relative"
          padding="24px 24px 24px 24px"
          backgroundColor="rgba(0,0,0,1)"
          {...getOverrideProps(overrides, "Flex.Flex[0].Flex[3]")}
        >
          <Text
            fontFamily="Inter"
            fontSize="40px"
            fontWeight="400"
            color="rgba(255,255,255,1)"
            lineHeight="48px"
            textAlign="center"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            width="224px"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            children="BUSINESS"
            {...getOverrideProps(overrides, "Flex.Flex[0].Flex[3].Text[0]")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="32px"
            fontWeight="400"
            color="rgba(255,255,255,1)"
            lineHeight="40px"
            textAlign="center"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            width="224px"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            children="$29.99/mo"
            {...getOverrideProps(overrides, "Flex.Flex[0].Flex[3].Text[1]")}
          ></Text>
          <Flex
            gap="10px"
            direction="row"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            borderRadius="4px"
            padding="12px 24px 12px 24px"
            backgroundColor="rgba(255,255,255,1)"
            {...getOverrideProps(overrides, "Flex.Flex[0].Flex[3].Flex[0]")}
          >
            <Text
              fontFamily="Inter"
              fontSize="20px"
              fontWeight="400"
              color="rgba(0,0,0,1)"
              lineHeight="24px"
              textAlign="left"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              letterSpacing="0.65px"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              children="Select"
              {...getOverrideProps(
                overrides,
                "Flex.Flex[0].Flex[3].Flex[0].Text[0]"
              )}
            ></Text>
          </Flex>
          <View
            width="224px"
            height="2px"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Flex.Flex[0].Flex[3].View[0]")}
          >
            <View
              position="absolute"
              top="0%"
              bottom="0%"
              left="0%"
              right="0%"
              padding="0px 0px 0px 0px"
              backgroundColor="rgba(174.00000482797623,179.000004529953,183.00000429153442,1)"
              {...getOverrideProps(
                overrides,
                "Flex.Flex[0].Flex[3].View[0].View[0]"
              )}
            ></View>
          </View>
          <Flex
            gap="16px"
            direction="row"
            alignItems="flex-start"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Flex.Flex[0].Flex[3].Flex[1]")}
          >
            <View
              width="24px"
              height="24px"
              shrink="0"
              overflow="hidden"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(
                overrides,
                "Flex.Flex[0].Flex[3].Flex[1].View[0]"
              )}
            >
              <Icon
                width="24px"
                height="24px"
                pathData=""
                viewBox={{ minX: 0, minY: 0, width: 24, height: 24 }}
                position="absolute"
                top="0%"
                bottom="0%"
                left="0%"
                right="0%"
                {...getOverrideProps(
                  overrides,
                  "Flex.Flex[0].Flex[3].Flex[1].View[0].Icon[0]"
                )}
              ></Icon>
              <Icon
                width="17.59002685546875px"
                height="13.41015625px"
                pathData="M5.59 10.58L1.42 6.41L0 7.82L5.59 13.41L17.59 1.41L16.18 0L5.59 10.58Z"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 17.59002685546875,
                  height: 13.41015625,
                }}
                color="rgba(63.999996185302734,169.83334600925446,191.00000381469727,1)"
                position="absolute"
                top="23.291667302449547%"
                bottom="20.833333333333336%"
                left="14.208333690961203%"
                right="12.499999006589253%"
                {...getOverrideProps(
                  overrides,
                  "Flex.Flex[0].Flex[3].Flex[1].View[0].Icon[1]"
                )}
              ></Icon>
            </View>
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="700"
              color="rgba(255,255,255,1)"
              lineHeight="24px"
              textAlign="center"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              letterSpacing="0.010000000000000009px"
              width="184px"
              grow="1"
              basis="184px"
              position="relative"
              padding="0px 0px 0px 0px"
              children="50 Regular Credits (monthly)"
              {...getOverrideProps(
                overrides,
                "Flex.Flex[0].Flex[3].Flex[1].Text[0]"
              )}
            ></Text>
          </Flex>
          <Flex
            gap="16px"
            direction="row"
            alignItems="flex-start"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Flex.Flex[0].Flex[3].Flex[2]")}
          >
            <View
              width="24px"
              height="24px"
              shrink="0"
              overflow="hidden"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(
                overrides,
                "Flex.Flex[0].Flex[3].Flex[2].View[0]"
              )}
            >
              <Icon
                width="24px"
                height="24px"
                pathData=""
                viewBox={{ minX: 0, minY: 0, width: 24, height: 24 }}
                position="absolute"
                top="0%"
                bottom="0%"
                left="0%"
                right="0%"
                {...getOverrideProps(
                  overrides,
                  "Flex.Flex[0].Flex[3].Flex[2].View[0].Icon[0]"
                )}
              ></Icon>
              <Icon
                width="17.59002685546875px"
                height="13.41015625px"
                pathData="M5.59 10.58L1.42 6.41L0 7.82L5.59 13.41L17.59 1.41L16.18 0L5.59 10.58Z"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 17.59002685546875,
                  height: 13.41015625,
                }}
                color="rgba(63.999996185302734,169.83334600925446,191.00000381469727,1)"
                position="absolute"
                top="23.291667302449547%"
                bottom="20.833333333333336%"
                left="14.208333690961203%"
                right="12.499999006589253%"
                {...getOverrideProps(
                  overrides,
                  "Flex.Flex[0].Flex[3].Flex[2].View[0].Icon[1]"
                )}
              ></Icon>
            </View>
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="700"
              color="rgba(255,255,255,1)"
              lineHeight="24px"
              textAlign="center"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              letterSpacing="0.010000000000000009px"
              width="184px"
              grow="1"
              basis="184px"
              position="relative"
              padding="0px 0px 0px 0px"
              children="15 Premium Credits (monthly)"
              {...getOverrideProps(
                overrides,
                "Flex.Flex[0].Flex[3].Flex[2].Text[0]"
              )}
            ></Text>
          </Flex>
          <Flex
            gap="16px"
            direction="row"
            alignItems="flex-start"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Flex.Flex[0].Flex[3].Flex[3]")}
          >
            <View
              width="24px"
              height="24px"
              shrink="0"
              overflow="hidden"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(
                overrides,
                "Flex.Flex[0].Flex[3].Flex[3].View[0]"
              )}
            >
              <Icon
                width="24px"
                height="24px"
                pathData=""
                viewBox={{ minX: 0, minY: 0, width: 24, height: 24 }}
                position="absolute"
                top="0%"
                bottom="0%"
                left="0%"
                right="0%"
                {...getOverrideProps(
                  overrides,
                  "Flex.Flex[0].Flex[3].Flex[3].View[0].Icon[0]"
                )}
              ></Icon>
              <Icon
                width="17.59002685546875px"
                height="13.41015625px"
                pathData="M5.59 10.58L1.42 6.41L0 7.82L5.59 13.41L17.59 1.41L16.18 0L5.59 10.58Z"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 17.59002685546875,
                  height: 13.41015625,
                }}
                color="rgba(63.999996185302734,169.83334600925446,191.00000381469727,1)"
                position="absolute"
                top="23.291667302449547%"
                bottom="20.833333333333336%"
                left="14.208333690961203%"
                right="12.499999006589253%"
                {...getOverrideProps(
                  overrides,
                  "Flex.Flex[0].Flex[3].Flex[3].View[0].Icon[1]"
                )}
              ></Icon>
            </View>
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="700"
              color="rgba(255,255,255,1)"
              lineHeight="24px"
              textAlign="center"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              letterSpacing="0.010000000000000009px"
              width="184px"
              grow="1"
              basis="184px"
              position="relative"
              padding="0px 0px 0px 0px"
              children="No ADS"
              {...getOverrideProps(
                overrides,
                "Flex.Flex[0].Flex[3].Flex[3].Text[0]"
              )}
            ></Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
