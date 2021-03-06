// 对axios的一个封装
import axios from 'axios'
/* eslint-disable */
const service = axios.create({
  baseURL: 'xxxx',
  timeout: 30000,
  withCredentials: true,
  headers: {
    get: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    },
    post: {
      'Content-Type': 'application/json;charset=utf-8'
    }
  },
  validateStatus: function () {
    return true
  }
})
// request 拦截器
service.interceptors.request.use((config) => {
    // 在这里写一些request之前的操作
    return config
}, (error) => {
    console.log('request:', error)
    Promise.reject(error)
})
// response 拦截器
service.interceptors.response.use((response) => {
    const status = response.status
    console.log('status:', status)
    return response;
}, (error) => {
    console.log('请求失败:', error)
    Promise.reject(error)
})
export default {
    get (url, params) {
        return new Promise((resolve, reject) => {
            service({
                method: 'get',
                url,
                params
            }).then(res => {
                resolve(res.data)
            })
        })
    },
    post (url, params) {
      return new Promise((resolve, reject) => {
          service({
              method: 'post',
              url,
              data: params,
              config: { headers: { 'Content-Type': 'multipart/form-data' } }
          }).then(res => {
              resolve(res.data)
          })
      })
    }
}

