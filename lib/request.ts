import axios, { AxiosRequestConfig, Method } from 'axios';

const axioRequest = axios.create({
  headers: {
    'Content-Type': 'application/json',
    accept: 'application/json',
  },
  withCredentials: true,
  timeout: 60000,
});
export const request = async (request: AxiosRequestConfig) => {
  const res = await axioRequest(request);
  return res.data;
};

const axioRequestSimple = axios.create({
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
  withCredentials: true,
  timeout: 30000,
});
// 走简单请求,避免触发options
export const requestSimple = async (request: AxiosRequestConfig) => {
  const res = await axioRequestSimple(request);
  return res.data;
};

export const API_DOMAIN = 'https://www.tencentcloud.com/account/login/saas/';

/**
 * config.method: 请求method
 * config.url: 请求url
 * config.data: 请求数据
 */
export interface Config {
  method: Method;
  url: string;
  path: string;
  headers?: any;
  data?: unknown;
  withCredentials?: boolean;
}

function apiRequest(config: Config): any {
  // 如果没有设置config.data，则默认为{}
  if (config.data === undefined) {
    config.data = {};
  }

  // 如果没有设置config.method，则默认为post
  config.method = config.method || 'post';
  const axiosConfig: AxiosRequestConfig = {
    method: config.method,
    url: config.url,
    data: config.data,
    withCredentials: true,
    timeout: 3 * 60 * 1000, // ms
  };
  if (config.headers) {
    axiosConfig.headers = config.headers;
  }
  if (config.method === 'get') {
    axiosConfig.params = config.data;
  }
  if (config.headers?.withCredentials === false) {
    axiosConfig.withCredentials = false;
  }

  return axios(axiosConfig)
    .then((res: { data: any }) => {
      const result = res.data;
      if (result.Code !== 0) {
      }
      return result;
    })
    .catch((err: any) => err);
}

export async function apiFetch(path: any, params?: any, method?: string, headers?: any): Promise<any> {
  const config = {
    url: path.indexOf('https:') >= 0 ? path : `${API_DOMAIN}${path}`,
    path,
    method,
    headers,
    data: params,
  };
  return apiRequest(config as Config);
}
