import { post,get} from '../utils/request'

/* 加入购物车 */
export function addCart(id) {
  return post('http://localhost:3009/api/v1/shop_carts',{
    product:id,
  })
}

export function loadCarts() {
  return get("http://localhost:3009/api/v1/shop_carts?per=100");
}