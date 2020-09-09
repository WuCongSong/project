import { get } from '../utils/request'

export function getData(page = 1, per = 10) {
    return get('/api/v1/products', { page, per })
  }