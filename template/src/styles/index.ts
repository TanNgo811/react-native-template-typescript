import {StyleSheet} from 'react-native';
import {textStyles} from 'src/styles/text.styles';
import {typographyStyles} from 'src/styles/typography.styles';
import {layoutStyles} from 'src/styles/layout.styles';
import {backgroundStyles} from 'src/styles/background.styles';
import {spacingStyles} from 'src/styles/spacing.styles';
import {shadowStyles} from 'src/styles/shadow.styles';
import {colorStyles} from 'src/styles/color.styles';

export const globalStyles = StyleSheet.create({
  ...textStyles,
  ...typographyStyles,
  ...layoutStyles,
  ...backgroundStyles,
  ...spacingStyles,
  ...shadowStyles,
  ...colorStyles,
});
