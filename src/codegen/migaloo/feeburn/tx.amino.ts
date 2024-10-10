//@ts-nocheck
import { MsgUpdateParams } from "./tx";
export const AminoConverter = {
  "/migaloo.feeburn.MsgUpdateParams": {
    aminoType: "migaloo/x/feeburn/MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  }
};