<template>
    <div class="countryList">
        <div class="coun_Box">
            <div class="item"
            v-for="(item, index) in dataList"
            :key="index">
                <router-link :to="{name: 'datadesc', params: {id: item.id}}">
                    <div class="moveBox">
                    <div class="content">
                    <img :src="item.src">
                    <div class="textBox">
                        <div class="title">{{item.country}}</div>
                        <div class="text">{{item.time}}</div>
                        <div class="footer">{{item.info}}</div>
                    </div>
                    </div>
                    <div class="right">
                        <span>走</span>
                        <i class="el-icon-caret-right"></i>
                    </div>
                </div>
                </router-link>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      dataList: []
    }
  },
  mounted () {
    this.$axios.get('countryList').then(res => {
      console.log(res.data)
      this.dataList = res.data.importdata
    })
  }
}
</script>
<style lang="less">
    .countryList{
        margin: 70px 0;
        width: 100%;
        display: flex;
        justify-content: center;
        .coun_Box{
            display: flex;
            justify-content: space-between;
            width: 1220px;
            .item{
                width: 400px;
                height: 80px;
                cursor: pointer;
                a{
                    color: #555;
                    text-decoration: none;
                }
                .moveBox{
                    width: 380px;
                    height: 80px;
                    box-shadow: 0 0 4px 1px #999;
                    border-radius: 340px;
                    display: flex;
                    justify-content: space-between;
                    transition: all 0.5s;
                    .content{
                display: flex;
                img{
                    width: 80px;
                    height: 80px;
                    margin-right: 10px;
                }
                .textBox{
                    display: flex;
                    flex-direction: column;
                    .title{
                        padding: 0;
                        margin: 0;
                        text-align: left;
                        color: #1c93d7;
                        font-weight: bold;
                        margin: 5px 0;
                    }
                    .text{
                        font-size: 14px;
                        margin-bottom: 5px;
                    }
                    .footer{
                        font-size: 12px;
                        color: #999;
                    }
                }
            }
            .right{
                color: #1c93d7;
                height: 80px;
                line-height: 80px;
                display: flex;
                justify-content: space-between;
                opacity: 0;
                transition: all 0.5s;
                .el-icon-caret-right{
                    height: 80px;
                    line-height: 80px;
                }
            }   
                }
        }
        .moveBox:hover > .right{
            opacity: 1;
        }
        .moveBox:hover{
            padding-right: 15px;
        }
        }
    }
</style>
