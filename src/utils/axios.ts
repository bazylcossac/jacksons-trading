import axios from "axios";

export const binanceAxiosInstance = axios.create({
  baseURL: "https://testnet.binance.vision/api/v3",
});
