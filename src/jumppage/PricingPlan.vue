<template>
<!-- 方案价格 -->
    <div class="pricingPlan">
        <!-- 顶部区域 -->
        <div class="header_box">
            <div :class="{item: true, active: index === 2}"
            v-for="(item, index) in priceDatas.header"
            :key="index"
            >
                <div class="title">{{item.title}}</div>
                <div class="price">{{item.price}}</div>
                <div class="morethen">详情 -></div>
                <div class="number">{{item.number}}</div>
            </div>
        </div>
        <!-- 静态卡片区域 -->
        <div class="static_card">
            <div class="card_box">
                <div class="item"
                v-for="(item, index) in priceDatas.card"
                :key="index"
                >
                    <div class="title">
                        <div class="pic pq">Q</div>
                        <span>{{item.title}}</span>
                    </div>
                    <div class="text">
                        <div class="pic pa">A</div>
                        <span>{{item.text}}</span>
                    </div>
                </div>
            </div>
        </div>
        <!-- 动态卡片区域 -->
        <div class="move_card">
            <div class="card_box">
                <div class="item"
                v-for="(item, index) in priceDatas.moveCard"
                :key="index"
                >
                    <div class="item_box">
                        <img :src="item.img">
                        <div class="title">{{item.tiele}}</div>
                        <div class="text">{{item.text}}</div>
                        <div class="time">
                            <span class="color">优贸网</span>
                            <span class="tiem_color">{{item.time}}</span>
                        </div>
                    </div>
                    <div class="float"></div>
                </div>
            </div>
        </div>
        <!-- 查看更多 -->
        <div class="btn_more">
            <el-button type="primary">查看更多</el-button>
        </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      priceDatas: {
        header: [],
        card: [],
        moveCard: []
      }
    }
  },
  mounted () {
    this.$axios.get('pricePlan').then(res => {
      this.priceDatas = res.data
      console.log('res', res.data)
      console.log(this.priceDatas)
    })
  }
}
</script>
<style lang="less">
    .pricingPlan{
        min-width: 1120px;
        width: 100%;
        .header_box{
          width: 100%;
          height: 290px;
          background-color: #fff;
          margin-top: -20px;
          display: flex;
          justify-content: center;
          .item{
              width: 265px;
              height: 165px;
              border: 1px solid #ddd;
              margin-top: 60px;
              text-align: center;
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              box-sizing: border-box;
              padding: 25px 0;
              .title{
                  font-size: 20px;
                  font-weight: bold;
              }
              .morethen{
                  width: 100px;
                  height: 30px;
                  background-color: #fe9601;
                  color: #fff;
                  font-size: 14px;
                  line-height: 30px;
                  border-radius: 5px;
                  margin-left: 80px;
              }
              .number{
                  font-size: 13px;
                  color: #666;
              }
          }
          .item.active{
              background-color: #0567a4;
              color: #fff;
              position: relative;
          }
          .item.active::after{
              content: "";
              display: block;
              height: 15px;
              width: 263px;
              background-color: #0567a4;
              position: absolute;
              left: 0;
              top: -15px;
              border-radius: 10px 10px 0 0;
          }
        }
        .static_card{
            width: 100%;
            box-sizing: border-box;
            padding: 0 18%;
            margin-top: 50px;
            .card_box{
                display: flex;
                min-width: 1220px;
                justify-content: space-around;
                flex-wrap: wrap;
                .item{
                    width: 360px;
                    height: 144px;
                    box-sizing: border-box;
                    padding: 20px 20px;
                    margin: 15px 15px;
                    background-color: #fff;
                    .pic{
                        width: 22px;
                        height: 22px;
                        line-height: 22px;
                        text-align: center;
                        border-radius: 50%;
                    }
                    .pq{
                        border: 1px solid #13d4b2;
                        color: #13d4b2;
                    }
                    .pa{
                        display: block;
                        width: 52px;
                        height: 22px;
                        border: 1px solid #ff791f;
                        color: #ff791f;
                    }
                    .title{
                        display: flex;
                        margin-bottom: 20px;
                    }
                    .text{
                        display: flex;
                        span{
                            font-size: 14px;
                            color: #666;
                        }
                    }
                }
            }
        }
        .move_card{
            width: 100%;
            box-sizing: border-box;
            padding: 0 15%;
            background-color: #fff;
            margin-top: 50px;
            .card_box{
                display: flex;
                flex-wrap: wrap;
                min-width: 1320px;
                justify-content: space-between;
                .item{
                    width: 360px;
                    height: 376px;
                    background-color: #f0f0f0;
                    margin: 30px;
                    box-sizing: border-box;
                    padding: 15px;
                    cursor: pointer;
                    position: relative;
                    border-radius: 10px;
                    .item_box{
                        position: absolute;
                        z-index: 99;
                        img{
                            width: 330px;
                            height: 220px;
                            margin-bottom: 10px;
                        }
                        .title{
                            width: 330px;
                            font-size: 14px;
                            font-weight: bold;
                            white-space: nowrap;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            margin-bottom: 15px;
                        }
                        .text{
                            width: 330px;
                            font-size: 14px;
                            color: #555;
                            overflow: hidden;
                            display: -webkit-box;
                            -webkit-line-clamp: 2;
                            -webkit-box-orient: vertical;
                            margin-bottom: 15px;
                        }
                        .time{
                            font-size: 14px;
                            display: flex;
                            justify-content: space-between;
                            .color{
                                color: #f63;
                            }
                            .tiem_color{
                                color: #888;
                            }
                        }
                    }
                    .float{
                        width: 360px;
                        height: 0;
                        background-color: #fe9601;
                        position: absolute;
                        top: 50%;
                        transform: translateY(-50%);
                        left: 0;
                        transition: height 0.3s;
                        z-index: 1;
                    }
                }
                .item:hover > .float{
                    height: 376px;
                }
                .item:hover .item_box,
                .item:hover .time .tiem_color,
                .item:hover .time .color,
                .item:hover .text
                {
                    color: #fff;
                }
            }
        }
        .btn_more{
            display: flex;
            justify-content: center;
            margin: 50px 0;
            .el-button{
                width: 250px;
            }
        }
    }
</style>
