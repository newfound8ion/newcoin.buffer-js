import { EosioActionObject, EosioAuthorizationObject } from "../types";

/* tslint:disable:variable-name */

export class ActionGenerator {
  constructor(readonly contract: string, readonly token_contract: string) {}

  async addToken(
    authorization: EosioAuthorizationObject[],
    token: string
  ): Promise<EosioActionObject[]> {
    return this._pack(this.contract, authorization, "addtoken", {
      token,
    });
  }

  async addPayout(
    authorization: EosioAuthorizationObject[],
    account: string,
    total: string,
    period: string
  ): Promise<EosioActionObject[]> {
    return this._pack(this.contract, authorization, "addpayout", {
      account,
      total,
      period,
    });
  }

  async claimPayout(
    authorization: EosioAuthorizationObject[],
    account: string,
    token: string
  ): Promise<EosioActionObject[]> {
    return this._pack(this.contract, authorization, "claimpayout", {
        account,
        token,
    });
  }

  protected _pack(
    account: string,
    authorization: EosioAuthorizationObject[],
    name: string,
    data: any
  ): EosioActionObject[] {
    return [{ account, name, authorization, data }];
  }
}
