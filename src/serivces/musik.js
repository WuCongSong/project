import { get } from '../utils/request'

export function getData(page = 1, per = 10) {
    return get('http://192.168.16.111:3009/api/v1/products', { page, per })
  }