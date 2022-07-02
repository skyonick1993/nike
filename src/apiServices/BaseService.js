import axios from "axios";
const DOMAIN_NIKE = "https://nike0403.herokuapp.com/";
const TOKEN_VTCODER = "";

class BaseService {
  get(url) {
    return axios({
      method: "GET",
      url: DOMAIN_NIKE + url,
      headers: { Token: TOKEN_VTCODER },
    });
  }

  post(url, data) {
    return axios({
      method: "POST",
      url: DOMAIN_NIKE + url,
      data: data,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });
  }
}

export default BaseService;
