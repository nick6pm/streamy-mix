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
import { IconMoreHoriz, View } from "@aws-amplify/ui-react";
export default function NavToggle(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: { "View.IconMoreHoriz[0]": {}, View: {} },
      variantValues: { property1: "Default" },
    },
    { overrides: { View: {} }, variantValues: { property1: "Close" } },
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
    <View
      width="24px"
      height="24px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "View")}
    >
      <IconMoreHoriz
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        overflow="hidden"
        padding="0px 0px 0px 0px"
        color="rgba(13.000000175088644,26.000000350177288,38.0000015348196,1)"
        type="more_horiz"
        {...getOverrideProps(overrides, "View.IconMoreHoriz[0]")}
      ></IconMoreHoriz>
    </View>
  );
}
