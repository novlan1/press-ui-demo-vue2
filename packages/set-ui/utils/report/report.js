// #ifndef H5
import Aegis from '@tencent/aegis-mp-sdk';
// #endif


let reportAegis = () => {};


// #ifndef H5
reportAegis = () => {
  new Aegis({
    id: 'OVeYwxAqKqrKGQwUmJ', // 项目ID，即上报id
    uin: '', // 用户唯一 ID（可选）
    reportApiSpeed: true, // 接口测速
  });
};
// #endif


export { reportAegis };
