// 用來管理特定執行環境的程式碼片段，並在各頁面自動載入、執行
import Axios from 'axios'
export default function (ctx, inject) {
  const axios = Axios.create({
    baseURL: 'http://e-traffic.taichung.gov.tw/DataAPI/api'
  })
  // axios.defaults.headers.common['Authorization'] = 'YUOR_AUTH_TOKEN'
  // axios.defaults.headers = {
  //   Accept: 'application/json',
  //   'Content-Type': 'application/json'
  // }
  // axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
  /* 注入 Nuxt Instance Property */
  ctx.$axios = axios
  inject('axios', axios)
}
