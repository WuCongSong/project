import { deleteData } from "../utils/request";

export function Remove(id) {
  return deleteData(`http://192.168.16.111:3009/api/v1/shop_carts/${id}`);
}
