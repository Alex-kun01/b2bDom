<template>
<!-- 海关数据 -->
    <div class="customsData">
        <form class="form">
            <div class="form_lfet">
                <!-- 下拉框 -->
                <div class="selectBox">
                    <div>
                        <label for="typeSelect">搜索类型</label>
                        <el-select id="typeSelect" v-model="formSubData.typeValue">
                        <el-option 
                        v-for="item in typeSelectData"
                        :key="item"
                        :value="item">{{item}}</el-option>
                    </el-select>
                    </div>

                    <!-- 数据国家 -->
                    <div>
                        <label for="countrySelect">数据国家</label>
                     <el-select id="countrySelect" v-model="formSubData.countryValue">
                        <el-option 
                        v-for="item in countrySelectData"
                        :key="item"
                        :value="item">{{item}}</el-option>
                    </el-select>
                    </div>
                </div>
                <div class="inputBox">
                    <label class="one" for="chanping">产品名称<br> 或HS代码</label>
                    <el-input v-model="formSubData.input1"  id="chanping" placeholder="例如，led照明或940540"></el-input>
                </div>
                <div class="inputBox">
                    <label for="buyer">买家名称</label>
                    <el-input  v-model="formSubData.input2" id="buyer" placeholder="例如，欧扎卡"></el-input>
                </div>
                
                <div class="inputBox">
                    <label for="seller">卖方名称</label>
                    <el-input v-model="formSubData.input3" id="seller" placeholder="例如，胜利照明"></el-input>
                </div>
            </div>
            <div class="form_right">
                <!-- 单选框 -->
                <div class="checkBox">
                    <div class="checBox_box" @click="changeShow(1)">
                        <p></p>
                        <span>过滤空白进口商</span>
                        <img v-show="formSubData.show1" src="https://www.b2b3.com/statics/images/tradeSearch/checked.png">
                    </div>
                    <div class="checBox_box" @click="changeShow(2)">
                        <p></p>
                        <span>过滤物流公司</span>
                        <img v-show="formSubData.show2" src="https://www.b2b3.com/statics/images/tradeSearch/checked.png">
                    </div>
                </div>
                <div class="space">
                    <div>
                        <label for="space1">装运港</label>
                        <el-input v-model="formSubData.input4" id="space1" placeholder="例如，赤湾"></el-input>
                    </div>
                   <div>
                        <label for="space2">目的地</label>
                        <el-input v-model="formSubData.input5" id="space2" placeholder="例如，宁波"></el-input>
                   </div>
                </div>
                <div class="spaceBox">
                    <label for="space3">买家地址</label>
                    <el-input v-model="formSubData.input6" id="space3" placeholder="例如，纽约"></el-input>
                </div>
                <div class="spaceBox">
                    <label for="space4">卖家地址</label>
                    <el-input v-model="formSubData.input7" id="space4" placeholder="例如，深圳"></el-input>
                </div>
            </div>
        </form>
        <div class="btnBox">
                <el-button @click="formSubmit" type="primary" >搜索</el-button>
                <span @click="clearFormData">Clear</span>
        </div>
    <!-- 数据类型导航BOX -->
        <div class="dataypeBox">
            <!-- 路由导航框 -->
            <div class="datatype">
                <div class="type_item">数据类型：</div>
                <router-link :to="{path: '/index/customsdata/jin'}" >
                    <div class="type_item" @click="changeType(1)">
                        <div class="rode"><p  v-show="isShow === 1"></p></div>
                        <span :class="{active: isShow === 1}">海关进口数据</span>
                    </div>
                </router-link>
                <router-link :to="{path: '/index/customsdata/chu'}" >
                    <div class="type_item" @click="changeType(2)">
                        <div class="rode"><p v-show="isShow === 2"></p></div>
                        <span :class="{active: isShow === 2}">海关出口数据</span>
                    </div>
                </router-link>
                <router-link :to="{path: '/index/customsdata/all'}" >
                    <div class="type_item" @click="changeType(3)">
                        <div class="rode"><p v-show="isShow === 3" ></p></div>
                        <span :class="{active: isShow === 3}">全球海关统计数据</span>
                    </div>
                </router-link>
                
            </div>
        </div>
        <!-- 路由切换框 -->
        <router-view />
    </div>
