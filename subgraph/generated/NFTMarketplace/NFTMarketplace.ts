// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class ListingCancelled extends ethereum.Event {
  get params(): ListingCancelled__Params {
    return new ListingCancelled__Params(this);
  }
}

export class ListingCancelled__Params {
  _event: ListingCancelled;

  constructor(event: ListingCancelled) {
    this._event = event;
  }

  get nftAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get seller(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class ListingCreated extends ethereum.Event {
  get params(): ListingCreated__Params {
    return new ListingCreated__Params(this);
  }
}

export class ListingCreated__Params {
  _event: ListingCreated;

  constructor(event: ListingCreated) {
    this._event = event;
  }

  get nftAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get price(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get seller(): Address {
    return this._event.parameters[3].value.toAddress();
  }
}

export class ListingPurchased extends ethereum.Event {
  get params(): ListingPurchased__Params {
    return new ListingPurchased__Params(this);
  }
}

export class ListingPurchased__Params {
  _event: ListingPurchased;

  constructor(event: ListingPurchased) {
    this._event = event;
  }

  get nftAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get seller(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get buyer(): Address {
    return this._event.parameters[3].value.toAddress();
  }
}

export class ListingUpdated extends ethereum.Event {
  get params(): ListingUpdated__Params {
    return new ListingUpdated__Params(this);
  }
}

export class ListingUpdated__Params {
  _event: ListingUpdated;

  constructor(event: ListingUpdated) {
    this._event = event;
  }

  get nftAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get newPrice(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get seller(): Address {
    return this._event.parameters[3].value.toAddress();
  }
}

export class NFTMarketplace__listingsResult {
  value0: BigInt;
  value1: Address;

  constructor(value0: BigInt, value1: Address) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromAddress(this.value1));
    return map;
  }

  getPrice(): BigInt {
    return this.value0;
  }

  getSeller(): Address {
    return this.value1;
  }
}

export class NFTMarketplace extends ethereum.SmartContract {
  static bind(address: Address): NFTMarketplace {
    return new NFTMarketplace("NFTMarketplace", address);
  }

  listings(param0: Address, param1: BigInt): NFTMarketplace__listingsResult {
    let result = super.call(
      "listings",
      "listings(address,uint256):(uint256,address)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );

    return new NFTMarketplace__listingsResult(
      result[0].toBigInt(),
      result[1].toAddress()
    );
  }

  try_listings(
    param0: Address,
    param1: BigInt
  ): ethereum.CallResult<NFTMarketplace__listingsResult> {
    let result = super.tryCall(
      "listings",
      "listings(address,uint256):(uint256,address)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new NFTMarketplace__listingsResult(
        value[0].toBigInt(),
        value[1].toAddress()
      )
    );
  }
}

export class CancelListingCall extends ethereum.Call {
  get inputs(): CancelListingCall__Inputs {
    return new CancelListingCall__Inputs(this);
  }

  get outputs(): CancelListingCall__Outputs {
    return new CancelListingCall__Outputs(this);
  }
}

export class CancelListingCall__Inputs {
  _call: CancelListingCall;

  constructor(call: CancelListingCall) {
    this._call = call;
  }

  get nftAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class CancelListingCall__Outputs {
  _call: CancelListingCall;

  constructor(call: CancelListingCall) {
    this._call = call;
  }
}

export class CreateListingCall extends ethereum.Call {
  get inputs(): CreateListingCall__Inputs {
    return new CreateListingCall__Inputs(this);
  }

  get outputs(): CreateListingCall__Outputs {
    return new CreateListingCall__Outputs(this);
  }
}

export class CreateListingCall__Inputs {
  _call: CreateListingCall;

  constructor(call: CreateListingCall) {
    this._call = call;
  }

  get nftAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get price(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class CreateListingCall__Outputs {
  _call: CreateListingCall;

  constructor(call: CreateListingCall) {
    this._call = call;
  }
}

export class PurchaseListingCall extends ethereum.Call {
  get inputs(): PurchaseListingCall__Inputs {
    return new PurchaseListingCall__Inputs(this);
  }

  get outputs(): PurchaseListingCall__Outputs {
    return new PurchaseListingCall__Outputs(this);
  }
}

export class PurchaseListingCall__Inputs {
  _call: PurchaseListingCall;

  constructor(call: PurchaseListingCall) {
    this._call = call;
  }

  get nftAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class PurchaseListingCall__Outputs {
  _call: PurchaseListingCall;

  constructor(call: PurchaseListingCall) {
    this._call = call;
  }
}

export class UpdateListingCall extends ethereum.Call {
  get inputs(): UpdateListingCall__Inputs {
    return new UpdateListingCall__Inputs(this);
  }

  get outputs(): UpdateListingCall__Outputs {
    return new UpdateListingCall__Outputs(this);
  }
}

export class UpdateListingCall__Inputs {
  _call: UpdateListingCall;

  constructor(call: UpdateListingCall) {
    this._call = call;
  }

  get nftAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get newPrice(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class UpdateListingCall__Outputs {
  _call: UpdateListingCall;

  constructor(call: UpdateListingCall) {
    this._call = call;
  }
}
