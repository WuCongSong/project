import { deleteData } from "../utils/request";

export function Remove(id) {
  return deleteData(`http://localhost:3009/api/v1/shop_carts/${id}`);
}
