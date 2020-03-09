<template>
    <div class="home_serice">
        <div class="item" v-for="(item, index) in sericeList" :key="index">
            <div class="img">
                <img :src="item.img">
            </div>
            <div class="box">
                <h1>{{item.title}}</h1>
                <div class="item_inner" v-for="(oper, indx) in item.text"  :key="indx">
                    <i class="el-icon-check"></i>
                    <span>{{oper}}</span>
                </div>
                <div class="btn">
                    <el-button type="primary">查看详情</el-button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      sericeList: []
    }
  },
  mounted () {
    this.$axios.get('homeService').then(res => {
      this.sericeList = res.data.data
      console.log(this.sericeList)
    })
  }
}
</script>
<style lang="less">
    .home_serice{
        width: 100%;
        min-width: 1220px;
        display: flex;
        justify-content: space-around;
        .item{
            width: 440px;
            height: 689px;
            .img{
                width: 100%;
                height: 300px;
                text-align: center;
                transition: all 0.5s;
                cursor: pointer;
            }
            .img:hover{
                transform: translateY(-3%);
            }
            .box{
                height: 100%;
                height: 389px;
                border: 1px solid #ddd;
                background-color: #fff;
                border-radius: 5px;
                margin-top: -20px;
                box-sizing: border-box;
                padding: 13px;
                h1{
                    text-align: center;
                    font-size: 25px;
                    margin: 0;
                    margin-bottom: 14px;
                }
                .item_inner{
                    font-size: 15px;
                    color: #444;
                    margin-bottom: 10px;
                    .el-icon-check{
                        font-weight: bold;
                    }
                }
                .btn{
                    width: 100%;
                    text-align: center;
                    margin-top: 20px;
                    .el-button{
                    width: 60%;
                    }
                }
            }
        }
    }
</style>
