<template>
    <div class="hotProduct">
        <div class="product_line">
            <div class="line_l"></div>
            <div class="line_r"></div>
            <div class="line_text">热门产品</div>
        </div>
        <div class="product_card">
            <div class="card_item"
                v-for="(item, index) in cardList"
                :key="index"
            >
                <img :src="item.img">
                <div class="item_show">
                    <div class="title">
                        {{item.title}}
                    </div>
                    <div class="text">
                        <span>{item.text}}</span>
                        <i>/pair</i>
                    </div>
                </div>
                <div class="item_btn">
                    <el-button type="primary">Enquire</el-button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      // 卡片数据
      cardList: []
    }
  },
  props: ['datat'],
  mounted () {
    console.log('我是父传子', this.datat)
    this.$axios.get('hotProduct').then(res => {
      this.cardList = res.data.cardList
    })
  }
}
</script>
<style lang="less">
    .hotProduct{
        width: 100%;
        box-sizing: border-box;
        padding: 0 18%;
        .product_line{
            width: 100%;
            min-width: 1220px;
            margin-bottom: 40px;
            .line_l{
                width: 45%;
                height: 8px;
                background-color: #ddd;
                border-radius: 4px;
                float: left;
            }
            .line_r{
                width: 44%;
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
        .product_card{
            width: 100%;
            min-width: 1220px;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            .card_item{
                width: 228px;
                height: 278px;
                background: #fff;
                border-radius: 10px;
                cursor: pointer;
                margin-bottom: 20px;
                img{
                    width: 190px;
                    height: 190px;
                    margin: 19px 19px 10px;
                    transition: all 0.3s;
                }
                .item_show{
                    box-sizing: border-box;
                    padding: 0 19px;
                    .title{
                        width: 100%;
                        font-size: 14px;
                        overflow: hidden;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                        margin-bottom: 5px;
                    }
                    .text{
                        font-size: 14px;
                        span{
                            font-weight: bold;
                            color: #FF6633;
                        }
                        i{
                            color: #999;
                        }
                    }
                }
                .item_btn{
                    margin-top: 10px;
                    box-sizing: border-box;
                    padding: 0 19px;
                    display: none;
                    .el-button{
                        width: 100%;
                        height: 30px;
                        line-height: 5px;
                        background-color: #1c93d7;
                    }
                }
            }
            .card_item:hover .item_show{
                display: none;
            }
            .card_item:hover .item_btn{
                display: block;
            }
            .card_item:hover img{
                transform: scale(1.1,1.1);
            }
            .card_item:hover{
                box-shadow: 0 0 10px 5px #ddd;
            }
        }
    }
</style>
