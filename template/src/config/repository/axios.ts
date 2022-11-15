import type {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from 'axios';
import {AxiosObservable} from 'src/config/repository/axios-observable';

declare type Any = any;

export declare namespace Axios {
  type RequestInterceptor = (
    config: AxiosRequestConfig,
  ) => AxiosRequestConfig | Promise<AxiosRequestConfig>;
  type ResponseInterceptor<T = Any> = (
    response: AxiosResponse<T>,
  ) => AxiosResponse<T> | Promise<AxiosResponse<T>>;
  type ErrorInterceptor<T = Any> = (
    error: AxiosError<T>,
  ) => void | Promise<void>;
}
export declare class Axios
  implements Pick<AxiosInstance, 'defaults' | 'interceptors'>
{
  private axiosInstance;
  static defaults: AxiosRequestConfig;
  static interceptors: AxiosInstance['interceptors'];
  constructor(axiosInstance: AxiosInstance);
  get interceptors(): AxiosInstance['interceptors'];
  get defaults(): AxiosInstance['defaults'];
  /**
   * Create a new Axios instance
   * @param config {AxiosRequestConfig}
   */
  static create(config?: AxiosRequestConfig): Axios;
  static request<T = Any>(config: AxiosRequestConfig): AxiosObservable<T>;
  static get<T = Any>(
    url: string,
    config?: AxiosRequestConfig,
  ): AxiosObservable<T>;
  static delete<T = Any>(
    url: string,
    config?: AxiosRequestConfig,
  ): AxiosObservable<T>;
  static head<T = Any>(
    url: string,
    config?: AxiosRequestConfig,
  ): AxiosObservable<T>;
  static options<T = Any>(
    url: string,
    config?: AxiosRequestConfig,
  ): AxiosObservable<T>;
  static post<T = Any>(
    url: string,
    data?: Any,
    config?: AxiosRequestConfig,
  ): AxiosObservable<T>;
  static put<T = Any>(
    url: string,
    data?: Any,
    config?: AxiosRequestConfig,
  ): AxiosObservable<T>;
  static patch<T = Any>(
    url: string,
    data?: Any,
    config?: AxiosRequestConfig,
  ): AxiosObservable<T>;
  /**
   * Create an observable function from a promise function
   *
   * @param promiseFunction
   * @param args
   * @private
   */
  private static createObservable;
  request<T = Any>(config: AxiosRequestConfig): AxiosObservable<T>;
  get<T = Any>(url: string, config?: AxiosRequestConfig): AxiosObservable<T>;
  delete<T = Any>(url: string, config?: AxiosRequestConfig): AxiosObservable<T>;
  head<T = Any>(url: string, config?: AxiosRequestConfig): AxiosObservable<T>;
  options<T = Any>(
    url: string,
    config?: AxiosRequestConfig,
  ): AxiosObservable<T>;
  post<T = Any>(
    url: string,
    data?: Any,
    config?: AxiosRequestConfig,
  ): AxiosObservable<T>;
  put<T = Any>(
    url: string,
    data?: Any,
    config?: AxiosRequestConfig,
  ): AxiosObservable<T>;
  patch<T = Any>(
    url: string,
    data?: Any,
    config?: AxiosRequestConfig,
  ): AxiosObservable<T>;
}
export {};
