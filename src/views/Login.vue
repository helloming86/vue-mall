<template>
  <div class="login">
    <div class="container">
      <a href="/index">
        <img src="/imgs/login-logo.png" alt="">
      </a>
    </div>
    <div class="wrapper">
      <div class="container">
        <div class="login-form">
          <h3>
            <span class="checked">账号登录</span>
            <span class="sep-line">|</span>
            <span>扫码登录</span>
          </h3>
          <div class="input">
            <input type="text" placeholder="请输入账户" v-model="username">
          </div>
          <div class="input">
            <input type="password" placeholder="请输入密码" v-model="password">
          </div>
          <div class="btn-box">
            <a href="javascript:;" class="btn" @click="login">登录</a>
          </div>
          <div class="tips">
            <div class="sms" @click="register">手机短信登录/注册</div>
            <div class="reg">
              立即注册<span>|</span>忘记密码
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="footer-link">
        <a href="https://google.com.hk" target="_blank">谷歌</a><span>|</span>
        <a href="https://imooc.com" target="_blank">慕课网</a><span>|</span>
        <a href="https://time.geekbang.org" target="_blank">极客时间</a>
      </div>
      <div class="copyright">CopyRight @2019 <span class="domain">mi.future.com</span> All Rights Reserved</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      username: '',
      password: '',
      userId: '',
      res: {}
    }
  },
  methods: {
    login () {
      // 使用ES6解构语法糖获取username、password
      let { username, password } = this
      this.axios.post('/user/login', {
        username,
        password
      }).then((res) => {
        console.log(res) // 这里的res只包含接口response的data，是因为我们在main.js做了接口拦截，如果成功，只返回返回信息的data部分
        this.$cookie.set('userId', res.id, { expires: 'Session' })
        console.log(this.$cookie.get('userId'))
        this.$store.dispatch('saveUsername', res.username)
        // this.$router.push('/index')
        this.$router.push({
          name: 'index',
          params: {
            from: 'login'
          }
        })
      })
    },
    register () {
      this.axios.post('/user/register', {
        username: 'hello',
        password: 'world',
        email: 'helloworld@qq.com'
      }).then((res) => {
        alert('注册成功')
      })
    }
  }
}
</script>

<style scoped lang="scss">
  .login{
    /*子代选择器 > 作用于元素的第一代后代 .login>.container 的样式*/
    /*子代选择器 空格 作用于元素的所有后代*/
    &>.container{
      height: 112px;
      img{
        width: auto;
        height: 100%;
      }
    }
    .wrapper{
      background: url("/imgs/login-bg.jpg") no-repeat center;
      .container{
        position: relative;
        height: 576px;
        .login-form{
          box-sizing: border-box;
          padding-left: 31px;
          padding-right: 31px;
          width: 410px;
          height: 510px;
          background-color: #ffffff;
          position: absolute;
          bottom: 29px;
          right: 0;
          h3{
            height: 23px;
            line-height: 23px;
            text-align: center;
            margin: 40px auto 49px;
            .checked{
              color: #FF6600;
            }
            .sep-line{
              margin: 0 32px;
            }
          }
          .input{
            display: inline-block;
            width: 348px;
            height: 50px;
            border: 1px solid #e5e5e5;
            margin-bottom: 20px;
            &:last-child{
              margin-bottom: 0;
            }
            input{
              width: 100%;
              height: 100%;
              border: none;
              padding: 18px;
            }
          }
          .btn{
            width: 100%;
            height: 50px;
            line-height: 50px;
            margin-top: 10px;
            font-size: 16px;
          }
          .tips{
            margin-top: 14px;
            display: flex;
            justify-content: space-between;
            font-size: 14px;
            cursor: pointer;
            .sms{
              color:#FF6600;
            }
            .reg{
              color:#999999;
              span{
                margin:0 7px;
              }
            }
          }
        }
      }
    }
    .footer{
      height:100px;
      padding-top:60px;
      color:#999999;
      font-size:16px;
      text-align:center;
      .footer-link{
        a{
          color:#999999;
          display:inline-block;
        }
        span{
          margin:0 10px;
        }
      }
      .copyright{
        margin-top:13px;
      }
    }
  }
</style>
