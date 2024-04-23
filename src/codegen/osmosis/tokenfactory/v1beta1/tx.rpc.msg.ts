import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { MsgUpdateParams, MsgUpdateParamsResponse, MsgCreateDenom, MsgCreateDenomResponse, MsgMint, MsgMintResponse, MsgBurn, MsgBurnResponse, MsgChangeAdmin, MsgChangeAdminResponse, MsgSetDenomMetadata, MsgSetDenomMetadataResponse, MsgSetBeforeSendHook, MsgSetBeforeSendHookResponse, MsgForceTransfer, MsgForceTransferResponse } from "./tx";
/** Msg defines the tokefactory module's gRPC message service. */
export interface Msg {
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
  createDenom(request: MsgCreateDenom): Promise<MsgCreateDenomResponse>;
  mint(request: MsgMint): Promise<MsgMintResponse>;
  burn(request: MsgBurn): Promise<MsgBurnResponse>;
  changeAdmin(request: MsgChangeAdmin): Promise<MsgChangeAdminResponse>;
  setDenomMetadata(request: MsgSetDenomMetadata): Promise<MsgSetDenomMetadataResponse>;
  setBeforeSendHook(request: MsgSetBeforeSendHook): Promise<MsgSetBeforeSendHookResponse>;
  forceTransfer(request: MsgForceTransfer): Promise<MsgForceTransferResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  /* UpdateParams */
  updateParams = async (request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> => {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("osmosis.tokenfactory.v1beta1.Msg", "UpdateParams", data);
    return promise.then(data => MsgUpdateParamsResponse.decode(new BinaryReader(data)));
  };
  /* CreateDenom */
  createDenom = async (request: MsgCreateDenom): Promise<MsgCreateDenomResponse> => {
    const data = MsgCreateDenom.encode(request).finish();
    const promise = this.rpc.request("osmosis.tokenfactory.v1beta1.Msg", "CreateDenom", data);
    return promise.then(data => MsgCreateDenomResponse.decode(new BinaryReader(data)));
  };
  /* Mint */
  mint = async (request: MsgMint): Promise<MsgMintResponse> => {
    const data = MsgMint.encode(request).finish();
    const promise = this.rpc.request("osmosis.tokenfactory.v1beta1.Msg", "Mint", data);
    return promise.then(data => MsgMintResponse.decode(new BinaryReader(data)));
  };
  /* Burn */
  burn = async (request: MsgBurn): Promise<MsgBurnResponse> => {
    const data = MsgBurn.encode(request).finish();
    const promise = this.rpc.request("osmosis.tokenfactory.v1beta1.Msg", "Burn", data);
    return promise.then(data => MsgBurnResponse.decode(new BinaryReader(data)));
  };
  /* ChangeAdmin */
  changeAdmin = async (request: MsgChangeAdmin): Promise<MsgChangeAdminResponse> => {
    const data = MsgChangeAdmin.encode(request).finish();
    const promise = this.rpc.request("osmosis.tokenfactory.v1beta1.Msg", "ChangeAdmin", data);
    return promise.then(data => MsgChangeAdminResponse.decode(new BinaryReader(data)));
  };
  /* SetDenomMetadata */
  setDenomMetadata = async (request: MsgSetDenomMetadata): Promise<MsgSetDenomMetadataResponse> => {
    const data = MsgSetDenomMetadata.encode(request).finish();
    const promise = this.rpc.request("osmosis.tokenfactory.v1beta1.Msg", "SetDenomMetadata", data);
    return promise.then(data => MsgSetDenomMetadataResponse.decode(new BinaryReader(data)));
  };
  /* SetBeforeSendHook */
  setBeforeSendHook = async (request: MsgSetBeforeSendHook): Promise<MsgSetBeforeSendHookResponse> => {
    const data = MsgSetBeforeSendHook.encode(request).finish();
    const promise = this.rpc.request("osmosis.tokenfactory.v1beta1.Msg", "SetBeforeSendHook", data);
    return promise.then(data => MsgSetBeforeSendHookResponse.decode(new BinaryReader(data)));
  };
  /* ForceTransfer */
  forceTransfer = async (request: MsgForceTransfer): Promise<MsgForceTransferResponse> => {
    const data = MsgForceTransfer.encode(request).finish();
    const promise = this.rpc.request("osmosis.tokenfactory.v1beta1.Msg", "ForceTransfer", data);
    return promise.then(data => MsgForceTransferResponse.decode(new BinaryReader(data)));
  };
}