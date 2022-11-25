import {BehaviorSubject, Subscription} from 'rxjs';
import {API_BASE_URL} from './consts';

export const serverUrl: BehaviorSubject<string> = new BehaviorSubject<string>(
  API_BASE_URL,
);

export class Server {
  protected subscription: Subscription = new Subscription();

  public get serverUrl(): string {
    return serverUrl.getValue();
  }

  public set serverUrl(url: string) {
    serverUrl.next(url);
  }

  public setServerUrl = (url: string) => {
    this.serverUrl = url;
  };

  public subscribeServerUrl = (task: (url: string) => void): Subscription => {
    const subscription: Subscription = serverUrl.subscribe(task);
    this.subscription.add(subscription);
    return subscription;
  };

  public withPath(path: string): string {
    return `${this.serverUrl}${path}`;
  }
}

export const server: Server = new Server();
