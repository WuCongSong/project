import { post, get, put } from "../utils/request";

export function addressList() {
  return get("http://192.168.16.111:3009/api/v1/addresses");
}

export function addressSingle(id) {
  return get(`http://http://192.168.16.111:3009/api/v1/addresses/${id}`);
}

export function addressAdd() {
  return post("http://http://192.168.16.111:3009/api/v1/addresses");
}

export function addressEdit(id) {
  return put(`http://http://192.168.16.111:3009/api/v1/addresses/${id}`);
}
