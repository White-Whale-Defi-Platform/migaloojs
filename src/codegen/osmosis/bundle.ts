import * as _157 from "./tokenfactory/v1beta1/authorityMetadata";
import * as _158 from "./tokenfactory/v1beta1/genesis";
import * as _159 from "./tokenfactory/v1beta1/params";
import * as _160 from "./tokenfactory/v1beta1/query";
import * as _161 from "./tokenfactory/v1beta1/tx";
import * as _259 from "./tokenfactory/v1beta1/tx.amino";
import * as _260 from "./tokenfactory/v1beta1/tx.registry";
import * as _261 from "./tokenfactory/v1beta1/query.rpc.Query";
import * as _262 from "./tokenfactory/v1beta1/tx.rpc.msg";
import * as _273 from "./rpc.query";
import * as _274 from "./rpc.tx";
export namespace osmosis {
  export namespace tokenfactory {
    export const v1beta1 = {
      ..._157,
      ..._158,
      ..._159,
      ..._160,
      ..._161,
      ..._259,
      ..._260,
      ..._261,
      ..._262
    };
  }
  export const ClientFactory = {
    ..._273,
    ..._274
  };
}