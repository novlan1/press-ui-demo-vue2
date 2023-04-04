import { IChatSDK } from './types';
import {
  login,
  init,
  waitReady,
  watchIMEvent,
  setEventListener,
  sendMessage,
  getMessageList,
  TIM,
} from './helper';


export class IM {
  tim: IChatSDK;

  constructor({
    appId,
  }) {
    this.tim = this.init(appId);
  }

  init(appId) {
    const tim = init(appId);
    watchIMEvent({
      tim,
    });
    return tim;
  }

  setEventListener(type, cb) {
    setEventListener(type, cb);
  }

  login({ userId, userSig }) {
    this.tim.userId = userId;
    this.tim.userSig = userSig;
    return login({
      userId,
      userSig,
      tim: this.tim,
    });
  }

  async sendMessage({ to, text = '' }) {
    const { tim } = this;
    const { isOnline, userId, userSig } = tim;

    if (!isOnline && userId && userSig) {
      await login({ userId, userSig, tim });
    }
    await waitReady(tim);

    return await sendMessage({
      tim,
      to,
      text,
    });
  }

  getMessageList({
    conversationId,
    // count = 15,
    nextMsgId,
  }) {
    return getMessageList({
      conversationId,
      // count,
      nextMsgId,
      tim: this.tim,
    });
  }

  deleteConversation(id) {
    return this.tim.deleteConversation(id);
  }

  // 将所有会话的未读消息全部设置为已读
  sendAllMegRead() {
    return this.tim.setAllMessageRead({
      scope: TIM.TYPES.READ_ALL_MSG,
    });
  }

  // 将某会话下所有未读消息已读上报
  setMessageRead(id) {
    return this.tim.setMessageRead({ conversationID: id });
  }

  // 修改个人标配资料
  updateMyProfile(profile) {
    return this.tim.updateMyProfile(profile);
  }

  // 获取全量的会话列表
  getConversationList() {
    return this.tim.getConversationList();
  }

  logout() {
    return this.tim.logout();
  }
}

// export const IMHandler = new IM({ appId: 1400800161 });
