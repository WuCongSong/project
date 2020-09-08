import { get } from '../utils/request.js'
export function getBanners(){
    return get("http://localhost:3000/banner")
}