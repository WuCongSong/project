/**
 * @param {*}data
 * userName
 * password
 */
import {post} from '../utils/request';
export function login(data){
    return post("http://192.168.16.111:3009/api/v1/auth/login", data);
}