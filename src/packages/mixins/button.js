import { canIUseGetUserProfile } from '../common/version';
export const button = {
  // externalClasses: ['hover-class'],
  props: {
    id: { type: String, default: '' },
    lang: { type: String, default: '' },
    businessId: { type: String, default: '' },
    sessionFrom: { type: String, default: '' },
    sendMessageTitle: { type: String, default: '' },
    sendMessagePath: { type: String, default: '' },
    sendMessageImg: { type: String, default: '' },
    showMessageCard: { type: String, default: '' },
    appParameter: { type: String, default: '' },
    ariaLabel: { type: String, default: '' },
    openType: { type: String, default: '' },
    getUserProfileDesc: { type: String, default: '' },
    hoverClass: { type: String, default: '' },
  },
  data() {
    return {
      canIUseGetUserProfile: canIUseGetUserProfile(),
    };
  },
  methods: {
    onGetUserInfo(event) {
      this.triggerEvent('getuserinfo', event.detail);
    },
    onContact(event) {
      this.triggerEvent('contact', event.detail);
    },
    onGetPhoneNumber(event) {
      this.triggerEvent('getphonenumber', event.detail);
    },
    onError(event) {
      this.triggerEvent('error', event.detail);
    },
    onLaunchApp(event) {
      this.triggerEvent('launchapp', event.detail);
    },
    onOpenSetting(event) {
      this.triggerEvent('opensetting', event.detail);
    },
  },
};
