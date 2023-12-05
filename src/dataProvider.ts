import jsonServerProvider from "ra-data-json-server";
import { API_URL } from "./app-config";
import { GetListParams, fetchUtils } from "react-admin";

export const httpClient = () => {
    const { token } = JSON.parse(localStorage.getItem('login')) || {};
    return {Authorization: `Bearer ${token}`};
  };

const checkResponse = (res: Response) => {
  return res.ok ? res.json() : Promise.reject(res)
}

export const dataProvider = {
  getList: async(resourse: string, params: GetListParams) => {
    // console.log({getList: params});
    // console.log({getList: resourse});
    return await fetch(`${API_URL}/${resourse}`)
    .then(checkResponse).then((data) => {
      return {
        data: data,
        total: data.lenght
      }
    })
  },
  getOne: async(resourse: string, params: GetListParams) => {
    // console.log({getOne: params});
    // console.log({getOne: resourse});
    return await fetch(`${API_URL}/${resourse}/${params.id}`)
    .then(checkResponse).then((data) => {
      return {
        data
      }
    })
  },
  update: async(resourse: string, params: GetListParams) => {
    // console.log({update: params});
    // console.log({update: resourse});
    return await fetch(`${API_URL}/${resourse}/${params.data.id}`, {
      method: 'PATCH',
      headers: httpClient(),
      body: JSON.stringify(params.data)
    })
    .then(checkResponse).then((data) => {
      return {
        data: data
      }
    })
  }
} as any
