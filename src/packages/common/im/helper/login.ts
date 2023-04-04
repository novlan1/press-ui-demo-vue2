import { filterSameRequest } from './filter-same-request';


async function innerLogin({
  tim,
  userId,
  userSig,
}) {
  const resp = await tim.login({ userID: userId, userSig }).catch((e) => {
    console.warn(e);
    return Promise.reject(e);
  });
  tim.isOnline = true;
  console.log('[TIM] login success: ', resp.data);

  if (resp.data.repeatLogin === true) {
    console.log(resp.data.errorInfo);
  }

  return {
    userSig,
    userId,
  };
}

export async function login({
  userId,
  userSig,
  tim,
}) {
  const url = 'LOGIN';
  const reqData = { userId, userSig };

  return await filterSameRequest({
    url,
    reqData,
    handle: innerLogin.bind(null, {
      userId,
      userSig,
      tim,
    }),
  });
}
