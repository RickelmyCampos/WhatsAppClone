import {
  AnimatableNumericValue,
  ColorValue,
  DimensionValue,
  FlexAlignType,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
interface BoxProps {
  children?: React.ReactNode;
  padding?: DimensionValue | undefined;
  h?: DimensionValue | undefined;
  w?: DimensionValue | undefined;
  borderRadius?: AnimatableNumericValue | undefined;
  stroke?: number | undefined;
  borderColor?: ColorValue | undefined;
  bg?: ColorValue | undefined;
  flex?:  number | undefined;
  style?:StyleProp<ViewStyle>;
  justifyContent?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly" | undefined;
  alignItems?:FlexAlignType | undefined,
  direction?: "row" | "column" | "row-reverse" | "column-reverse" | undefined
  gap?:number | undefined,
}
const Box: React.FC<BoxProps> = ({
  children,
  padding,
  w,
  h,
  borderRadius,
  stroke,
  borderColor,
  bg,
  flex,
  style,
  justifyContent,
  alignItems,
  direction,
  gap
}) => {
  return (
    <View
      style={[{
        justifyContent,
        flex: flex,
        padding,
        width: w,
        height: h,
        borderRadius: borderRadius,
        borderWidth: stroke,
        borderColor: borderColor,
        backgroundColor: bg,
        alignItems,
        flexDirection:direction,
        gap
      },style]}>
      {children}
    </View>
  );
};

export default Box;

const styles = StyleSheet.create({});
