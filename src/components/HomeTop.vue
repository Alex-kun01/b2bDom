<template>
    <div class="homeTop">
        <div class="content">
            <div class="form">
                <!-- 头部标题区域 -->
                <div class="form_top">
                    <div class="title">
                        发布采购需求
                        <img src="https://www.b2b3.com/statics/images/newhome/free.png">
                    </div>
                    <div class="text"><span>*</span> 60秒极速发布采购需求</div>
                    <div class="text"><span>*</span> 获取多个优质供应商的报价单</div>
                </div>
                <!-- input输入区域 -->
                <div class="form_input">
                    <el-input v-model="inputName" placeholder="您需要采购的产品名称"></el-input>

                    <div class="input_number">
                        <el-input placeholder="采购数量" v-model="input_number" class="input-with-select"></el-input>
                        <el-select v-model="select" class="select_number" slot="prepend" placeholder="请选择">
                        <el-option label="Acre/Acres" value="1"></el-option>
                        <el-option label="Ampere/Amperes" value="2"></el-option>
                        <el-option label="Bag/Bags" value="3"></el-option>
                        <el-option label="Barrel/Barrels" value="4"></el-option>
                        <el-option label="Blade/Blades" value="5"></el-option>
                        <el-option label="Box/Boxes" value="6"></el-option>
                        </el-select>
                    </div>
                    <el-select v-model="select_type" class="select_type" slot="prepend" placeholder="请选择需求类型">
                        <el-option label="申请价格" value="1"></el-option>
                        <el-option label="申请样品" value="2"></el-option>
                        <el-option label="申请报价单" value="3"></el-option>
                        </el-select>
                    <el-input
                        placeholder="有效期至"
                        suffix-icon="el-icon-date"
                        v-model="inputData">
                    </el-input>
                    <el-input placeholder="您公司的网站" v-model="inputWeb" class="input-with-select"></el-input>
                    <el-input placeholder="您公司的电子邮件" v-model="inputEmail" class="input-with-select"></el-input>
                    <el-button class="input_btn" type="primary" @click="submit">发布采购需求</el-button>
                </div>
            </div>
            <div class="right">
                <div class="rotation">
                    <el-carousel trigger="click" height="386px" class="rotation_box">
                        <el-carousel-item v-for="(item, index) in rotation" :key="index">
                            <img :src="item">
                        </el-carousel-item>
                    </el-carousel>
                </div>
                <div class="img">
                    <img v-for="(item, index) in bomImg" :key="index" :src="item">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            // 轮播图图片组
            rotation: [],
            // 底部图片组
            bomImg: [],
            // input 产品名称
            inputName: '',
            // 产品数量选项
            select: 'Acre/Acres',
            input_number: '',
            // input 类型
            select_type: '',
            // input 有效期
            inputData: null,
            // input 公司网站
            inputWeb: '',
            // input 公司电子邮件
            inputEmail: ''
        }
    },
    mounted(){
        this.$axios.get('homeTop').then(res =>{
            console.log(res.data)
            this.rotation = res.data.rotation
            this.bomImg = res.data.img
        })
    },
    methods: {
        submit(){
            const arr = {
                inputName: this.inputName,
                select: this.select,
                input_number: this.input_number,
                select_type: this.select_type,
                inputData: this.inputData,
                inputWeb: this.inputWeb,
                inputEmail: this.inputEmail
            }

            console.log(arr)
        }
    }
}
</script>
<style lang="less">
    .homeTop{
        width: 100%;
        box-sizing: border-box;
        padding: 0 18%;
        margin-bottom: 30px;
        .content{
            
            height: 532px;
            min-width: 1220px;
            display: flex;
            justify-content: space-between;
            .form{
                background-color: #fff;
                border:1px solid #ddd;
                width: 350px;
                height: 496px;
                box-sizing: border-box;
                padding: 10px;
                input{
                    height: 35px;
                }
                .form_top{
                    height: 100px;
                    .title{
                        font-size: 18px;
                        font-weight: bold;
                        color: #FF6633;
                        margin-bottom: 10px;
                        img{
                            transform: translateY(-30%);
                        }
                    }
                    .text{
                        font-size: 15px;
                        color: #555;
                        margin-bottom: 5px;
                        span{
                            color: red;
                        }
                    }
                    
                }
                .form_input{
                    height: 360px;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    .input_number{
                        display: flex;
                        width: 100%;
                        .input-with-select{
                            width: 50%;
                        }
                        .select_number{
                            color: #777;
                        }
                    }
                    .select_type{
                        width: 100%;
                    }
                    .input_btn{
                        width: 100%;
                    }
                }
            }
            .right{
                height: 496px;
                .rotation{
                width: 835px;
                height: 386px;
                .rotation_box{
                    width: 100%;
                    height: 100%;
                }
                .el-carousel__button{
                    background-color: #ff9b06 ;
                }
                }
                .img{
                    display: flex;
                    justify-content: space-between;
                    div{
                        background: black;
                        width: 200px;
                        height: 110px;
                    }
                }
            }
        }
    }
</style>