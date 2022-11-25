import type {PropsWithChildren, ReactElement} from 'react';
import React from 'react';
import {demoScreenStyles as styles} from './DemoScreen.styles';
import nameof from 'ts-nameof.macro';
import type {StackScreenProps} from '@react-navigation/stack';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {useTranslation} from 'react-i18next';
import {AppLanguage} from 'src/types/AppLanguage';
import {useDispatch, useSelector} from 'react-redux';
import {languageSelector} from 'src/store/selectors';
import {globalSlice} from 'src/store';
import SvgIcon from 'src/components/atoms/SvgIcon/SvgIcon';

export function DemoScreen(
  props: PropsWithChildren<DemoScreenProps>,
): ReactElement {
  const {navigation} = props;

  const handleGoBack = React.useCallback(() => {
    //
    navigation.goBack();
  }, [navigation]);

  const [translate] = useTranslation();

  const selectedLanguage = useSelector(languageSelector);

  const dispatch = useDispatch();

  const {changeLanguage} = globalSlice.actions;

  const handleChangeLanguage = React.useCallback(
    (language: AppLanguage) => () => {
      dispatch(changeLanguage(language));
    },
    [changeLanguage, dispatch],
  );

  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={handleGoBack}>
            <Text style={[styles.title]}>Back</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleGoBack}>
            <SvgIcon component={require('assets/icons/24/back.svg')} />
          </TouchableOpacity>
        </View>

        <View style={styles.contentContainer}>
          <Text style={styles.sectionTitle}>Test Translate</Text>

          <View>
            <Text>Choose Your Language:</Text>
            <View>
              {[
                {language: AppLanguage.VIETNAMESE},
                {language: AppLanguage.ENGLISH},
              ].map((item, index) => (
                <Text
                  style={styles.languageChoice}
                  onPress={handleChangeLanguage(item.language)}
                  key={index}>
                  {item.language} {item.language === selectedLanguage && '- ok'}
                </Text>
              ))}
            </View>
          </View>

          <Text>Result: {translate('demo.helloWorld')}</Text>
        </View>
      </SafeAreaView>
    </>
  );
}

export interface DemoScreenProps extends StackScreenProps<any> {
  //
}

DemoScreen.defaultProps = {
  //
};

DemoScreen.displayName = nameof(DemoScreen);

export default DemoScreen;
