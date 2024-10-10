//@ts-nocheck
import * as _152 from "./feeburn/genesis";
import * as _153 from "./feeburn/params";
import * as _154 from "./feeburn/proposals";
import * as _155 from "./feeburn/query";
import * as _156 from "./feeburn/tx";
import * as _255 from "./feeburn/tx.amino";
import * as _256 from "./feeburn/tx.registry";
import * as _257 from "./feeburn/query.rpc.Query";
import * as _258 from "./feeburn/tx.rpc.msg";
import * as _271 from "./rpc.query";
import * as _272 from "./rpc.tx";
export namespace migaloo {
  export const feeburn = {
    ..._152,
    ..._153,
    ..._154,
    ..._155,
    ..._156,
    ..._255,
    ..._256,
    ..._257,
    ..._258
  };
  export const ClientFactory = {
    ..._271,
    ..._272
  };
}