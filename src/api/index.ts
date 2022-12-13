import { GetTableRowsPayload } from "interfaces";

export class ChainApi {
  readonly nodeos_url: string;
  readonly contract: string;
  readonly fetch: any;

  constructor(nodeos_url: string, contract: string, fetch: any) {
    this.nodeos_url = nodeos_url;
    this.contract = contract;
    this.fetch = fetch;
  }

  async getTableRows(payload: GetTableRowsPayload): Promise<any> {
    return await this.fetch(`${this.nodeos_url}/v1/chain/get_table_rows`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
  }

  async getTokenByID(id: string): Promise<any> {
    return this.getTableRows({
      json: true,
      code: this.contract,
      scope: this.contract,
      table: "tokens",
      table_key: id,
      lower_bound: id,
      upper_bound: id,
      key_type: "i64",
      index_position: "1",
    });
  }

  async getTokenBySHA256(sha256: string): Promise<any> {
    return this.getTableRows({
      json: true,
      code: this.contract,
      scope: this.contract,
      table: "tokens",
      table_key:sha256,
      lower_bound: sha256,
      upper_bound: sha256,
      key_type: "sha256",
      index_position: "2",
    });
  }

  async getPayout(token_id: string, account: string): Promise<any> {
    return this.getTableRows({
      json: true,
      code: this.contract,
      scope: token_id,
      table: "payouts",
      table_key: account,
      lower_bound: account,
      upper_bound: account,
      key_type: "i64",
      index_position: "1",
    });
  }
}
