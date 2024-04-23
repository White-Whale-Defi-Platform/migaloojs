import { BinaryReader, BinaryWriter } from "../../binary";
import { DeepPartial } from "../../helpers";
/** Params defines the parameters for the module. */
export interface Params {
  txFeeBurnPercent: string;
}
export interface ParamsProtoMsg {
  typeUrl: "/migaloo.feeburn.Params";
  value: Uint8Array;
}
/** Params defines the parameters for the module. */
export interface ParamsAmino {
  tx_fee_burn_percent?: string;
}
export interface ParamsAminoMsg {
  type: "/migaloo.feeburn.Params";
  value: ParamsAmino;
}
/** Params defines the parameters for the module. */
export interface ParamsSDKType {
  tx_fee_burn_percent: string;
}
function createBaseParams(): Params {
  return {
    txFeeBurnPercent: ""
  };
}
export const Params = {
  typeUrl: "/migaloo.feeburn.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.txFeeBurnPercent !== "") {
      writer.uint32(10).string(message.txFeeBurnPercent);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Params {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.txFeeBurnPercent = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.txFeeBurnPercent = object.txFeeBurnPercent ?? "";
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.tx_fee_burn_percent !== undefined && object.tx_fee_burn_percent !== null) {
      message.txFeeBurnPercent = object.tx_fee_burn_percent;
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.tx_fee_burn_percent = message.txFeeBurnPercent === "" ? undefined : message.txFeeBurnPercent;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/migaloo.feeburn.Params",
      value: Params.encode(message).finish()
    };
  }
};