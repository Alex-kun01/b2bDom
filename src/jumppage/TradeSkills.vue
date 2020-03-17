<template>
<!-- 外贸技巧 -->
    <div class="tradeSkills">
        <div class="con_box">
            <!-- 左侧内容 -->
            <div class="left_box">
                <!-- 顶部导航栏 -->
                <div class="search">
                    <el-select v-model="value" placeholder="全部"
                    @change="filterDatas"
                    >
                        <!-- 下拉选项 -->
                        <el-option
                        v-for="(item, index) in options"
                        :key="index"
                        :value="item.value"
                        :label="item.label"
                        >
                        </el-option>
                    </el-select>
                    <!-- 搜索框 -->
                    <div class="input">
                        <input type="text" placeholder="请输入您要查找的内容">
                        <div class="btn"><i class="el-icon-search"></i></div>
                    </div>
                    <!-- 排行菜单 -->
                    <div class="paihang">
                        <span>排序：</span>
                        <span :class="{item: true, active: index === 1}" @click="changeIndex(1)">最新</span>
                        <span :class="{item: true, active: index === 2}" @click="changeIndex(2)">最热</span>
                        <span :class="{item: true, active: index === 3}" @click="changeIndex(3)">好评</span>
                    </div>
                </div>
                <!-- 内容区域 -->
                <div class="content">
                    <div class="item"
                    v-for="(item, index) in targetDatas"
                    :key="index"
                    >
                        <div class="title">{{item.title}}</div>
                        <div class="content_box">
                            <img :src="item.img">
                            <div class="contentTxt">
                                <div class="text">{{item.text}}</div>
                                <div class="footer">
                                    <span class="left"><i class="el-icon-user"></i>优贸网</span>
                                    <div class="right">
                                        <span><i class="el-icon-time"></i>{{item.date}}</span>
                                        <span><i class="el-icon-view"></i>{{item.hottest}}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="pagef">
                        <!-- 分页 -->
                        <el-pagination
                            @size-change="handleSizeChange"
                            @current-change="handleCurrentChange"
                            :current-page="currentPage"
                            :page-sizes="[5, 10, 20, 30]"
                            :page-size="current"
                            layout="total, sizes, prev, pager, next, jumper"
                            :total="totle">
                        </el-pagination>
                    </div>
                </div>
            </div>
            <!-- 右侧广告 -->
            <div class="right_box">
                <div class="top_bar">
                    推荐阅读
                </div>
                <div class="item"
                v-for="(item, index) in floatDatas"
                :key="index"
                >
                    <img :src="item.img">
                    <div class="txt">{{item.text}}</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            value: '全部',
            options: [
                {
                    value: '1',
                    label: '成功案例'
                },
                {
                    value: '2',
                    label: '客户开发'
                },{
                    value: '3',
                    label: '询盘处理'
                }
            ],
            index: 1,
            // 当前页
            currentPage: 1,
            // 总共的条数
            totle: 28,
            // 一页显示条数
            current: 10,
            // 总页数
            pageSize: null,
            // 列表全部数据
            dataList: [],
            // 渲染数据
            targetDatas: [],
            // float数据
            floatDatas: []
        }
    },
    mounted() {
        this.getData()
    },
    methods: {
        changeIndex (index) {
            this.index = index
            if (index === 1){
                this.getData()
            } else if(index === 2){
                this.arrPaixu()
            } else if (index === 3){
                this.arrPaixuHao()
            }
        },
        // 获取数据
        getData() {
                this.$axios.get('tradesKills').then(res => {
                    // 数据赋值
                    this.dataList = res.data.dataList
                    this.floatDatas = res.data.floatDatas
                    this.totle = this.dataList.length
                    this.changePage(this.currentPage, this.current)
                    this.pageSize = Math.ceil(this.totle / this.current)
                })
        },
        // 刷新页面
        /**
         * currentPage  当前页
         * pageSize  总页数
         */
        changePage(currentPage, pageSize){
            this.targetDatas = this.dataList.slice((currentPage -1) * pageSize, currentPage * pageSize)
        },
        // 页码改变
        handleSizeChange(newSize){
            this.pageSize = newSize
            this.changePage(this.currentPage, this.pageSize)
        },
        // 当前页
        handleCurrentChange (newPage){
            this.currentPage = newPage
            this.changePage(this.currentPage, this.pageSize)
        },
        // 数组排序 最热
        arrPaixu() { // hottest
            this.targetDatas.sort((a, b) => {
                return b.hottest - a.hottest
            })
        },
        // 数组排序 好评
        arrPaixuHao(){
            this.targetDatas.sort((a, b) => {
                return b.praise - a.praise
            })
        },
        // 过滤数据
        filterDatas(){
            if (this.value == 1){
                let newArr = this.dataList.filter(item => {
                    return item.type == 1
                })
                this.targetDatas = newArr
            } else if (this.value == 2){
                let newArr = this.dataList.filter(item => {
                    return item.type == 2
                })
                this.targetDatas = newArr
            } else if (this.value == 3){
                let newArr = this.dataList.filter(item => {
                    return item.type == 3
                })
                this.targetDatas = newArr
            }else{
                this.getData()
            }
        }
    }
}
</script>
<style lang="less">
    .tradeSkills{
        width: 100%;
        .con_box{
            width: 100%;
            min-width: 1120px;
            padding: 0 18%;
            display: flex;
            .left_box{
                width: 830px;
                margin-right: 35px;
                margin-bottom: 30px;
                .search{
                    width: 830px;
                    height: 40px;
                    line-height: 40px;
                    display: flex;
                    margin-bottom: 30px;
                    .input{
                        display: flex;
                        margin-left: 20px;
                        margin-right: 20px;
                        input{
                            border: none;
                            width: 365px;
                            height: 40px;
                            text-indent: 10px;
                            border-radius: 5px 0 0 5px;
                        }
                        input::placeholder{
                            color: #ccc;
                        }
                        .btn{
                            width: 55px;
                            height: 40px;
                            line-height: 40px;
                            text-align: center;
                            color: #fff;
                            background-color: #1c93d7;
                            border-radius: 0 5px 5px 0;
                        }
                    }
                    .paihang{
                        font-size: 13px;
                        .item{
                            margin-right: 7px;
                            cursor: pointer;
                        }
                    }
                    .paihang > .active{
                        color: #1c93d7;
                    }
                }
                .content{
                    width: 830px;
                    background-color: #fff;
                    .item{
                        height: 200px;
                        min-width: 830px;
                        display: flex;
                        flex-direction: column;
                        box-sizing: border-box;
                        padding: 15px 30px;
                        border-bottom: 1px solid #ddd;
                        .title{
                            font-size: 18px;
                            font-weight: bold;
                            margin-bottom: 20px;
                        }
                        .content_box{
                            display: flex;
                            img{
                                width: 160px;
                                height: 105px;
                                margin-right: 40px;
                            }
                            .contentTxt{
                                .text{
                                    font-size: 14px;
                                    overflow: hidden;
                                    text-overflow: ellipsis;
                                    display: -webkit-box;
                                    -webkit-line-clamp: 3;
                                    -webkit-box-orient: vertical;
                                    margin-bottom: 30px;
                                }
                                .footer{
                                    font-size: 14px;
                                    span{
                                        color: #777;
                                        i{
                                            font-size: 18px;
                                            display: inline-block;
                                            margin-right: 5px;
                                        }
                                    }
                                    .right{
                                        float: right;
                                    }

                                }
                            }
                        }
                    }
                    .pagef{
                        display: flex;
                        justify-content: center;
                        margin-top: 15px;
                        padding-bottom: 15px;
                    }
                }

            }
            .right_box{
                width: 250px;
                height: 1100px;
                background-color: #fff;
                display: flex;
                flex-direction: column;
                text-align: center;
                .top_bar{
                    height: 60px;
                    line-height: 60px;
                    font-weight: bold;
                    border-top: 5px solid #1c93d7;
                    width: 250px;

                }
                .item{
                    img{
                        width: 200px;
                        height: 135px;
                    }
                    .txt{
                        padding: 15px 30px;
                        color: #666;
                        font-size: 14px;
                    }
                }
            }
        }
    }
</style>