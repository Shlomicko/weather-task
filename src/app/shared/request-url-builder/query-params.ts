import {ParamsDictionary} from './params-dictionary';

export class QueryParams {

  private params: string[];

  constructor(params?: ParamsDictionary[]) {
    this.params = [];
    if (params) {
      params.forEach(param => this.add(param));
    }
  }

  // @ts-ignore
  public add({key, value}): void {
    if (value) {
      value = encodeURIComponent(value.toString());
      this.params.push([key, value].join('='));
    }
  }

  public toString(): string {
    return this.params.join('&');
  }
}
