import {StyleSheet} from 'react-native';
import fontFamilies from './font-families.json';

const typography = (fontSize: number, lineHeight: number) => {
  return {
    fontSize: fontSize,
    lineHeight: lineHeight,
    fontFamily: fontFamilies.bold,
  };
};

const subtitle = (fontSize: number, lineHeight: number) => {
  return {
    fontSize: fontSize,
    lineHeight: lineHeight,
    fontFamily: fontFamilies.regular,
  };
};

export const typographyStyles = StyleSheet.create({
  //
  h1: typography(34, 56),

  h2: typography(22, 32),

  h3: typography(18, 28),

  h4: typography(16, 24),

  h5: typography(14, 20),

  h6: typography(12, 18),

  sub1: subtitle(16, 28),

  sub2: subtitle(14, 24),

  sub3: subtitle(12, 20),
});
