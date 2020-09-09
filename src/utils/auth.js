/* 设置token */
export function setToken(val) {
  localStorage.setItem("token", val);
}
/* 获取token */
export function getToken() {
  return localStorage.getItem("token");
}
/* 删除token */
export function removeToken() {
  localStorage.removeItem("token");
}
/* 是否登录 */
export function isLogined() {
  if (getToken()) {
    return true;
  } else {
    return false;
  }
}