</template>
<script>
export default {
    data () {
        return {
            typeSelectData: ['供应商'],
            countrySelectData: ['中国', '美国', '日本', '韩国'],
            formSubData: {
                typeValue: '',
                countryValue: '',
                input1: '',
                input2: '',
                input3: '',
                input4: '',
                input5: '',
                input6: '',
                input7: '',
                show1: false,
                show2: true,
            },
            radio: '',
            // 数据类型显示
            isShow: 1
        }
    },
    methods: {
        changeShow(index) {
            if(index === 1) this.formSubData.show1 = !this.formSubData.show1
            else this.formSubData.show2 = !this.formSubData.show2
        },
        // 表单数据提交
        formSubmit(){
            console.log(this.formSubData)
        },
        //清空表单数据
        clearFormData() {
            this.formSubData = {
                typeValue: '',
                countryValue: '',
                input1: '',
                input2: '',
                input3: '',
                input4: '',
                input5: '',
                input6: '',
                input7: '',
                show1: false,
                show2: true,
            }
        },
        // 改变数据类型
        changeType(index){
            this.isShow = index
        }
    }
}
</script>
<style lang="less">
    .customsData{
        width: 100%;
        background-color: #f2f2f2;
        margin-top: 30px;
        .form{
            width: 100%;
            box-sizing: border-box;
            min-width: 1220px;
            padding: 0 10%;
            display: flex;
            justify-content: center;
            label{
                width: 80px;
                height: 35px;
                line-height: 35px;
            }
            .one{
                line-height: 18px;
            }
            .el-input,.el-select,.el-input__inner{
                height: 35px;
            }
            label,span{
                font-size: 14px;
                color: #333333;
            }
            .form_lfet{
                width: 570px;
                min-width: 570px;
                margin-right: 55px;
                .selectBox{
                    width: 100%;
                    display: flex;
                    justify-content: space-between;
                    box-sizing: border-box;
                    padding: 0 0 0 5px;
                    .el-select{
                        margin-bottom: 25px;
                        width: 200px;
                        margin-left: 5px;
                    }
                }
                .inputBox{
                    display: flex;
                    justify-content: flex-start;
                    .el-input{
                        margin-bottom: 25px;
                    }
                }
            }
            .form_right{
                width: 570px;
                min-width: 570px;
                label{
                width: 80px;
                height: 35px;
                line-height: 35px;
            }
                .checkBox{
                    width: 100%;
                    display: flex;
                    box-sizing: border-box;
                    padding: 0 80px;
                    justify-content: space-between;
                    margin-bottom: 25px;
                    p{
                        width: 15px;
                        height: 15px;
                        background: #fff;
                        border: 1px solid #ddd;
                        margin: 0;
                        margin-top: 10px;
                        margin-right: 15px;
                    }
                    .checBox_box{
                        position: relative;
                        display: flex;
                        height: 35px;
                        cursor: pointer;
                        img{
                            width: 20px;
                            height: 20px;
                            position: absolute;
                            top: 7px;
                        }
                        span{
                            display: inline-block;
                            height: 35px;
                            line-height: 35px;
                        }
                    }
                }
                .space{
                    display: flex;
                    justify-content: space-between;
                    margin-bottom: 25px;
                    box-sizing: border-box;
                    padding: 0 0 0 15px;
                    label{
                        width: 80px;
                        margin-right: 10px;
                    }
                    .el-input{
                        width: 200px;
                    }
                }
                .spaceBox{
                    display: flex;
                    margin-bottom: 25px;
                }
            }
        }
        .btnBox{
            width: 100%;
            text-align: center;
            margin-top: 20px;
            .el-button{
                width: 200px;
                margin-right: 20px;
                span{
                    color: #fff;
                    font-size: 16px;
                }
            }
            span{
                color: #999;
                cursor: pointer;
            }
        }
        .dataypeBox{
            width: 100%;
            height: 100px;
            background-color: #d5d5d4;
            margin-top: 30px;
            color: #333333;
            font-size: 25px;
            box-sizing: border-box;
            display: flex;
            justify-content: center;
            padding: 35px 0;
            .datatype{
                display: flex;
                a{
                    text-decoration: none;
                    color: black;
                }
             .type_item{
                 display: flex;
                 margin-right: 40px;
                 cursor: pointer;
                 .rode{
                     width: 20px;
                     height: 20px;
                     border-radius: 50%;
                     background-color: #fff;
                     margin-right: 10px;
                     transform: translateY(40%);
                     position: relative;
                     border: 1px solid #aaa;
                     p{
                         width: 14px;
                         height: 14px;
                         border-radius: 50%;
                         background-color: #1c93d7;
                         position: absolute;
                         top: -22px;
                         left: 3px;
                     }
                 }
                 span.active{
                     color: #1c93d7;
                 }
             }   
            }
        }
    }
</style>