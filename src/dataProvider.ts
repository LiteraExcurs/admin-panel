import jsonServerProvider from "ra-data-json-server";
import { API_URL } from "./app-config";
import { GetListParams, Options, fetchUtils } from "react-admin";

const checkResponse = (res: Response) => {
  return res.ok ? res.json() : Promise.reject(res)
}

// export const httpClient = () => {
//     const { token } = JSON.parse(window.localStorage.getItem('login')) || {};
//     return {'Authorization': `Bearer ${token}`};
//   };

//console.log(httpClient());

// const httpClient = fetchUtils.fetchJson;

const httpClient = (url, options: Options = {}) => {
  // if (!options.headers) {
  //     const token = localStorage.getItem('login');
  //     options.headers = new Headers({ Accept: 'application/json',
  //     Authorization: `Bearer ${token}` });
  // }
  const token = JSON.parse(localStorage.getItem('login'));
  options.user = {
      authenticated: true,
      token: `Bearer ${token}`
  }
  // const token = localStorage.getItem('login');
  // options.headers.set('Authorization', `Bearer ${token}`);
  return fetchUtils.fetchJson(url, options).then((res) => { return res });
}

const baseProvider = jsonServerProvider(API_URL, httpClient);

export const dataProvider = {
  ...baseProvider, 
  getList: async(resourse: string, params: GetListParams) => {
    // console.log({getList: params});
    // console.log({getList: resourse});
     return await httpClient(`${API_URL}/${resourse}`)
    .then((data) => {
      // console.log(data);
      return {
        data: data.json,
        total: data.json.lenght
      }
    })
  },
  getOne: async(resourse: string, params: GetListParams) => {
    // console.log({getOne: params});
    // console.log({getOne: resourse});
    return await httpClient(`${API_URL}/${resourse}/${params.id}`)
    .then((data) => {
      console.log(data.json);
      return {
        data: data.json
      }
    })
  },
  update: async(resourse: string, params: GetListParams) => {
    // console.log({update: params});
    // console.log({update: resourse});
    return await httpClient(`${API_URL}/${resourse}/${params.data.id}`, {
      method: 'PATCH',
      //headers: httpClient(),
      body: JSON.stringify(params.data)
    })
    .then((data) => {
      return {
        data: data.json
      }
    })
  }
} as any
