<template>
    <div class="seach_box">
        <div class="seach_title">
            <h1>如何为您服务</h1>
            <p>免费使用</p>
        </div>
        <div class="search">
            <img src="https://www.b2b3.com/statics/images/newhome/searchForm.png">
            <el-input v-model="input" placeholder="输入你的公司名称，查看您自己的贸易报告"></el-input>
            <div class="btn" @click="inputSub">
                <i class="el-icon-search"></i>
            </div>
        </div>
        <div class="icon">
            <div class="icon_item">
                <img src="https://www.b2b3.com/statics/images/newhome/search_icon_01.png">
                <p>搜索产品</p>
            </div>
            <div class="icon_item">
                <img src="https://www.b2b3.com/statics/images/newhome/search_icon_02.png">
                <p>研究公司</p>
            </div>
            <div class="icon_item">
                <img src="https://www.b2b3.com/statics/images/newhome/search_icon_03.png">
                <p>查看报告</p>
            </div>
            <div class="icon_item">
                <img src="https://www.b2b3.com/statics/images/newhome/search_icon_04.png">
                <p>发送询价</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      input: ''
    }
  },
  methods: {
    inputSub () {
      console.log(this.input)
    }
  }
}
</script>
<style lang="less">
    .seach_box{
        width: 100%;
        min-width: 1220px;
        height: 530px;
        background: url(https://www.b2b3.com/statics/images/newhome/home_search_bg.jpg) 100% no-repeat;
        box-sizing: border-box;
        padding: 50px 80px;
        margin-bottom: 80px;
        .seach_title{
            display: flex;
            justify-content: center;
            margin-bottom: 40px;
            h1{
                color: #fff;
                font-size: 35px;
            }
            p{
                height: 40px;
                color: #00FFFF;
                font-size: 20px;
                font-weight: bold;
                border: 3px solid #00FFFF;
                padding: 5px 10px;
                line-height: 20px;
                box-sizing: border-box;
                border-radius: 20px;
                margin-top: 30px;
                margin-left: 30px;
            }
        }
        .search{
            display: flex;
            justify-content: center;
            margin-bottom: 80px;
            img{
                width: 49px;
                height: 49px;
                animation: que 5s linear infinite;
            }
            @keyframes que {
                0% {
                    transform: rotate(0deg);
                }
                100%{
                    transform: rotate(360deg);
                }
            }
            .el-input{
                width: 600px;
                height: 50px;
                margin-left: 15px;
                .el-input__inner{
                    height: 100%;
                    border-radius: 5px 0 0 5px;
                }
            }
            .btn{
                height: 50px;
                width: 80px;
                background-color: #1c93d7;
                border-radius: 0 5px 5px 0;
                color: #fff;
                font-size: 28px;
                text-align: center;
                line-height: 50px;
                cursor: pointer;
                transition: all 0.2s;
            }
            .btn:hover{
                background-color: rgb(64, 156, 231);
            }
        }
        .icon{
            display: flex;
            justify-content: space-between;
            img{
                width: 128px;
                height: 128px;
            }
            img:hover{

            }
            .icon_item{
                color: #fff;
                font-size: 25px;
                text-align: center;
                transition: all 0.5s;
                cursor: pointer;
            }
            .icon_item:hover{
                transform: translateY(-8%);
                transition: all 0.5s;
            }
        }
    }
</style>
