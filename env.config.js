// 项目接口环境水质
// 下面配置是JsonP和 CORS跨域时配置？

let baseURL

// process node.js的process进程
// process.env 获取当前node.js进程中的环境变量
switch (process.env.NODE_ENV) {
  case 'development':
    baseURL = 'http://dev.com/api'
    break
  case 'production':
    baseURL = 'http://prod.com/api'
    break
  case 'test':
    baseURL = 'http://test.com/api'
    break
  default:
    baseURL = 'http://dev.com/api'
    break
}

export default {
  baseURL
}
