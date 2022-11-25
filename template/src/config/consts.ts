import {Dimensions, KeyboardAvoidingViewProps, Platform} from 'react-native';

export const API_BASE_URL: string = '';

export const ANDROID: boolean = Platform.OS === 'android';

export const IOS: boolean = Platform.OS === 'ios';

export const KEYBOARD_AVOIDING_VIEW_BEHAVIOR: KeyboardAvoidingViewProps['behavior'] =
  Platform.select({
    android: 'height',
    ios: 'padding',
  });

export const {
  width: SCREEN_WIDTH,
  height: SCREEN_HEIGHT, //
} = Dimensions.get('window');

export const PLATFORM_OS_NAME = Platform.select({
  android: 'Android',
  ios: 'iOS',
})!;

/**
 * Date time constants
 */
export const DATE_FORMAT = 'DD-MM-YYYY';

export const HOUR_MINUTE_FORMAT = 'LT';

export const DATE_TIME_FORMAT = 'DD-MM-YYYY hh:mm:ss';

export const DATE_TIME_FORMAT2: string = 'DD/MM/YYYY HH:mm:ss';
