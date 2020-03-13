<template>
    <div class="registerPage">
        <div class="content">
            <!-- 顶部标题 -->
            <div class="top_title">
                <div class="box">
                    <img src="https://www.b2b3.com/statics/images/regLogForget/logo.png">
                    <div class="chain">中文</div>
                </div>
            </div>
            <div class="form_content">
                    <!-- 表格内容 -->
                <div class="text">
                    <div class="text_top">创建你的B2B3.COM账户</div>
                    <div class="text_bom">登陆以专门搜索大量的海外贸易数据</div>
                </div>
                <el-form
                ref="form"
                :model="form"
                class="formBox"
                >
                    <el-form-item>
                        <div>电子邮件</div>
                        <el-input v-model="form.email" placeholder="请输入您的电子邮箱">
                            <i slot="prefix" class="el-icon-message"></i>
                        </el-input>
                    </el-form-item>
                    <el-form-item>
                        <div class="passwordBox"><span>密码</span><a href="#">忘记密码？</a></div>
                        <el-input v-model="form.password" placeholder="请输入密码">
                            <i slot="prefix" class="el-icon-unlock"></i>
                        </el-input>
                    </el-form-item>
                </el-form>
                <el-button type="primary" @click="formSubmit">注册</el-button>
                <div class="footer_txt"><span>新用户？</span><a href="#">免费加入</a></div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      form: {
        email: '',
        password: '',
        id: ''
      }
    }
  },
  methods: {
    formSubmit () {
      this.$axios.post('login', this.form).then(res => {
        if (res.status === 201) {
          alert('注册成功')
          this.$router.push('/login')
        }
      })
    }
  }
}
</script>
<style lang="less">
    .registerPage{
        width: 100%;
        height: 100%;
        background: url(https://www.b2b3.com/statics/images/regLogForget/regLogForgetBG.png);
        position: relative;
        .content{
            width: 460px;
            height: 505px;
            background-color: #fff;
            border-radius: 5px;
            box-sizing: border-box;
            position: absolute;
            top: calc(50% - 252px);
            left: calc(50% - 230px);
            .top_title{
                width: 100%;
                height: 77px;
                background-color:coral;
                .box{
                    width: 100%;
                    height: 100%;
                    display: flex;
                    justify-content: space-between;
                    box-sizing: border-box;
                    padding: 0 45px;
                    img{
                        width: 152px;
                        height: 45px;
                        margin-top: 15px;
                    }
                    .chain{
                        color: #fff;
                        height: 20px;
                        line-height: 20px;
                        font-size: 12px;
                        border: 1px solid #fff;
                        border-radius: 5px;
                        padding: 0 15px;
                        margin-top: 30px;
                    }
                }
            }
            .form_content{
                box-sizing: border-box;
                padding: 0 45px;
                .text{
                margin-top: 50px;
                .text_top{
                    font-size: 18px;
                    margin-bottom: 5px;
                }
                .text_bom{
                    font-size: 12px;
                    color: #ccc;
                }
            }
            .formBox{
                .passwordBox{
                    display: flex;
                    justify-content: space-between;
                    a{
                        color: #1c93d7;
                        font-size: 12px;
                        text-decoration: none;
                    }
                    a:hover{
                        text-decoration: underline;
                    }
                }
            }
            }
            .el-button{
                width: 100%;
                margin-bottom: 10px;
            }
            .footer_txt{
                display: flex;
                justify-content: flex-end;
                span{
                    font-size: 12px;
                }
                a{
                    color: #1c93d7;
                    font-size: 12px;
                    text-decoration: none;
                }
                a:hover{
                        text-decoration: underline;
                    }
            }
        }
    }
</style>
