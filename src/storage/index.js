/**
 * Storage 封装
 */

const STORAGE_KEY = 'mall'
export default {
  // 获取某个模块下面的属性：比如user下面的name属性
  getItem (key, moduleName) {
    if (moduleName) {
      let val = this.getItem(moduleName)
      if (val) return val[key]
    }
    return this.getStorage()[key] || {} // 解决一个Bug: 当对象中找不到key对应的value即返回undefined时，使用 || 返回一个空对象{}
  },
  // 存储值
  setItem (key, value, moduleName) {
    if (moduleName) {
      let val = this.getItem(moduleName)
      val[key] = value
      this.setItem(moduleName, val)
    } else {
      let val = this.getStorage()
      val[key] = value
      window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val))
    }
  },
  getStorage () {
    // window.sessionStorage.getItem() 系统获取Storage的方法 返回的是一个JSON
    return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) || '{}')
  },
  clear (key, moduleName) {
    let val = this.getStorage()
    if (moduleName) {
      if (!val[moduleName]) return
      delete val[moduleName][key]
    } else {
      delete val[key]
    }
    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val))
  }
}
