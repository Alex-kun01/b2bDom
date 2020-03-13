<template>
    <div class="allContent">
        <div class="content_box">
            <div class="title_box">
            <h1>全球海关统计数据</h1>
            <div class="title1">统计数据包含关于各国贸易活动的重要商业情报信息，这些信息对初级研究十分有用。</div>
            <div class="title2">包括装运日期、HS代码、HS代码描述、数量、价值、来源国和目的地国、装货港和启程港等。</div>
        </div>
        <div class="cardBox">
            <div class="card"
            v-for="(item, index) in allDatas"
            :key="index"
            >
                <img :src="item.img">
                <div class="text">{{item.text}}</div>
            </div>
        </div>
        </div>
        <div class="footerBox">
            <div class="title">基于全球各国贸易统计数据的市场分析频道</div>
            <div class="title1">Global Market</div>
            <div class="btnBox">
                <div class="btn">查看详情</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      allDatas: []
    }
  },
  mounted () {
    this.$axios.get('allCudesc').then(res => {
      this.allDatas = res.data.data
    })
  }
}
</script>
<style lang="less">
    .allContent{
        width: 100%;
        background: #fff;
        margin-top: -20px;
        .content_box{
            box-sizing: border-box;
        padding: 50px 18%;
            .title_box{
            text-align: center;
        }
        .cardBox{
            min-width: 1220px;
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            margin-top: 80px;
            .card{
                width: 373px;
                height: 281px;
                box-sizing: border-box;
                text-align: center;
                .text{
                    font-size: 24px;
                    margin-top: 20px;
                }
            }
        }
        }
        .footerBox{
            width: 100%;
            height: 400px;
            background: url(https://www.b2b3.com/statics/images/dataDescription/datafoot.jpg);
            text-align: center;
            box-sizing: border-box;
            padding-top: 100px;
            .title{
                font-size: 35px;
                font-weight: bold;
                margin-bottom: 30px;
            }
            .title1{
                font-size: 35px;
                font-weight: bold;
                margin-bottom: 30px;
            }
            .btnBox{
                display: flex;
                justify-content: center;
                .btn{
                    width: 230px;
                    height: 50px;
                    background-color: #1c93d7;
                    color: #fff;
                    font-size: 23px;
                    line-height: 50px;
                    border-radius: 25px;
                }
            }
        }
    }
</style>
