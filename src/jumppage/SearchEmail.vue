<template>
<!-- AI搜邮 -->
    <div class="searchEmail">
        <!-- 固定位置 -->
        <div class="static">
            <div class="click_box">
                <div :class="{btn: true, active: isShow == 1}" @click="changeIndex(1)">
                    <router-link :to="{path: '/index/searchemail/all'}">AI全网搜邮</router-link>
                </div>
                <div :class="{btn: true, active: isShow == 2}" @click="changeIndex(2)">
                    <router-link :to="{path: '/index/searchemail/commnoly'}">普通搜邮</router-link>
                </div>
                <div :class="{btn: true, active: isShow == 3}" @click="changeIndex(3)">
                    <router-link :to="{path: '/index/searchemail/test'}">邮箱检测</router-link>
                </div>
            </div>
            <div class="input_box">
                <input type="text" placeholder="请输入公司名称/产品关键词/网址">
                <div class="btn">搜索</div>
                <div class="text">搜索记录</div>
            </div>
        </div>
        <router-view />
    </div>
</template>
<script>
export default {
    data (){
        return {
            isShow: 1
        }
    },
    mounted() {
        this.isShow = 1
    },
    methods: {
        changeIndex(index){
            this.isShow = index
        }
    }
}
</script>
<style lang="less">
    .searchEmail{
        width: 100%;
        background: #fff;
        .static{
            padding: 50px 20%;
            .click_box{
                display: flex;
                min-width: 1120px;
                a{
                    text-decoration: none;
                    color: #000;
                }
                .btn{
                    width: 150px;
                    height: 50px;
                    line-height: 50px;
                    text-align: center;
                    margin-right: 60px;
                    background-color: #eee;
                    box-shadow: 0 0 0 1px #ccc;
                    box-sizing: border-box;
                    cursor: pointer;
                }
                .btn.active{
                    background-color: #1c93d7;
                    color: #fff;
                    box-shadow: none;
                }
                .active a{
                    color: #fff;
                }
            }
            .input_box{
                width: 100%;
                min-width: 1120px;
                height: 46px;
                display: flex;
                border: 2px solid #1c93d7;
                box-sizing: border-box;
                input{
                    width: 854px;
                    text-indent: 10px;
                }
                .btn{
                    width: 94px;
                    background-color: #1c93d7;
                    line-height: 46px;
                    text-align: center;
                    font-size: 18px;
                    color: #fff;
                    cursor: pointer;
                }
                .text{
                    font-size: 16px;
                    line-height: 46px;
                    color: #666;
                    margin-left: 30px;
                }
            }
        }
    }
</style>