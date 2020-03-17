<template>
<!-- 海关编码 -->
    <div class="customerCase">
        <!-- 海关编码查询 -->
        <div class="search">
            <div class="input">
                <div class="leftText">海关编码查询</div>
                <input type="text" v-model="input" placeholder="请输入商品名/英文名/4-10位HS编码">
                <div class="btn" @click="submit">搜索</div>
            </div>
            <div class="country">
                <div class="option"
                v-for="(item, index) in country"
                :key="index"
                >{{item}}</div>
            </div>
        </div>
        <!-- 内容区域 -->
        <div class="content">
            <div class="con_box">
                <!-- 跳动数字区域 -->
                <div class="move_number">
                    <span class="leftTxt">编码查询次数已达</span>
                    <span class="item">{{numArr.moveNum1}}</span>
                    <span class="item">{{numArr.moveNum2}}</span>
                    <span>,</span>
                    <span class="item">{{numArr.moveNum3}}</span>
                    <span class="item">{{numArr.moveNum4}}</span>
                    <span class="item">{{numArr.moveNum5}}</span>
                    <span>,</span>
                    <span class="item">{{numArr.moveNum6}}</span>
                    <span class="item">{{numArr.moveNum7}}</span>
                    <span class="item">{{numArr.moveNum8}}</span>
                </div>
                <div class="textCon">
                    <span>
                        海关编码即HS Code：其全称为《商品名称及编码协调制度的国际公约》,目前全球贸易量98%以上使用这一目录，已成为国际贸易一种【标准语言】；海关编码共计10位，编码的第一、二位数码代表“章”，第三、四位数码代表“目”（Heading），第五、六位数码代表“子目”（Subheading），前6位数是HS国际标准编码，所以同一商品前6位编码全球通用；而同一商品的后4位编码，在不同的国家地区极可能完全不一致！
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      country: [],
      number: [],
      input: '',
      numArr: {
        moveNum1: null,
        moveNum2: null,
        moveNum3: null,
        moveNum4: null,
        moveNum5: null,
        moveNum6: null,
        moveNum7: null,
        moveNum8: null
      }
    }
  },
  mounted () {
    this.$axios.get('hsCode').then(res => {
      this.country = res.data.country
      this.number = res.data.number
      this.assignTarget()
      console.log('number', this.number)
    })
  },
  methods: {
    // 随机获取数字函数
    getNumber () {
      return Math.floor(Math.random() * 10)
    },
    // 给目标数字赋值
    assignTarget () {
      const _this = this
      for (let item in this.numArr) {
        let timer = null
        timer = setInterval(() => {
          _this.numArr[item] = _this.getNumber()
        }, 100)
        setTimeout(() => {
          clearInterval(timer)
          _this.numArr.moveNum1 = _this.number[0]
          _this.numArr.moveNum2 = _this.number[1]
          _this.numArr.moveNum3 = _this.number[2]
          _this.numArr.moveNum4 = _this.number[3]
          _this.numArr.moveNum5 = _this.number[4]
          _this.numArr.moveNum6 = _this.number[5]
          _this.numArr.moveNum7 = _this.number[6]
          _this.numArr.moveNum8 = _this.number[7]
        }, 3000)
      }
    },
    submit () {
      console.log(this.input)
    }
  }
}
</script>
<style lang="less">
    .customerCase{
        width: 100%;
        .search{
            width: 100%;
            padding: 50px 18%;
            min-width: 1220px;
            .input{
                display: flex;
                height: 40px;
                line-height: 40px;
                margin-bottom: 20px;
                .leftText{
                    font-size: 18PX;
                    font-weight: bold;
                    color: #777;
                }
                input{
                    width: 795px;
                    border: 2px solid #1c93d7;
                    margin-left: 15px;
                    border-radius: 5px 0 0 5px;
                    text-indent: 10px;
                }
                input::placeholder{
                    color: #CCC;
                }
                .btn{
                    width: 90px;
                    font-size: 18px;
                    color: #fff;
                    text-align: center;
                    background-color: #1c93d7;
                    border-radius: 0 5px 5px 0;
                }
            }
            .country{
                display: flex;
                flex-wrap: wrap;
                min-width: 1000px;
                padding: 0 50% 0 7%;
                .option{
                    width: 88px;
                    height: 22px;
                    line-height: 22px;
                    background-color: #fff;
                    text-align: center;
                    border-radius: 10px;
                    font-size: 14px;
                    margin: 20px 15px 0 0;
                    cursor: pointer;
                }
            }
        }
        .content{
            width: 100%;
            min-width: 1220px;
            box-sizing: border-box;
            padding: 0 18%;
            .con_box{
                width:100%;
                height: 475px;
                background-color: #fff;
                .move_number{
                    text-align: center;
                    padding-top: 70px;
                    margin-bottom: 70px;
                    .leftTxt{
                        margin-right: 15px;
                    }
                    .item{
                        font-size: 40px;
                        color: #1c93d7;
                        display: inline-block;
                        width: 41px;
                        height: 55px;
                        border-radius: 5px;
                        box-shadow: 2px 2px 2px 2px #ddd;
                    }
                    span{
                        font-size: 30px;
                        color: #666;
                        margin-right: 10px;
                    }
                }
                .textCon{
                    display: block;
                    overflow: hidden;
                    line-height: 34px;
                    font-size: 18px;
                    text-align: justify;
                    padding: 0 45px;
                }
            }
        }
    }
</style>
