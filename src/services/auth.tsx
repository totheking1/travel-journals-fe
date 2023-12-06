import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { Buffer } from "buffer";

const loginUrl = "http://localhost:8080";

export interface LoginRequest {
  id: string;
  password: string;
}

export const login = async (
  loginRequest: LoginRequest,
): Promise<AxiosResponse<void>> => {
  const data: string = `${loginRequest.id}:${loginRequest.password}`;
  const token: string = Buffer.from(data).toString("base64");
  const config: AxiosRequestConfig = {
    headers: {
      Authorization: `Basic ${token}`,
    },
  };

  return axios.post(loginUrl, {}, config);
};
