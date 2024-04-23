//@ts-nocheck
import * as _12 from "./app/runtime/v1alpha1/module";
import * as _13 from "./auth/v1beta1/auth";
import * as _14 from "./auth/v1beta1/genesis";
import * as _15 from "./auth/v1beta1/query";
import * as _16 from "./auth/v1beta1/tx";
import * as _17 from "./authz/v1beta1/authz";
import * as _18 from "./authz/v1beta1/event";
import * as _19 from "./authz/v1beta1/genesis";
import * as _20 from "./authz/v1beta1/query";
import * as _21 from "./authz/v1beta1/tx";
import * as _22 from "./bank/v1beta1/authz";
import * as _23 from "./bank/v1beta1/bank";
import * as _24 from "./bank/v1beta1/genesis";
import * as _25 from "./bank/v1beta1/query";
import * as _26 from "./bank/v1beta1/tx";
import * as _27 from "./base/abci/v1beta1/abci";
import * as _28 from "./base/node/v1beta1/query";
import * as _29 from "./base/query/v1beta1/pagination";
import * as _30 from "./base/reflection/v2alpha1/reflection";
import * as _31 from "./base/v1beta1/coin";
import * as _32 from "./consensus/v1/query";
import * as _33 from "./consensus/v1/tx";
import * as _34 from "./crypto/ed25519/keys";
import * as _35 from "./crypto/hd/v1/hd";
import * as _36 from "./crypto/keyring/v1/record";
import * as _37 from "./crypto/multisig/keys";
import * as _38 from "./crypto/secp256k1/keys";
import * as _39 from "./crypto/secp256r1/keys";
import * as _40 from "./distribution/v1beta1/distribution";
import * as _41 from "./distribution/v1beta1/genesis";
import * as _42 from "./distribution/v1beta1/query";
import * as _43 from "./distribution/v1beta1/tx";
import * as _44 from "./feegrant/v1beta1/feegrant";
import * as _45 from "./feegrant/v1beta1/genesis";
import * as _46 from "./feegrant/v1beta1/query";
import * as _47 from "./feegrant/v1beta1/tx";
import * as _48 from "./gov/v1/genesis";
import * as _49 from "./gov/v1/gov";
import * as _50 from "./gov/v1/query";
import * as _51 from "./gov/v1/tx";
import * as _52 from "./gov/v1beta1/genesis";
import * as _53 from "./gov/v1beta1/gov";
import * as _54 from "./gov/v1beta1/query";
import * as _55 from "./gov/v1beta1/tx";
import * as _56 from "./group/v1/events";
import * as _57 from "./group/v1/genesis";
import * as _58 from "./group/v1/query";
import * as _59 from "./group/v1/tx";
import * as _60 from "./group/v1/types";
import * as _61 from "./ics23/v1/proofs";
import * as _62 from "./mint/v1beta1/genesis";
import * as _63 from "./mint/v1beta1/mint";
import * as _64 from "./mint/v1beta1/query";
import * as _65 from "./mint/v1beta1/tx";
import * as _66 from "./orm/query/v1alpha1/query";
import * as _67 from "./params/v1beta1/params";
import * as _68 from "./params/v1beta1/query";
import * as _69 from "./query/v1/query";
import * as _70 from "./reflection/v1/reflection";
import * as _71 from "./staking/v1beta1/authz";
import * as _72 from "./staking/v1beta1/genesis";
import * as _73 from "./staking/v1beta1/query";
import * as _74 from "./staking/v1beta1/staking";
import * as _75 from "./staking/v1beta1/tx";
import * as _76 from "./tx/config/v1/config";
import * as _77 from "./tx/signing/v1beta1/signing";
import * as _78 from "./tx/v1beta1/service";
import * as _79 from "./tx/v1beta1/tx";
import * as _80 from "./upgrade/v1beta1/query";
import * as _81 from "./upgrade/v1beta1/tx";
import * as _82 from "./upgrade/v1beta1/upgrade";
import * as _83 from "./vesting/v1beta1/tx";
import * as _84 from "./vesting/v1beta1/vesting";
import * as _177 from "./auth/v1beta1/tx.amino";
import * as _178 from "./bank/v1beta1/tx.amino";
import * as _179 from "./consensus/v1/tx.amino";
import * as _180 from "./distribution/v1beta1/tx.amino";
import * as _181 from "./feegrant/v1beta1/tx.amino";
import * as _182 from "./gov/v1/tx.amino";
import * as _183 from "./gov/v1beta1/tx.amino";
import * as _184 from "./group/v1/tx.amino";
import * as _185 from "./mint/v1beta1/tx.amino";
import * as _186 from "./staking/v1beta1/tx.amino";
import * as _187 from "./upgrade/v1beta1/tx.amino";
import * as _188 from "./vesting/v1beta1/tx.amino";
import * as _189 from "./auth/v1beta1/tx.registry";
import * as _190 from "./bank/v1beta1/tx.registry";
import * as _191 from "./consensus/v1/tx.registry";
import * as _192 from "./distribution/v1beta1/tx.registry";
import * as _193 from "./feegrant/v1beta1/tx.registry";
import * as _194 from "./gov/v1/tx.registry";
import * as _195 from "./gov/v1beta1/tx.registry";
import * as _196 from "./group/v1/tx.registry";
import * as _197 from "./mint/v1beta1/tx.registry";
import * as _198 from "./staking/v1beta1/tx.registry";
import * as _199 from "./upgrade/v1beta1/tx.registry";
import * as _200 from "./vesting/v1beta1/tx.registry";
import * as _201 from "./auth/v1beta1/query.rpc.Query";
import * as _202 from "./authz/v1beta1/query.rpc.Query";
import * as _203 from "./bank/v1beta1/query.rpc.Query";
import * as _204 from "./base/node/v1beta1/query.rpc.Service";
import * as _205 from "./consensus/v1/query.rpc.Query";
import * as _206 from "./distribution/v1beta1/query.rpc.Query";
import * as _207 from "./feegrant/v1beta1/query.rpc.Query";
import * as _208 from "./gov/v1/query.rpc.Query";
import * as _209 from "./gov/v1beta1/query.rpc.Query";
import * as _210 from "./group/v1/query.rpc.Query";
import * as _211 from "./mint/v1beta1/query.rpc.Query";
import * as _212 from "./orm/query/v1alpha1/query.rpc.Query";
import * as _213 from "./params/v1beta1/query.rpc.Query";
import * as _214 from "./staking/v1beta1/query.rpc.Query";
import * as _215 from "./tx/v1beta1/service.rpc.Service";
import * as _216 from "./upgrade/v1beta1/query.rpc.Query";
import * as _217 from "./auth/v1beta1/tx.rpc.msg";
import * as _218 from "./authz/v1beta1/tx.rpc.msg";
import * as _219 from "./bank/v1beta1/tx.rpc.msg";
import * as _220 from "./consensus/v1/tx.rpc.msg";
import * as _221 from "./distribution/v1beta1/tx.rpc.msg";
import * as _222 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _223 from "./gov/v1/tx.rpc.msg";
import * as _224 from "./gov/v1beta1/tx.rpc.msg";
import * as _225 from "./group/v1/tx.rpc.msg";
import * as _226 from "./mint/v1beta1/tx.rpc.msg";
import * as _227 from "./staking/v1beta1/tx.rpc.msg";
import * as _228 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _229 from "./vesting/v1beta1/tx.rpc.msg";
import * as _265 from "./rpc.query";
import * as _266 from "./rpc.tx";
export namespace cosmos {
  export namespace app {
    export namespace runtime {
      export const v1alpha1 = {
        ..._12
      };
    }
  }
  export namespace auth {
    export const v1beta1 = {
      ..._13,
      ..._14,
      ..._15,
      ..._16,
      ..._177,
      ..._189,
      ..._201,
      ..._217
    };
  }
  export namespace authz {
    export const v1beta1 = {
      ..._17,
      ..._18,
      ..._19,
      ..._20,
      ..._21,
      ..._202,
      ..._218
    };
  }
  export namespace bank {
    export const v1beta1 = {
      ..._22,
      ..._23,
      ..._24,
      ..._25,
      ..._26,
      ..._178,
      ..._190,
      ..._203,
      ..._219
    };
  }
  export namespace base {
    export namespace abci {
      export const v1beta1 = {
        ..._27
      };
    }
    export namespace node {
      export const v1beta1 = {
        ..._28,
        ..._204
      };
    }
    export namespace query {
      export const v1beta1 = {
        ..._29
      };
    }
    export namespace reflection {
      export const v2alpha1 = {
        ..._30
      };
    }
    export const v1beta1 = {
      ..._31
    };
  }
  export namespace consensus {
    export const v1 = {
      ..._32,
      ..._33,
      ..._179,
      ..._191,
      ..._205,
      ..._220
    };
  }
  export namespace crypto {
    export const ed25519 = {
      ..._34
    };
    export namespace hd {
      export const v1 = {
        ..._35
      };
    }
    export namespace keyring {
      export const v1 = {
        ..._36
      };
    }
    export const multisig = {
      ..._37
    };
    export const secp256k1 = {
      ..._38
    };
    export const secp256r1 = {
      ..._39
    };
  }
  export namespace distribution {
    export const v1beta1 = {
      ..._40,
      ..._41,
      ..._42,
      ..._43,
      ..._180,
      ..._192,
      ..._206,
      ..._221
    };
  }
  export namespace feegrant {
    export const v1beta1 = {
      ..._44,
      ..._45,
      ..._46,
      ..._47,
      ..._181,
      ..._193,
      ..._207,
      ..._222
    };
  }
  export namespace gov {
    export const v1 = {
      ..._48,
      ..._49,
      ..._50,
      ..._51,
      ..._182,
      ..._194,
      ..._208,
      ..._223
    };
    export const v1beta1 = {
      ..._52,
      ..._53,
      ..._54,
      ..._55,
      ..._183,
      ..._195,
      ..._209,
      ..._224
    };
  }
  export namespace group {
    export const v1 = {
      ..._56,
      ..._57,
      ..._58,
      ..._59,
      ..._60,
      ..._184,
      ..._196,
      ..._210,
      ..._225
    };
  }
  export namespace ics23 {
    export const v1 = {
      ..._61
    };
  }
  export namespace mint {
    export const v1beta1 = {
      ..._62,
      ..._63,
      ..._64,
      ..._65,
      ..._185,
      ..._197,
      ..._211,
      ..._226
    };
  }
  export namespace orm {
    export namespace query {
      export const v1alpha1 = {
        ..._66,
        ..._212
      };
    }
  }
  export namespace params {
    export const v1beta1 = {
      ..._67,
      ..._68,
      ..._213
    };
  }
  export namespace query {
    export const v1 = {
      ..._69
    };
  }
  export namespace reflection {
    export const v1 = {
      ..._70
    };
  }
  export namespace staking {
    export const v1beta1 = {
      ..._71,
      ..._72,
      ..._73,
      ..._74,
      ..._75,
      ..._186,
      ..._198,
      ..._214,
      ..._227
    };
  }
  export namespace tx {
    export namespace config {
      export const v1 = {
        ..._76
      };
    }
    export namespace signing {
      export const v1beta1 = {
        ..._77
      };
    }
    export const v1beta1 = {
      ..._78,
      ..._79,
      ..._215
    };
  }
  export namespace upgrade {
    export const v1beta1 = {
      ..._80,
      ..._81,
      ..._82,
      ..._187,
      ..._199,
      ..._216,
      ..._228
    };
  }
  export namespace vesting {
    export const v1beta1 = {
      ..._83,
      ..._84,
      ..._188,
      ..._200,
      ..._229
    };
  }
  export const ClientFactory = {
    ..._265,
    ..._266
  };
}