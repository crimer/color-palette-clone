import { request } from "../fratures/common/lib/request";

const getAll = () => request("GET",'paletts.json')

const getById = (id) => request("GET",'paletts.json')

const deleteById = (id)  => request('DELETE','paletts.json')


export const palettsApi = {
  getAll,
  getById,
  deleteById
}
