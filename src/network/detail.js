import request from "./request"

// 获取用户详情页
export function getDetail(iid) {
  // 正式请求
  return request({
    url: '/js/detail.js',
    params: {
      iid
    }
  })
}
