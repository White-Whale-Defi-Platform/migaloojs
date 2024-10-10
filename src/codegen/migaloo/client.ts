//@ts-nocheck
import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
import * as migalooFeeburnTxRegistry from "./feeburn/tx.registry";
import * as migalooFeeburnTxAmino from "./feeburn/tx.amino";
export const migalooAminoConverters = {
  ...migalooFeeburnTxAmino.AminoConverter
};
export const migalooProtoRegistry: ReadonlyArray<[string, GeneratedType]> = [...migalooFeeburnTxRegistry.registry];
export const getSigningMigalooClientOptions = ({
  defaultTypes = defaultRegistryTypes
}: {
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
} = {}): {
  registry: Registry;
  aminoTypes: AminoTypes;
} => {
  const registry = new Registry([...defaultTypes, ...migalooProtoRegistry]);
  const aminoTypes = new AminoTypes({
    ...migalooAminoConverters
  });
  return {
    registry,
    aminoTypes
  };
};
export const getSigningMigalooClient = async ({
  rpcEndpoint,
  signer,
  defaultTypes = defaultRegistryTypes
}: {
  rpcEndpoint: string | HttpEndpoint;
  signer: OfflineSigner;
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
  const {
    registry,
    aminoTypes
  } = getSigningMigalooClientOptions({
    defaultTypes
  });
  const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
    registry: registry as any,
    aminoTypes
  });
  return client;
};