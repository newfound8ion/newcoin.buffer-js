import { doesNotMatch } from "assert";
import { expect } from "chai";
import fetch from "node-fetch";
import { ChainApi } from "api";

// tslint:disable-next-line:no-var-requires

describe("Chain API", () => {
  const api = new ChainApi("https://testnet.newcoin.org", "buffer.nco", fetch);

  it("fetch token by id", async () => {
    const response = await api.getTokenByID("0");
    const json = await response.json();
    expect(response).not.be.undefined;
  }).timeout(2000);

  it("fetch tokken by sha256", async () => {
    const response = await api.getTokenBySHA256("dfddb9d6cf44c9a15c672e186248035b782e1bbfdd332352311983c3ab635ca5");
    const json = await response.json();
    console.log(json);
    // expect(pool).to.deep.equal(examplePool);
  }).timeout(2000);

  it(
    "fetch payout by currency id and account",
    async () => {
      const response = await api.getPayout("0", "alice.nco");
      const json = await response.json();
      expect(response).not.be.undefined;
    }
  ).timeout(2000);
});
