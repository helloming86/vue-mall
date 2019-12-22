<template>
  <div class="header">
    <div class="nav-topbar">
      <div class="container">
        <div class="topbar-menu">
          <a href="javascript:;">小米商城</a>
          <a href="javascript:;">MIUI</a>
          <a href="javascript:;">云服务</a>
          <a href="javascript:;">协议规则</a>
        </div>
        <div class="topbar-user">
          <a href="javascript:;" v-if="username">{{username}}</a>
          <a href="javascript:;" v-if="!username" @click="login">登录</a>
          <a href="javascript:;">我的订单</a>
          <!-- 如果没有参数gotoCart不加括号 -->
          <a href="javascript:;" class="my-cart" @click="gotoCart"><span class="icon-cart"></span>购物车{{cartCount}}</a>
        </div>
      </div>
    </div>
    <div class="nav-header">
      <div class="container">
        <div class="header-logo">
          <a href="/index"></a>
        </div>
        <div class="header-menu">
          <div class="item-menu">
            <span>小米</span>
            <div class="children">
              <ul>
                <li class="product" v-for="(item, index) in phoneList" :key="index">
                  <a v-bind:href="'/product/'+item.id" target="_blank">
                    <div class="pro-img">
                      <img :src="item.mainImage" :alt="item.subtitle">
                    </div>
                    <div class="pro-name">{{item.name}}</div>
                    <div class="pro-price">{{item.price | currency}}</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="item-menu">
            <span>红米</span>
            <div class="children"></div>
          </div>
          <div class="item-menu">
            <span>电视</span>
            <div class="children">
              <ul>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img src="/imgs/nav-img/nav-3-1.jpg" alt="小米电视">
                    </div>
                    <div class="pro-name">小米电视</div>
                    <div class="pro-price">1999元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img src="/imgs/nav-img/nav-3-2.jpg" alt="小米电视">
                    </div>
                    <div class="pro-name">小米电视</div>
                    <div class="pro-price">1999元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img src="/imgs/nav-img/nav-3-3.png" alt="小米电视">
                    </div>
                    <div class="pro-name">小米电视</div>
                    <div class="pro-price">1999元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img src="/imgs/nav-img/nav-3-4.jpg" alt="小米电视">
                    </div>
                    <div class="pro-name">小米电视</div>
                    <div class="pro-price">1999元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img src="/imgs/nav-img/nav-3-5.jpg" alt="小米电视">
                    </div>
                    <div class="pro-name">小米电视</div>
                    <div class="pro-price">1999元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img src="/imgs/nav-img/nav-3-6.png" alt="小米电视">
                    </div>
                    <div class="pro-name">小米电视</div>
                    <div class="pro-price">1999元</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="header-search">
          <div class="wrapper">
            <input type="text" name="keyword">
            <a href="javascript:;"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavHeader',
  data () {
    return {
      phoneList: []
    }
  },
  computed: {
    username () {
      return this.$store.state.username
    },
    cartCount () {
      return this.$store.state.cartCount
    }
  },
  filters: {
    currency (val) {
      if (!val) return '0.00'
      // toFixed(2)四舍五入2位小数
      return '￥' + val.toFixed(2) + '元'
    }
  },
  mounted () {
    this.getProductList()
  },
  methods: {
    getProductList () {
      this.axios.get('/products', {
        params: {
          categoryId: '100012'
        }
      }).then((res) => {
        if (res.list.length > 6) {
          this.phoneList = res.list.slice(0, 6)
        }
      })
    },
    gotoCart () {
      this.$router.push('/cart')
    },
    login () {
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "~@/assets/scss/config.scss";
  @import "~@/assets/scss/mixin.scss";
  .header{
    .nav-topbar{
      height: $fontB;
      line-height: $fontB;
      background-color: $colorB;
      color: $colorG;
      .container{
        @include flex();
        width: $min-width;
        margin-right: auto;
        margin-left: auto;
        a{
            display: inline-block;
            color: $colorG;
            margin-right: 17px;
        }
        .my-cart{
          width: 110px;
          background-color: $colorA;
          text-align: center;
          color: $colorG;
          .icon-cart{
            @include bgImg(16px,12px,"/imgs/icon-cart-checked.png",contain);
            margin-right: 4px;
          }
        }
      }
    }
    .nav-header{
      .container{
        position: relative;
        height: 112px;
        @include flex();
        .header-logo{
          display: inline-block;
          width: 55px;
          height: 55px;
          background-color: $colorA;
          a{
            display: inline-block;
            width: 110px;
            height: 55px;
            &:before{
              content: " ";
              @include bgImg(55px,55px,"/imgs/mi-logo.png",55px);
              transition: margin .2s;
            }
            &:after{
              content: " ";
              @include bgImg(55px,55px,"/imgs/mi-home.png",55px);
            }
            &:hover:before{
              margin-left: -55px;
              transition: margin .2s;
            }
          }
        }
        .header-menu{
          display: inline-block;
          width: 643px;
          padding-left: 209px;
          .item-menu{
            display: inline-block;
            color: $colorB;
            font-weight: bold;
            font-size: 16px;
            line-height: 112px;
            margin-left: 20px;
            span{
              cursor: pointer;
            }
            &:hover{
              color: $colorA;
              .children{
                height: 220px;
                opacity: 1;
              }
            }
            .children {
              position: absolute;
              top: 112px;
              left: 0;
              width: $min-width;
              height: 0;
              opacity: 0;
              overflow: hidden;
              transition: all .5s;
              background-color: $colorG;
              border-top: 1px solid $colorH;
              box-shadow: 0 7px 6px 0 rgba(0, 0, 0, 0.11);
              z-index: 10;
              .product {
                position: relative;
                float: left;
                width: 16.6%;
                height: 220px;
                font-size: $fontK;
                line-height: $fontK;
                text-align: center;
                a {
                  display: inline-block;
                }
                img {
                  width: auto;
                  height: 111px;
                  margin-top: 26px;
                }
                .pro-img {
                  height: 137px;
                }
                .pro-name {
                  font-weight: bold;
                  margin-top: 19px;
                  margin-bottom: 8px;
                  color: $colorB;
                }
                .pro-price {
                  color: $colorA;
                }
                &:before{
                  content: " ";
                  position: absolute;
                  top: 28px;
                  right: 0;
                  border-left: 1px solid $colorF;
                  height: 100px;
                  width: 1px;
                }
                &:last-child:before{
                  display: none;
                }
              }
            }
          }
        }
        .header-search{
          width: 319px;
          .wrapper{
            height: 50px;
            border: 1px solid $colorH;
            display: flex;
            align-items: center;
            input{
              border: none;
              /* w3c 默认width不包含padding 设置box-sizing 为 border-box 就会包含 */
              box-sizing: border-box;
              border-right: 1px solid $colorH;
              width: 264px;
              height: 50px;
              padding-left: 14px;
            }
            a{
              @include bgImg(18px,18px,"/imgs/icon-search.png",contain);
              margin-left: 17px;
            }
          }
        }
      }
    }
  }
</style>
