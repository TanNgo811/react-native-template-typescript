import {Repository} from 'src/config/repository/repository-config';
import {httpConfig} from 'src/config/repository';
import {server} from 'src/config/server';
import {API_ACCOUNT_ROUTE} from 'src/config/api';
import {Observable} from 'rxjs';
import nameof from 'ts-nameof.macro';
import kebabCase from 'lodash/kebabCase';

export class TestRepository extends Repository {
  //
  constructor() {
    super(httpConfig);
    server.subscribeServerUrl((serverUrl: string) => {
      this.baseURL = new URL(API_ACCOUNT_ROUTE, serverUrl).href;
    });
  }

  public readonly count = ({}): Observable<number> => {
    return this.http
      .post<number>(kebabCase(nameof(this.count)), {})
      .pipe(Repository.responseDataMapper<number>());
  };
}

export const testRepository: TestRepository = new TestRepository();
