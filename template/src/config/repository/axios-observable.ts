import type {Observable} from 'rxjs';
import type {AxiosResponse} from 'axios';
export declare type AxiosObservable<T> = Observable<AxiosResponse<T>>;
