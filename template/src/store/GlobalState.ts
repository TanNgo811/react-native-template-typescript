import type {AppLanguage} from 'src/types/AppLanguage';

export interface GlobalState {
  global: {
    language: AppLanguage;

    // Access Token (if needed)
    token: string;

    // Refresh Token (if needed)
    refreshToken: string;
  };
}
