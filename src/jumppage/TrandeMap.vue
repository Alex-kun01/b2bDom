<template>
<!-- 贸易地图 -->
    <div class="trandeMap">
        <div class="title_bar">
            <img src="https://www.b2b3.com/statics/images/tradeMap/trade_map.png">
            <div class="title">全球200多个国家和地区的情报数据如果不知道产品的HS编码，<a href="#">请点这里查找！</a></div>
            <div class="title_serch">
                <el-select
                class="left_s"
                v-model="select1" placeholder="进口数据">
                    <el-option
                        v-for="item in options1"
                        :key="item.label"
                        :label="item.label"
                        :value="item.value"
                    ></el-option>
                </el-select>
                <!-- 日期选择 -->
                 <el-date-picker
                    v-model="date"
                    type="monthrange"
                    range-separator="至"
                    start-placeholder="开始月份"
                    end-placeholder="结束月份">
                </el-date-picker>
                <!-- 输入框 -->
                <el-input placeholder="请输入6位HS商品编码"></el-input>
                <!-- 搜索框 -->
                <el-button type="primary">立即搜索</el-button>
            </div>
        </div>
        <!-- 世界地图 -->
            <div class="allMap">
                <div class="title">
                    <h1>中国-全球商品贸易概况</h1>
                    <div class="datas">
                        <div>2018年中国在世界的贸易概况:</div>
                        <div class="item">出口:<span>24.942亿美元</span></div>
                        <div class="item">进口:<span>21.357亿美元</span></div>
                        <div class="item">贸易平衡:<span>3.595亿美元</span></div>
                        <div class="item">双边贸易:<span>46.292亿美元</span></div>
                    </div>
                    <div class="map" id="map"></div>
                </div>
            </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            select1: '',
            options1: [{
                        label: '进口数据',
                        value: '1'
                        },
                        {
                        label: '出口数据',
                        value: '2'
                        },
                    ],
                    date: ''
        }
    }
}
</script>
<style lang="less">
    .trandeMap{
        width: 100%;
        .title_bar{
            padding: 30px 18%;
            text-align: center;
            height: 300px;
                background-color: #fff;
            img{
                margin-bottom: 10px;
            }
            .title{
                font-size: 18px;
                color: #555;
                margin-bottom: 20px;
                a{
                    color: #00a0e9;
                    font-size: 13px;
                    text-decoration: none;
                }
            }
            .title_serch{
                display: flex;
                justify-content: center;
                width: 920px;
                .el-input__inner{
                    height: 50px;
                }
                .left_s{
                    .el-input__inner{
                        width: 145px;
                        background-color: #ddd;
                        border-radius: 25px 0 0 25px;
                        text-align: right;
                     }
                }
                .el-date-editor{
                    width: 410px;
                    .el-range-separator{
                        line-height: 40px;
                        color: #ccc;
                    }
                }
                .el-button {
                    width: 127px;
                    border-radius: 0 25px 25px 0;
                }
            }
        }
        // 世界地图
        .allMap{
            padding: 50px 18%;
            text-align: center;
            .title{
                
                .datas{
                    width: 100%;
                    height: 50px;
                    line-height: 50px;
                    background-color: #fff;
                    display: flex;
                    div{
                        margin-right: 20px;
                        font-weight: bold;
                    }
                    .item{
                        font-size: 14px;
                        span{
                            font-weight: 300;
                            margin-left: 5px;
                        }
                    }
                }
                .map{
                    width: 100%;
                    height: 1200px;
                    background: #fff;
                }
            }
        }
    }
</style>