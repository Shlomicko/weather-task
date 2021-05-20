import {QueryParams} from './query-params';

export class Builder {

  private readonly url: string;
  public queryString: QueryParams;

  constructor(private baseUrl: string, private action: string, params?: QueryParams) {
    this.url = [baseUrl, action].join('/');
    this.queryString = params || new QueryParams();
  }

  public toString(): string {
    const qString = this.queryString ? this.queryString.toString() : '';
    return qString ? `${this.url}?${qString}` : this.url;
  }

}
