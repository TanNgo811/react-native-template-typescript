import {configureStore, createSlice} from '@reduxjs/toolkit';
import {AppLanguage} from 'src/types/AppLanguage';
import type {GlobalState} from 'src/store/GlobalState';
import {changeLanguage} from 'src/store/reducers/change-language';

const middlewares = [];

if (__DEV__) {
  const rnFlipper = require('rn-redux-middleware-flipper').default;
  const reduxFlipper = require('redux-flipper').default;
  middlewares.push(rnFlipper(), reduxFlipper());
}

const initialState: GlobalState['global'] = {
  language: AppLanguage.VIETNAMESE,

  token: '',

  refreshToken: '',
};

export const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    //
    changeLanguage,
  },
});

export const store = configureStore({
  reducer: {
    global: globalSlice.reducer,
  },
  middleware: middlewares,
});
