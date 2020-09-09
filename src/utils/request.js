import axios from 'axios'
const instance = axios.create({
    timeout: 5000, // 设置请求超时时间，如果网速不好等原因请求超过5s就会报错
    baseURL: 'http://localhost:3009' // 表示我们请求api接口时候的基地址,此地址会拼接上请求中的url
  })

/**
 * 发送get请求
 * @param {} url 地址
 * @param {*} params  传递的参数
 */
export function get(url, params) {
    return instance.get(url, {
      params // params: params // 表示url中传递的参数
    })
  }
  // 简写
  // export const get = (url, params) => instance.get(url, { params });
  
  /**
   * 发送post请求
   */
  export function post(url, data) {
    return instance.post(url, data)
  }
  // export const post = (url, data) => instance.post(url, data)
  /**
   * put请求修改数据
   * @param {*} url 地址
   * @param {*} data 数据
   */
  export function put(url, data) {
    return instance.put(url, data)
  }
  // export const put = (url, data) => instance.put(url, data)
  /**
   * 删除数据
   * @param {*} url   地址
   */
  export function del(url) {
    return instance.delete(url)
  }
  // export const del = (url) => instance.delete(url);
  export default axios
  