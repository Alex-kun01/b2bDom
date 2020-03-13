<template>
    <div class="floatPage">
        <div class="item">
            <p class="p1"></p>
            <div class="footer">QQ咨询</div>
            <div class="show1">
                嘿嘿嘿
            </div>
        </div>
        <div class="item ">
            <p class="p2"></p>
            <div class="footer">QQ咨询</div>
            <div class="show2">
                <img src="https://www.b2b3.com/statics/images/common/telIcon.png">
                <span>400-600-9632</span>
            </div>
        </div>
        <div class="item">
            <p class="p3"></p>
            <div class="footer">QQ咨询</div>
            <div class="show3">
                <img src="https://www.b2b3.com/statics/images/tradeSearch/weixin.png">
                <div class="text">先登陆再关注</div>
                <div class="text">获取更多权限</div>
            </div>
        </div>
        <div class="item">
            <p  class="p4"></p>
            <div class="footer">QQ咨询</div>
        </div>
        <div class="item backTop">
            <a href="#"><p  class="p5"></p></a>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style lang="less">
    .floatPage{
        display: flex;
        flex-direction: column;
        position: fixed;
        top: 30%;
        right: 0;
        z-index: 999999;
        .item{
            width: 90px;
            height: 90px;
            margin-bottom: 1px;
            position: relative;
            cursor: pointer;
            .show1{
                position: absolute;
                width: 130px;
                height: 350px;
                background-color: pink;
                top: 15px;
                left: -140px;
                display: none;
            }
            .show2{
                position: absolute;
                width: 250px;
                height: 90px;
                line-height: 90px;
                border: 1px solid #ddd;
                text-align: center;
                background-color: #fff;
                top: 15px;
                left: -260px;
                display: none;
                span{
                    font-size: 25px;
                }
            }
            .show3{
                width: 250px;
                height: 250px;
                text-align: center;
                background-color: #fff;
                position: absolute;
                left: -260px;
                top: 15px;
                display: none;
            }
            .footer{
                font-size: 14px;
                color: #fff;
                position: absolute;
                bottom: -5px;
                left: 20px;
            }
            p{
                width: 90px;
                height: 90px;
                background: url(https://www.b2b3.com/statics/images/common/rightIcon.png) #1c93d7;
            }
            p:hover {
                background-color: #1c93ff;
            }
            .p1{
                background-position: 10px 10px;
            }
            .p2{
                background-position: 10px -60px;
            }
            .p3{
                background-position: 10px -130px;
            }
            .p4{
                background-position: 10px -200px;
            }
            .p5{
                background-position: 10px -270px;
                background-color: gray;
            }
            .p5:hover{
                background-color: black;
            }
        }
        .item:hover > .show1,.item:hover > .show2 ,.item:hover > .show3{
            display: block;
        }
    }
</style>
