import axios from "axios";

axios.defaults.baseURL = "/api";

// 登录用户接口
export const getLogin = (username, password) => axios.post("/users/login", { username, password });
