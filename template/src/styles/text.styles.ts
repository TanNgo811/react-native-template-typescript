import {StyleSheet} from 'react-native';
import fontFamilies from './font-families.json';

export const textStyles = StyleSheet.create({
  //
  textCenter: {
    textAlign: 'center',
  },

  textRight: {
    textAlign: 'right',
  },

  textLeft: {
    textAlign: 'left',
  },

  textLight: {
    fontFamily: fontFamilies.light,
  },

  textRegular: {
    fontFamily: fontFamilies.regular,
  },

  textMedium: {
    fontFamily: fontFamilies.medium,
  },

  textSemiBold: {
    fontFamily: fontFamilies.semiBold,
  },

  textBold: {
    fontFamily: fontFamilies.bold,
  },

  textUnderline: {
    textDecorationLine: 'underline',
  },

  textUppercase: {
    textTransform: 'uppercase',
  },

  textLowercase: {
    textTransform: 'lowercase',
  },
});
