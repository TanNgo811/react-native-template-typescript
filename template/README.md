# Tutorial for using React Native Template

## Change AppIcon
- Using something that make you happy in your life.

## Change SplashScreen
- Using library please!!!

## Change Font
### Install Custom Font Family
- Copy Font files into the folder `assets/fonts`.
- Then run command `yarn react-native link` or `npx react-native-asset`.
- To apply these custom font families into the Global Style, replace the following typography styles declared in `styles/font-families.json`.

## How to use & adjust Global Style
- Global Style helps you to adjust for spacing, flexbox, text,  background, shadow, typography.
- Use the prefix `globalStyles.<option>` directly into the `styles` section to apply the global style.
- For Spacing, you can change the `padding`, `margin`
    - `gloablStyles.mr2` means: Margin Right 2px
    - `gloablStyles.ml2` means: Margin Left 2px
    - `gloablStyles.mt2` means: Margin Top 2px
    - `gloablStyles.mb2` means: Margin Bottom 2px
    - `gloablStyles.mx2` means: Margin Horizontal 2px
    - `gloablStyles.my2` means: Margin Vertical 2px

    - `gloablStyles.pr2` means: Padding Right 2px
    - `gloablStyles.pl2` means: Padding Left 2px
    - `gloablStyles.pt2` means: Padding Top 2px
    - `gloablStyles.pb2` means: Padding Bottom 2px
    - `gloablStyles.px2` means: Padding Horizontal 2px
    - `gloablStyles.py2` means: Padding Vertical 2px
- For Fonts and Typography, you can change the style of the font by
    - `gloablStyles.textBold` for using bold font.
    - `gloablStyles.h1` for using Heading 1 style.
    - `gloablStyles.textCenter` for aligning center text
- For Color of Fonts and Background
    - `globalStyles.primaryTextColor` for changing Font color to Primary Color
    - `globalStyles.primaryBackgroundColor` for changing Background color to Primary Color


## Apply Google Firebase


