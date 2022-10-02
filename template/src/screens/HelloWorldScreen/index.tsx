import type {PropsWithChildren, ReactElement} from 'react';
import React from 'react';
import nameof from 'ts-nameof.macro';
import {ScrollView, StatusBar, Text, useColorScheme, View} from 'react-native';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import type {StackScreenProps} from '@react-navigation/stack';
import {DemoScreen} from 'src/screens';
import {helloWorldScreenStyles as styles} from 'src/screens/HelloWorldScreen/HelloWorldScreen.styles';
import {globalStyles} from 'src/styles';

const Section: React.FC<{
  title: string;
}> = ({children, title}) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
          globalStyles.textBold,
          globalStyles.ml4,
          globalStyles.dangerTextColor,
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

export function HelloWorldScreen(
  props: PropsWithChildren<HelloWorldScreenProps>,
): ReactElement {
  const {navigation} = props;

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const handleNavigate = React.useCallback(
    (screen: string) => () => {
      navigation.navigate(screen);
    },
    [navigation],
  );

  return (
    <View style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="Step One">
            Edit{' '}
            <Text style={[styles.highlight, globalStyles.textBold]}>
              App.tsx
            </Text>{' '}
            to change this screen and then come back to see your edits.
          </Section>
          <Section title="Demo Function Screen">
            <Text
              onPress={handleNavigate(DemoScreen.displayName)}
              style={styles.highlight}>
              Tap Here
            </Text>
          </Section>
          <Section title="See Your Changes">
            <ReloadInstructions />
          </Section>
          <Section title="Debug">
            <DebugInstructions />
          </Section>
          <Section title="Learn More">
            Read the docs to discover what to do next:
          </Section>
          <LearnMoreLinks />
        </View>
      </ScrollView>
    </View>
  );
}

export interface HelloWorldScreenProps extends StackScreenProps<any> {
  //
}

HelloWorldScreen.defaultProps = {
  //
};

HelloWorldScreen.displayName = nameof(HelloWorldScreen);

export default HelloWorldScreen;
