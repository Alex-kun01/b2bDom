<template>
    <div class="new_content">
        <div class="new_line">
            <div class="line_l"></div>
            <div class="line_r"></div>
            <div class="line_text">外贸资讯与技巧</div>
        </div>
        <!-- 卡片区域 -->
        <div class="card">
            <div class="card_item" v-for="(item, index) in news" :key="index">
                <div class="contentBox">
                    <img :src="item.img">
                    <div class="card_con">
                        <div class="title">{{item.title}}</div>
                        <div class="text">{{item.text}}</div>
                        <div class="footer">
                            <span class="red">优贸网</span>
                            <span class="date">{{item.data}}</span>
                        </div>
                    </div>
                </div>
                <div class="float"></div>
            </div>
        </div>
        <div class="btn_box">
            <el-button type="primary">产看更多</el-button>
        </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      news: []
    }
  },
  mounted () {
    this.$axios.get('newContent').then(res => {
      this.news = res.data.cardList
      console.log(this.news)
    })
  }
}
</script>
<style lang="less">
    .new_content{
        width: 100%;
        min-width: 1220px;
        box-sizing: border-box;
        padding: 0 18%;
        margin-bottom: 100px;
        .new_line{
            width: 100%;
            min-width: 1220px;
            margin-bottom: 40px;
            .line_l{
                width: 42%;
                height: 8px;
                background-color: #ddd;
                border-radius: 4px;
                float: left;
            }
            .line_r{
                width: 42%;
                height: 8px;
                background-color: #ddd;
                border-radius: 4px;
                float: right;
            }
            .line_text{
                font-size: 22px;
                font-weight: bold;
                color: #FF6633;
                text-align: center;
                line-height: 5px;
            }
        }
        .card{
            min-width: 1220px;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            .card_item{
                width: 360px;
                height: 376px;
                background-color: #fff;
                margin-bottom: 40px;
                border-radius: 4px;
                position: relative;
                .contentBox{
                    position: absolute;
                    top: 0;
                    left: 0;
                    z-index: 999;
                    img{
                    width: 330px;
                    height: 220px;
                    z-index: 1000;
                    box-sizing: border-box;
                    margin: 15px;
                }
                .title{
                    width: 342px;
                    top: 245px;
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    font-size: 14px;
                    font-weight: bold;
                    box-sizing: border-box;
                    margin: 0 15px 15px 15px;
                }
                .text{
                    top: 275px;
                    width: 342px;
                    font-size: 14px;
                    color: #666;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    margin-bottom: 15px;
                    box-sizing: border-box;
                    margin: 0 15px 15px 15px;
                }
                .footer{
                    display: flex;
                    justify-content: space-between;
                    box-sizing: border-box;
                    padding: 0 15px;
                    bottom: 10px;
                    .red{
                        color: salmon;
                        font-size: 14px;
                    }
                    .date{
                        font-size: 14px;
                        color: #777;
                    }
                }
                }
                .float{
                    position: absolute;
                    top: 50%;
                    width:360px;
                    transform: translateY(-50%);
                    height: 0;
                    background-color: #fe9601;
                    transition: height .3s;
                }
            }
            .card_item:hover > .float{
                height: 376px;
            }
            .card_item:hover > .contentBox .title,
            .card_item:hover > .contentBox .text,
            .card_item:hover > .contentBox .footer span{
                color: #fff;
            }
        }
        .btn_box{
            width: 1220px;
            text-align: center;
            .el-button{
                width: 200px;
            }
        }
    }
</style>
