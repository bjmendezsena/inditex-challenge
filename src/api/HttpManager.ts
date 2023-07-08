import apiInstance from "./apiInstance";

export const get = <T>(url: string, params: any = {}) => {
  return apiInstance.get<T>(url, {
    params,
    paramsSerializer: (params) => {
      return Object.entries(params)
        .map(([key, value]) => {
          if (!value) return "";
          return `${key}=${params[key]}`;
        })
        .join("&");
    },
  });
};
