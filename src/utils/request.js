
import axios from 'axios'
const instance = axios.create({
    timeout:5000
})
/**
 * 
 * @param {*} url 
 * @param {*} params 
 */
export function get (url,params){
    return instance.get(url,{
        params
    })
}
/**
 * 
 * @param {*} url 
 * @param {*} data 
 */
export function post (url,data){
    return instance.post(url,data);
}