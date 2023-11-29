import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

const loginUrl = "http://localhost:8080";

export interface LoginRequest {
  id: string;
  password: string;
}

export const login = async (
  loginRequest: LoginRequest,
): Promise<AxiosResponse<void>> => {
  const token: string = Buffer.from(
    `${loginRequest.id}:${loginRequest.password}`,
    "base64",
  ).toString();
  const config: AxiosRequestConfig = {
    headers: {
      Authorization: `Basic ${token}`,
    },
  };

  return axios.post(loginUrl, {}, config);
};
