import { TIM } from './tim';

const EVENT_LIST = [
  TIM.EVENT.SDK_READY,
  TIM.EVENT.SDK_NOT_READY,

  TIM.EVENT.TOTAL_UNREAD_MESSAGE_COUNT_UPDATED,

  TIM.EVENT.MESSAGE_RECEIVED,
  TIM.EVENT.MESSAGE_MODIFIED,
  TIM.EVENT.MESSAGE_REVOKED,
  TIM.EVENT.MESSAGE_READ_BY_PEER,
  TIM.EVENT.MESSAGE_READ_RECEIPT_RECEIVED,

  TIM.EVENT.CONVERSATION_LIST_UPDATED,

  TIM.EVENT.GROUP_LIST_UPDATED,
  TIM.EVENT.GROUP_ATTRIBUTES_UPDATED,

  TIM.EVENT.TOPIC_CREATED,
  TIM.EVENT.TOPIC_UPDATED,
  TIM.EVENT.TOPIC_DELETED,

  TIM.EVENT.PROFILE_UPDATED,
  TIM.EVENT.BLACKLIST_UPDATED,

  TIM.EVENT.FRIEND_LIST_UPDATED,
  TIM.EVENT.FRIEND_GROUP_LIST_UPDATED,
  TIM.EVENT.FRIEND_APPLICATION_LIST_UPDATED,

  TIM.EVENT.ERROR,
  TIM.EVENT.NET_STATE_CHANGE,
  TIM.EVENT.KICKED_OUT,
];


function onReady({ tim }) {
  tim.isReady = true;
}

function onNotReady({ tim }) {
  tim.isReady = false;
}

function onKickOut({ tim }) {
  tim.isOnline = false;
}


const eventListenerMap: {
  [k: string]: Array<(event: any) => void>
} = {
  [TIM.EVENT.SDK_READY]: [onReady],
  [TIM.EVENT.SDK_NOT_READY]: [onNotReady],
  [TIM.EVENT.KICKED_OUT]: [onKickOut],
};


function executeCallbacks({
  type,
  event,
  tim,
}) {
  if (!eventListenerMap[type]) return;
  for (const cb of eventListenerMap[type]) {
    if (typeof cb === 'function') {
      cb.call({ tim }, { tim, event });
    }
  }
}

export function watchIMEvent({ tim }) {
  EVENT_LIST.forEach((type) => {
    tim.on(type, (event) => {
      executeCallbacks({
        type,
        event,
        tim,
      });
    });
  });
}

export function setEventListener(type, cb) {
  if (eventListenerMap[type]) {
    eventListenerMap[type].push(cb);
  } else {
    eventListenerMap[type] = [cb];
  }
}
