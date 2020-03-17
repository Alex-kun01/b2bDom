<template>
    <div class="header_bar">
        <div class="header_bar_search">
            <div class="logo">
                <img src="https://www.b2b3.com/statics/images/tradeSearch/b2b3_logo_en.png">
            </div>
            <div class="input">
                <!-- 菜单一 -->
                <div class="select first">
                    {{select1}}
                    <i class="el-icon-caret-bottom"></i>
                    <div class="select_menu" v-show="s1show">
                        <div v-for="(item, index) in menu1" :key="index" :class="{active: index === current1}"
                        @click="changeMenu1(item, index)"
                        >{{item}}</div>
                    </div>
                    </div>
                <!-- 菜单二 -->
                <div class="select two" v-show="isShow">
                    {{select2}}
                    <i class="el-icon-caret-bottom"></i>
                    <div class="select_menu" v-show="s2show">
                        <div  v-for="(item, index) in menu2" :key="index" :class="{active: index === current2}"
                        @click="changeMenu2(item, index)"
                        >{{item}}</div>
                    </div>
                    </div>
                <input type="text" :placeholder="inputText">
                <div class="input-btn"><i class="el-icon-search"></i></div>
                <div class="text">
                    搜索
                </div>
            </div>
            <div class="login" v-if="isLogin">
                <button><i class="el-icon-user-solid"></i>
                    <router-link :to="{path: '/login'}">登录</router-link>
                </button>
                <button><i class="el-icon-user"></i>
                    <router-link :to="{path: '/register'}">注册</router-link>
                </button>
            </div>
            <div class="loging" v-else>
                <div>已登陆：{{this.email}}</div>
                <div class="signOut" @click="signOut">退出登陆</div>
            </div>
        </div>
        <div class="header_bar_menu">
            <span @click="changeIndex(1)">
                 <router-link :class="{active: activeIndex === 1}" :to="{path: '/index/trademap'}">贸易地图</router-link>
            </span>
           <span @click="changeIndex(2)">
               <router-link :class="{active: activeIndex === 2}" :to="{path: '/index/searchemail/all'}">AI搜邮</router-link>
           </span>
           <span @click="changeIndex(3)">
               <router-link :class="{active: activeIndex === 3}" :to="{path: '/index/pricingplan'}">方案价格</router-link>
           </span>
           <span @click="changeIndex(4)">
               <router-link :class="{active: activeIndex === 4}" :to="{path: '/index/customsdata/jin'}">海关数据</router-link>
           </span>
           <span @click="changeIndex(5)">
               <router-link :class="{active: activeIndex === 5}" :to="{path: '/index/customercase'}">客户案例</router-link>
           </span >
           <span @click="changeIndex(6)">
               <router-link :class="{active: activeIndex === 6}" :to="{path: '/index/hscode'}">海关编码</router-link>
           </span>
           <span @click="changeIndex(7)">
               <router-link :class="{active: activeIndex === 7}" :to="{path: '/index/hstool'}">外贸工具</router-link>
           </span>
           <span @click="changeIndex(8)">
               <router-link  :class="{active: activeIndex === 8}" :to="{path: '/index/tradeskills'}">外贸技巧</router-link>
           </span>
        </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      input1: '',
      // 搜索下拉1数据
      select1: '找采购商',
      // 搜索下拉2数据
      select2: '产品名称',
      // 控制菜单一的显示
      s1show: true,
      // 控制菜单二的显示
      s2show: true,
      // 控制选项二的显示
      isShow: true,
      // 菜单一的数据
      menu1: ['找采购商', '找供应商', '贸易地图'],
      // 菜单二的数据
      menu2: ['产品名称', '公司名称', '海关编码'],
      // 下拉1选项激活显示
      current1: 0,
      // 下拉2选项激活显示
      current2: 0,
      // 输入框显示内容
      inputTextNum: 1,
      // 菜单列表数据
      menuList: [],
      // active激活
      activeIndex: 0,
      // 登陆email
      email: null
    }
  },
  mounted () {
    // 获取登陆email
    this.email = window.localStorage.getItem('email')
    this.$axios.get('homePage').then((res) => {
      console.log(res.data.menuList)
      this.menuList = res.data.menuList
    })
    this.activeIndex = 0
  },
  computed: {
    inputText () {
      if (this.inputTextNum == 1) return '输入英语/俄语/西班牙语'
      else if (this.inputTextNum == 2) return '输入4-10位HS编码'
      else if (this.inputTextNum == 3) return '请输入6位HS商品编码'
    },
    isLogin () {
      if (this.email !== null) {
        return false
      } else {
        return true
      }
    }
  },
  methods: {
    // 切换菜单事件
    changeMenu1 (item, index) {
      if (index == 2) {
        this.isShow = false
        // 选项三改变输入框提示内容
        this.inputTextNum = 3
      } else {
        this.isShow = true
        this.inputTextNum = 1
      }
      this.select1 = item
      this.current1 = index
      // 点击结束后隐藏菜单
      this.s1show = false
      // 隐藏菜单后，重置菜单
      setTimeout(() => { this.s1show = true }, 50)
    },
    changeMenu2 (item, index) {
      if (index == 2) {
        this.inputTextNum = 2
      } else {
        this.inputTextNum = 1
      }
      this.select2 = item
      this.current2 = index
      // 点击结束后隐藏菜单
      this.s2show = false
      // 隐藏菜单后，重置菜单
      setTimeout(() => { this.s2show = true }, 50)
    },
    changeIndex (index) {
      console.log(this.activeIndex)
      this.activeIndex = index
      console.log(this.activeIndex)
    },
    // 退出登陆状态
    // signOut () {
    //   window.localStorage.clear()
    //   this.email = null
    // },
    signOut () {
      this.$confirm('是否退出当前账号？', 'Warning', {
        confirmButtonText: '是',
        cancelButtonText: '否',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '成功退出！'
        })
        window.localStorage.clear()
        this.email = null
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '您已取消！'
        })
      })
    }
  }
}
</script>
<style lang="less">
    .header_bar{
        width: 100%;
        height: 154px;
        background-color: #262a2e;
        box-sizing: border-box;
        padding: 0 18%;
        margin-bottom: 20px;
        .header_bar_search{
            width: 100%;
            height: 120px;
            box-sizing: border-box;
            display: flex;
            justify-content: space-between;
            padding: 30px 0;
            min-width: 1220px;
            .text{
                color: #fe9601;
                margin-left: 20px;
                font-size: 15px;
                line-height: 25px;
            }
            .input{
                display: flex;
                width: 697px;
                input{
                width: 425px;
                height: 50px;
                text-indent: 10px;
                color: #555;
                border: none;
                font-size: 16px;
                outline: none;
                }
                input::placeholder{
                    color: #888;
                }
                .input-btn{
                    background-color: #0060a9;
                    width: 72px;
                    height: 52px;
                    color: #fff;
                    border-radius: 0 5px 5px 0;
                    text-align: center;
                    cursor: pointer;
                    i{
                        color: #fff;
                        font-size: 30px;
                        font-weight: bold;
                        line-height: 52px;
                        margin-right: 5px;
                    }
                }
                .input-btn:hover{
                    background-color: #409EFF;
                }
                .select{
                    background-color: #fff;
                    width: 100px;
                    height: 52px;
                    border-right: 1px solid #ddd;
                    text-align: center;
                    line-height: 52px;
                    color: #555;
                    font-size: 14px;
                    cursor: pointer;
                    z-index: 9999;
                    box-sizing: border-box;
                    i{
                        font-size: 18px;
                        color: #bbb;
                    }
                    .select_menu{
                        border: 1px solid #eee;
                        background-color: #fff;
                        box-sizing: border-box;
                        padding: 2px 1px;
                        transform: translateY(40%);
                        // opacity: 0;
                        visibility: hidden;
                        box-shadow: 0 0 1px #ddd;
                        div{
                            height: 40px;
                            line-height: 40px;
                            border: none;
                            box-sizing: border-box;
                        }
                        div:hover{
                            background-color: #eee;
                        }
                        div.active{
                            background: #006093;
                            color: #fff;
                        }
                    }
                }
                .select:hover i{
                    transform: rotate(180deg);
                    transition: all 0.3s linear;
                }
                .first{
                    border-radius: 5px 0 0 5px;
                }
                .first:hover .select_menu:nth-of-type(1){
                    overflow: visible;
                    transform: translateY(0%);
                    transition: all 0.2s linear;
                    visibility: visible;
                }
                .two:hover .select_menu:nth-of-type(1){
                    overflow: visible;
                    transform: translateY(0%);
                    transition: all 0.2s linear;
                    visibility: visible;
                }
                i{
                    margin-left: 2px;
                    color: #999;
                    font-size: 16px;
                    transition: all 0.3s linear;
                }
            }
            .login{
                a{
                    color:#fff;
                    text-decoration: none;
                }
                button{
                    width: 128px;
                    height: 50px;
                    line-height: 50px;
                    border: 1px solid #444;
                    border-radius: 5px;
                    background-color: #262a2e;
                    color: #fff;
                    font-size: 15px;
                    cursor: pointer;
                    margin-left: 20px;
                    outline: none;
                    i{
                        font-size: 25px;
                        vertical-align: middle;
                        margin-bottom: 5px;
                    }
                }
            }
            .loging{
                color: #ccc;
                font-size: 12px;
                .signOut{
                    width: 100px;
                    margin-top: 20px;
                    cursor: pointer;
                    border: 1px solid #ccc;
                    text-align: center;
                    border-radius: 10px;
                    transition: color 0.3s;
                }
                .signOut:hover{
                    color: red;
                }
            }
        }
        .header_bar_menu{
            color: #fff;
            font-size: 16px;
            display: flex;
            min-width: 1220px;
            a{
                margin-right: 60px;
                // color: #fe9601;
                color: #fff;
                text-decoration: none;
                cursor: pointer;
            }
            a.active{
                color: #fe9601;
            }
            a:hover{
                color: #fe9601;
            }
        }

    }
</style>
