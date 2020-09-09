import { post, get, put } from "../utils/request";

export function addressList() {
  return get("http://localhost:3009/api/v1/addresses");
}

export function addressSingle(id) {
  return get(`http://localhost:3009/api/v1/addresses/${id}`);
}

export function addressAdd() {
  return post("http://localhost:3009/api/v1/addresses");
}

export function addressEdit(id) {
  return put(`http://localhost:3009/api/v1/addresses/${id}`);
}
