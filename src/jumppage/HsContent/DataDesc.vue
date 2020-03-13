<template>
    <div class="dataDesc">
        <!-- 顶部区域 -->
            <div class="top">
                <div class="left">
                    <div class="img">
                        <img :src="targetdataList.src">
                        <div class="textBox">
                            <div>
                                <span class="color">{{targetdataList.country}}</span>
                                <span>{{targetdataList.time}}</span>
                            </div>

                            <div class="text_f">进口贸易数据</div>
                        </div>
                    </div>
                    <div class="text">{{targetdataList.account}}</div>
                </div>
                <div class="right">
                    <div class="gray">全球进口排名</div>
                    <div class="item ranking"><span>排名</span><span class="pankingColor">{{targetdataList.ranking}}</span></div>
                    <div class="gray">2018年总进口额</div>
                    <div class="item number">
                    <span>us $</span>
                    <span class="numberColor">{{targetdataList.quota}}</span>
                    <span>亿</span>
                </div>
            </div>
        </div>
        <!-- 中间区域 -->
        <div class="serchBox">
            <div class="serch">
                <div class="title">
                    <div class="title1">搜索{{targetdataList.country}}贸易数据</div>
                    <div class="title2">请输入公司名称（英语）进行搜索</div>
                </div>
                <div class="btn">
                    <input type="text" placeholder="请输入关键字进行搜索">
                    <i class="el-icon-search"></i>
                </div>
            </div>
        </div>
        <!-- 底部内容区域 -->
        <div class="bom">
            <div class="box_box">
                <div class="navagiter">
                    <div :class="{opints: true, active: dataShow == 1}" @click="changeIndex(1)">数据样本</div>
                    <div :class="{opints: true, active: dataShow == 2}" @click="changeIndex(2)">交易商品</div>
                    <div :class="{opints: true, active: dataShow == 3}" @click="changeIndex(3)">贸易伙伴</div>
                </div>
                <div class="bom_content">
                    <!-- 数据样本 -->
                    <div class="datas" v-show="dataShow == 1">
                        <div class="title">{{targetdataList.country}}的进口数据样本</div>
                        <table>
                            <tr v-for="(item, key, index) in targetdataList.sample" :key="index">
                                <td class="key">{{key}}</td>
                                <td class="item">{{item}}</td>
                            </tr>
                        </table>
                    </div>
                    <!-- 交易商品 -->
                    <div class="commodity" v-show="dataShow == 2">
                        <div class="title">{{targetdataList.country}}五大进口商品</div>
                        <div class="title2">
                            根据{{targetdataList.country}}进口统计数据，该国在2018年购买的Nuclear reactors, boilers, machinery and mechanical appliances最多。让我们快速查看
                            <br>
                            {{targetdataList.country}}前五大进口商品的价值份额。
                        </div>
                        <table>
                            <tr>
                                <th class="tab">HS编码</th>
                                <th class="con">产品描述</th>
                                <th class="tab">价值USD%</th>
                            </tr>
                            <tr
                            v-for="(item, index) in targetdataList.deal"
                            :key="index"
                            >
                                <td class="tab">{{item.id}}</td>
                                <td class="con">{{item.describe}}</td>
                                <td class="tab">{{item.price}}</td>
                            </tr>
                        </table>
                        <!-- echarts图表区域 -->
                        <div class="echarts">
                            <div  id="map" style="width: 400px; height: 400px;"></div>
                        </div>
                    </div>
                    <!-- 贸易伙伴 -->
                    <div class="partner" v-show="dataShow == 3">
                        <div class="title">{{targetdataList.country}}前五大进口合作伙伴</div>
                        <div class="text2">{{targetdataList.country}}贸易统计数据显示，该国2018年主要从Germany进口商品，其次是China和USA。以下是{{targetdataList.country}}五大进口来源的价值份额。</div>
                        <table>
                            <tr>
                                <th>国家</th>
                                <th>价值USD%</th>
                            </tr>
                            <tr
                            v-for="(item, key, index) in targetdataList.partner"
                            :key="index"
                            >
                                <td>{{key}}</td>
                                <td>{{item}}</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      id: null,
      // 渲染数据
      datasList: [],
      targetdataList: {},
      // 控制底部三栏数据显示
      dataShow: 1,
      // echarts图表对象
      map: null,
      option: {
        tooltip: { // 提示
          trigger: 'item', // 触发方式
          formatter: '{a} <br/>{b}: {c} ({d}%)' // 提示的格式
        },
        legend: { // 图例
          orient: 'vertical',
          x: 'left',
          data: ['Natural', 'Reactor', 'Vehicles', 'Lineral', 'Trical']
        },
        series: [
          {
            name: 'targetPage',
            type: 'pie', // 图标的类型
            radius: ['50%', '70%'], // 饼图的范围
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: false,
                position: 'center'
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: '30',
                  fontWeight: 'bold'
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [
              { value: 335, name: 'Natural' },
              { value: 310, name: 'Reactor' },
              { value: 434, name: 'Vehicles' },
              { value: 335, name: 'Lineral' },
              { value: 548, name: 'Trical' }
            ]
          }
        ]
      }
    }
  },
  mounted () {
    this.dataShow = 1
    this.id = this.$route.params.id
    this.$axios.get('countryList').then(res => {
      this.datasList = res.data.importdata
      const newDatas = this.datasList.filter(item => item.id == this.id)
      // 拿到相关数据
      this.targetdataList = newDatas[0]
    })
    // echarts图表
    this.map = this.$echarts.init(document.getElementById('map'))
    this.map.setOption(this.option)
  },
  methods: {
    changeIndex (index) {
      console.log(index)
      this.dataShow = index
    }
  }
}
</script>
<style lang="less">
    .dataDesc{
        width: 100%;
        background: #fff;
        .top{
            display: flex;
            justify-content: space-between;
            box-sizing: border-box;
            padding: 60px 18% 0 18%;
            margin-top: -20px;
            margin-bottom: 60px;
            .left{
                display: flex;
                flex-direction: column;
                margin-right: 44px;
                .img{
                    width: 880px;
                    height: 200px;
                    background-color: #f5faff;
                    border-radius: 100px;
                    display: flex;
                    border: 1px solid #ddd;
                    margin-bottom: 20px;
                    .textBox{
                        margin-top: 25px;
                        span{
                            font-size: 20px;
                        }
                        .color{
                            font-size: 48px;
                            font-weight: bold;
                            color: #FA8201;
                            margin-right: 30px;
                        }
                    }
                    .text_f{
                        font-size: 48px;
                        font-weight: bold;
                        margin-top: 10px;
                    }
                    img{
                        margin-right:60px;
                    }
                }
                .text{
                    width: 880px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 3;
                    -webkit-box-orient: vertical;
                    line-height: 30px;
                    text-indent: 40px;
                }
            }
            .right{
                .gray{
                    width: 279px;
                    height: 46px;
                    background-color: #eee;
                    border: solid #e5e5e5 1px;
                    line-height: 46px;
                    text-align: center;
                }
                .item{
                    width: 279px;
                    height: 101px;
                    border: solid #e5e5e5 1px;
                    text-align: center;
                    line-height: 101px;
                }
                .ranking{
                    font-size: 24px;
                    font-weight: bold;
                    .pankingColor{
                        font-size: 48px;
                        color: #0a9539;
                        margin: 0 6px;
                    }
                }
                .number{
                    font-size: 25px;
                    font-weight: bold;
                    .numberColor{
                        font-size: 45px;
                        color: #fa8201;
                    }
                }
            }
        }
        .serchBox{
            width: 100%;
            height: 300px;
            background: url(https://www.b2b3.com/statics/images/dataDescription/searchbg.jpg);
            display: flex;
            justify-content: center;
            .serch{
                display: flex;
                flex-direction: column;
                justify-content: center;
                text-align: center;
                .title{
                    color: #fff;
                    .title1{
                        font-size: 35px;
                        margin-bottom: 15px;
                    }
                    .title2{
                        margin-bottom: 35px;
                    }
                }
                .btn{
                    width: 832px;
                    height: 50px;
                    border: solid #1c93d7 8px;
                    display: flex;
                    input{
                        height: 44px;
                        width: 90%;
                        text-indent: 20px;
                    }
                    .el-icon-search{
                        height: 50px;
                        width: 10%;
                        line-height: 50px;
                        font-size: 25px;
                        cursor: pointer;
                        color: #fff;
                        display: block;
                        background-color: #fa8201;
                    }
                    .el-icon-search:hover{
                        background-color: #fa826f;
                    }
                }
            }
        }
        .bom{
            min-width: 1200px;
            padding: 50px 0 80px;
            background: url(https://www.b2b3.com/statics/images/dataDescription/databg.jpg);
            .box_box{
                box-sizing: border-box;
                padding: 0 18%;
                .navagiter{
                    min-width: 1220px;
                    border-bottom: 5px solid #0a9539;
                    display: flex;
                    .opints{
                        width: 218px;
                        height: 42px;
                        line-height: 42px;
                        text-align: center;
                        font-size: 18px;
                        margin-right: 20px;
                        border-radius: 10px 10px 0 0;
                        background-color: #dfdedd;
                        cursor: pointer;
                        transition: background-color 0.3s;
                    }
                    .opints:hover, .opints.active{
                        background-color: #0a9539;
                        color: #fff;
                        font-weight: bold;
                    }
                }
                .bom_content{
                    width: 100%;
                    min-width: 1220px;
                    background-color: #fff;
                    .title{
                        text-align: center;
                        font-size: 48px;
                        font-weight: bold;
                        margin-bottom: 50px;
                    }
                    .datas{
                        box-sizing: border-box;
                        padding: 50px 4%;
                        table{
                            border-collapse:collapse;
                            display: flex;
                            flex-wrap: wrap;
                            font-size: 14px;

                        }
                        .key{
                            width: 170px;
                            height: 37px;
                            background-color: #f5faff;
                            border: solid #ddd 1px;
                            line-height: 20px;
                            padding: 8px 0;
                            text-align: right;
                            box-sizing: border-box;
                            padding-right: 5px;
                            font-weight: bold;
                        }
                        .item{
                            width: 390px;
                            border: solid #ddd 1px;
                            line-height: 20px;
                            padding: 8px 0;
                            box-sizing: border-box;
                            padding-left: 5px;
                        }
                    }
                    .commodity{
                        box-sizing: border-box;
                        padding: 0 4%;
                        padding-top: 50px;
                        table{
                            border-collapse: collapse;
                            text-align: center;
                            min-width: 1120px;
                            th{
                                background-color: #e6f4fa;
                            }
                            td{
                                font-size: 14px;
                            }
                        }
                        .echarts{
                            width: 100%;
                            height: 380px;
                            margin: 50px 0;
                            background: url(https://www.b2b3.com/statics/images/dataDescription/dataMap.jpg);
                            display: flex;
                            justify-content: center;
                        }
                        .title2{
                            text-align: center;
                            margin-bottom: 50px;
                            font-size: 20px;
                        }
                        .tab{
                            width: 10%;
                            height: 49px;
                            border: 1px solid #ddd;
                        }
                        .con{
                            width: 80%;
                            height: 49px;
                            border: 1px solid #ddd;
                        }

                    }
                    .partner{
                        box-sizing: border-box;
                        padding: 50px 4%;
                        margin-bottom: 50px;
                        .text2{
                            font-size: 20px;
                            margin-bottom: 50px;
                        }
                        table{
                            border-collapse: collapse;
                            th{
                                background-color: #e6f4fa;
                            }
                            th,td{
                                width: 532px;
                                height: 50px;
                                border: 1px solid #ddd;
                                text-align: center;
                            }
                        }
                    }
                }
            }
        }
    }
</style>
