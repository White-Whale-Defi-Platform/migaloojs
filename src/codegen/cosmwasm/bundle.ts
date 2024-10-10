//@ts-nocheck
import * as _85 from "./wasm/v1/authz";
import * as _86 from "./wasm/v1/genesis";
import * as _87 from "./wasm/v1/ibc";
import * as _88 from "./wasm/v1/proposal_legacy";
import * as _89 from "./wasm/v1/query";
import * as _90 from "./wasm/v1/tx";
import * as _91 from "./wasm/v1/types";
import * as _230 from "./wasm/v1/tx.amino";
import * as _231 from "./wasm/v1/tx.registry";
import * as _232 from "./wasm/v1/query.rpc.Query";
import * as _233 from "./wasm/v1/tx.rpc.msg";
import * as _267 from "./rpc.query";
import * as _268 from "./rpc.tx";
export namespace cosmwasm {
  export namespace wasm {
    export const v1 = {
      ..._85,
      ..._86,
      ..._87,
      ..._88,
      ..._89,
      ..._90,
      ..._91,
      ..._230,
      ..._231,
      ..._232,
      ..._233
    };
  }
  export const ClientFactory = {
    ..._267,
    ..._268
  };
}