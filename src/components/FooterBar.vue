<template>
    <div class="footer_bar">
       <div class="contentBox">
            <div class="footer_content">
                <div class="logo">
                    <el-select v-model="value1">
                        <el-option v-for="(item, index) in options" :key="index"
                        :value="item.value"
                        >
                            <img :src="item.img">
                            <span>{{item.value}}</span>
                        </el-option>
                    </el-select>
                    <!-- <el-select v-model="value" placeholder="请选择">
                        <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select> -->
                    <img src="https://www.b2b3.com/statics/images/tradeSearch/foot_logo.png">
                </div>
                <div class="menu">
                    <div class="web">
                        <h4>产品和服务</h4>
                        <div class="chanpin_menu">
                            <p>方案价格</p>
                            <p>搜邮神器</p>
                            <p>邮箱检测</p>
                        </div>
                    </div>
                    <div class="web">
                        <h4>关于优贸网</h4>
                        <div class="chanpin_menu">
                            <p>关于我们</p>
                            <p>联系我们</p>
                            <p>用户协议</p>
                            <p>加盟合作</p>
                        </div>
                    </div>
                </div>
                <div class="phone">
                    <div class="title">客服电话（周一至周五）：</div>
                    <div class="number">400-600-9632 0769-22990227</div>
                    <div class="dizhi">地址：东莞市南城街道三元路4号保利都汇大厦1栋1单元716-718室</div>
                    <div class="qq">
                        <p><img src="https://www.b2b3.com/statics/images/tradeSearch/qq.png"><span>在线咨询</span></p>
                        <p><img src="https://www.b2b3.com/statics/images/tradeSearch/wechat.png"><span>登录关注获取更多权限</span></p>
                    </div>
                </div>
        </div>
        <div class="footer_text">
            <div class="top">
                <p>© 2018-2020 B2B3.COM 优贸网版权所有</p>
                <p>粤ICP备19012511号</p>
                <p>本站由阿里云提供计算和安全服务</p>
            </div>
            <div class="bom">
                <p>全球海关进出口数据购买平台</p>
                <p>供应商出口数据查询平台</p>
                <p>全球采购商进口数据查询平台</p>
                <p>外贸精准营销平台</p>
            </div>
        </div>
       </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
        options:[{
            value: '中文（简体',
            img: 'https://www.b2b3.com/statics/images/countryFlag/China.png'
        },
        {
            value: 'English',
            img: 'https://www.b2b3.com/statics/images/countryFlag/United.png'
        }],
        value1: ''
    }
  }
}
</script>
<style lang="less">
    .footer_bar{
        width: 100%;
        height: 270px;
        .contentBox{
            width: 100%;
            min-width: 1220px;
            background-color: #333333;
            .footer_content{
            width: 1220px;
            height: 140px;
            background-color: #333333;
            color: #999999;
            padding: 50px 18%;
            min-width: 1220px;
            justify-content: space-between;
            display: flex;
            .logo{
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                .el-select-dropdown__item{
                    margin-bottom: 5px;
                    img{
                        vertical-align: middle;
                    }
                }
            }
            .menu{
                width:560px;
                display: flex;
                justify-content: space-between;
                border-left: 1px solid #555;
                border-right: 1px solid #555;
                box-sizing: border-box;
                padding: 0 50px;
                .web{
                    h4{
                        color: #CCCCCC;
                    }
                    p{
                        text-align: center;
                        height: 15px;
                        font-size: 14px;
                        cursor: pointer;
                    }
                    p:hover{
                        color: #CCCCCC;
                    }
                }
            }
            .phone{
                
                .title{
                    color: #CCCCCC;
                    font-size: 14px;
                }
                .number{
                    color: #CCCCCC;
                }
                .dizhi{
                    font-size: 14px;
                    width: 230px;
                }
                .qq{
                    display: flex;
                    justify-content: space-between;
                    p{
                        margin-right: 10px;
                        img{
                            vertical-align: middle;
                        }
                    }
                }
            }
        }
        .footer_text{
            width: 100%;
            height: 76px;
            background-color: #080A0C;
            min-width: 1220px;
            box-sizing: border-box;
            padding: 0 18%;
        }
        .footer_text{
            color: #999999;
            font-size: 13px;
            text-align: center;
            .top{
                height: 25px;
                display: flex;
                justify-content: center;
                p{
                    margin-right: 20px;
                }
            }
            .bom{
                height: 25px;
                display: flex;
                justify-content: center;
                p{
                    margin-right: 20px;
                }
            }
        }
        }
    }
</style>
