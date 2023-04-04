import { ChatSDK } from 'tim-js-sdk';

export interface IChatSDK extends ChatSDK {
  isOnline?: boolean
  isReady?: boolean

  userId?: string;
  userSig?: string;
}
