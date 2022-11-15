import type {AxiosError, AxiosRequestConfig, AxiosResponse} from 'axios';
import {Repository} from './repository/repository-config';
import {store} from 'src/store';

/**
 * @type {AxiosRequestConfig}
 */
export const httpConfig: AxiosRequestConfig = {
  headers: {
    'Content-Type': 'application/json',
  },
};

/**
 * Transform request
 *
 * @param config {AxiosRequestConfig}
 */

const token = store.getState().global.token;
const refreshToken = store.getState().global.refreshToken;

Repository.requestInterceptor = (
  config: AxiosRequestConfig,
): AxiosRequestConfig => {
  try {
    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${token}`,
      Cookie: `Token=${token};RefreshToken=${refreshToken}`,
    };
  } catch (error) {}

  if (config.data instanceof FormData) {
    if (config.headers) {
      config.headers['Content-Type'] = 'multipart/form-data';
    }
    return config;
  }

  if (typeof config.data === 'object') {
    if (config.headers) {
      config.headers['Content-Type'] = 'application/json';
    }
    config.data = JSON.stringify(config.data);
  }

  return config;
};

/**
 * Transform response data
 *
 * @param response {AxiosResponse}
 */
Repository.responseInterceptor = (
  response: AxiosResponse,
): AxiosResponse | Promise<AxiosResponse> => {
  return response;
};

/**
 * Handle request error
 *
 * @param error {AxiosError}
 *
 * @throws {AxiosError}
 */
Repository.errorInterceptor = async (error: AxiosError) => {
  // For Sentry
  // Sentry.captureEvent({
  //   request: error?.request,
  // });
  // Sentry.captureException(error);

  if (error?.response?.status) {
    switch (error.response.status) {
      case 401:
        //
        break;

      case 502:
        //
        break;
    }
  }

  throw error;
};
