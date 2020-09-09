import axios from "axios";
// import { Toast } from "vant";
// import { getToken } from "./auth";
const instance = axios.create({
  timeout: 5000,
});

//网络请求全局拦截
//发起和返回数据的时候都会调用的钩子函数
// Add a request interceptor
// 请求全局拦截 所有的网络请求发起之前都会先走这个方法
/* instance.interceptors.request.use(
  function(config) {
    // console.log("请求发起了");
    config.headers.authorization = `Bearer ${getToken()}`;
    // Do something before request is sent
    return config;
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
// 全局响应拦截 所有的网络请求返回的时候都会先走这个方法
instance.interceptors.response.use(
  function(response) {
    // console.log("请求完成了");

    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function(error) {
    console.log(error);
    //当服务器返回401状态码的时候，跳转回登录页面
    if (error && error.response && error.response.status === 401) {
      Toast.fail("登录信息无效，请重新登录");
      setTimeout(() => {
        window.location.href = "/#/login";
      }, 2000);
    }
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);
 */
/* 
发起get请求 */
export function get(url, params) {
  return instance.get(url, {
    params, //params:params 表示url中传递都参数
  });
}
/* 发起post请求 */
export function post(url, data) {
  return instance.post(url, data);
}
/* 发起delete请求 */
export function deleteData(url, data) {
  return instance.delete(url, data);
}
/* 发起put请求 */
export function put(url, data) {
  return instance.put(url, data);
}
export default axios;
