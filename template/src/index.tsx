import {AppRegistry} from 'react-native';
import {name as appName} from '../app.json';
import type {FC} from 'react';
import React, {Suspense} from 'react';
import {Provider} from 'react-redux';
import {store} from './store';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {enableScreens} from 'react-native-screens';
import {localization} from 'src/i18n/helpers/Localization';
import {AppLanguage} from 'src/types/AppLanguage';

enableScreens();

const App = React.lazy(async () => {
  await localization.initialize({
    lng: AppLanguage.VIETNAMESE,
    fallbackLng: AppLanguage.VIETNAMESE,
    ns: '',
    defaultNS: '',
    resources: {
      translations: {},
    },
    interpolation: {
      prefix: '{{',
      suffix: '}}',
    },
  });

  await localization.addLanguage(
    AppLanguage.VIETNAMESE,
    require('./i18n/vi.json'),
  );

  await localization.addLanguage(
    AppLanguage.ENGLISH,
    require('./i18n/en.json'),
  );

  return import('./App');
});

const AppEntry: FC = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <Suspense fallback={null}>
          <App />
        </Suspense>
      </SafeAreaProvider>
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => AppEntry);
