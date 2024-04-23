import { BinaryReader, BinaryWriter } from "../../binary";
import { DeepPartial } from "../../helpers";
export interface MsgUpdateTxFeeBurnPercentProposal {
  title: string;
  description: string;
  txFeeBurnPercent: string;
}
export interface MsgUpdateTxFeeBurnPercentProposalProtoMsg {
  typeUrl: "/migaloo.feeburn.MsgUpdateTxFeeBurnPercentProposal";
  value: Uint8Array;
}
export interface MsgUpdateTxFeeBurnPercentProposalAmino {
  title?: string;
  description?: string;
  tx_fee_burn_percent?: string;
}
export interface MsgUpdateTxFeeBurnPercentProposalAminoMsg {
  type: "/migaloo.feeburn.MsgUpdateTxFeeBurnPercentProposal";
  value: MsgUpdateTxFeeBurnPercentProposalAmino;
}
export interface MsgUpdateTxFeeBurnPercentProposalSDKType {
  title: string;
  description: string;
  tx_fee_burn_percent: string;
}
function createBaseMsgUpdateTxFeeBurnPercentProposal(): MsgUpdateTxFeeBurnPercentProposal {
  return {
    title: "",
    description: "",
    txFeeBurnPercent: ""
  };
}
export const MsgUpdateTxFeeBurnPercentProposal = {
  typeUrl: "/migaloo.feeburn.MsgUpdateTxFeeBurnPercentProposal",
  encode(message: MsgUpdateTxFeeBurnPercentProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.txFeeBurnPercent !== "") {
      writer.uint32(26).string(message.txFeeBurnPercent);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateTxFeeBurnPercentProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateTxFeeBurnPercentProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.txFeeBurnPercent = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgUpdateTxFeeBurnPercentProposal>): MsgUpdateTxFeeBurnPercentProposal {
    const message = createBaseMsgUpdateTxFeeBurnPercentProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.txFeeBurnPercent = object.txFeeBurnPercent ?? "";
    return message;
  },
  fromAmino(object: MsgUpdateTxFeeBurnPercentProposalAmino): MsgUpdateTxFeeBurnPercentProposal {
    const message = createBaseMsgUpdateTxFeeBurnPercentProposal();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.tx_fee_burn_percent !== undefined && object.tx_fee_burn_percent !== null) {
      message.txFeeBurnPercent = object.tx_fee_burn_percent;
    }
    return message;
  },
  toAmino(message: MsgUpdateTxFeeBurnPercentProposal): MsgUpdateTxFeeBurnPercentProposalAmino {
    const obj: any = {};
    obj.title = message.title === "" ? undefined : message.title;
    obj.description = message.description === "" ? undefined : message.description;
    obj.tx_fee_burn_percent = message.txFeeBurnPercent === "" ? undefined : message.txFeeBurnPercent;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateTxFeeBurnPercentProposalAminoMsg): MsgUpdateTxFeeBurnPercentProposal {
    return MsgUpdateTxFeeBurnPercentProposal.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateTxFeeBurnPercentProposalProtoMsg): MsgUpdateTxFeeBurnPercentProposal {
    return MsgUpdateTxFeeBurnPercentProposal.decode(message.value);
  },
  toProto(message: MsgUpdateTxFeeBurnPercentProposal): Uint8Array {
    return MsgUpdateTxFeeBurnPercentProposal.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateTxFeeBurnPercentProposal): MsgUpdateTxFeeBurnPercentProposalProtoMsg {
    return {
      typeUrl: "/migaloo.feeburn.MsgUpdateTxFeeBurnPercentProposal",
      value: MsgUpdateTxFeeBurnPercentProposal.encode(message).finish()
    };
  }
};