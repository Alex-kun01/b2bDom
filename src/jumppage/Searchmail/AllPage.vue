<template>
    <div class="serch_all">
        <div class="title_box">
            <div class="title">知道公司名称/产品关键词/网址，<strong>想获得更多国外买家联系方式吗？</strong></div>
            <div class="title2">这个AI全网搜邮，能快速的帮你找到答案 。</div>
        </div>
        <!-- 视频区域 -->
        <div class="vadio">
            <video class="videoPlayer" src="https://www.b2b3.com/attach/training/b2b3/video/AIEmailSearch.mp4" controls="controls" poster="https://www.b2b3.com/statics/images/tradeTool/searchEmail/video.jpg"></video>
            <div class="videoContent">
                <h3>3分钟了解AI全网搜邮</h3>
                <p>覆盖全球知名社媒，一键搜索全球客户资源</p>
                <p>按公司名称/产品关键词/网址搜</p>
                <p>包含社交主页+社交账号+姓名+职称+公司邮箱</p>
                <p>搜索结果可以进行一键检测、导出结果、一键发送</p>
            </div>
        </div>
        <!-- 奇怪图形区域 -->
        <div class="pic_box">
            <div class="AISearchDes des_01">
                <div class="desTitle"><i>1</i>开启AI全网搜邮，搜索全球客户资源</div>
                <div class="desText">
                    <p>怎么找采购商邮箱？可以通过公司名称、产品关键词、网址多种搜索方式进行查找，适应企业的不同客户开发需求</p>
                    <p>精准匹配搜索网络，一键搜索Google, Facebook, Linkedin, Twitter等主流社媒的潜在客户信息</p>
                </div>
                <div class="desImg"><img src="https://www.b2b3.com/statics/images/tradeTool/searchEmail/description_01.jpg"></div>
            </div>
            <div class="AISearchDes des_02">
                <div class="desTitle"><i>2</i>按需求执行搜索，多平台资源可供营销</div>
                <div class="desText">通过深挖可以轻松获取公司的社媒账号以及员工对应的姓名、职称、邮箱和社交账号</div>
                <div class="desImg"><img src="https://www.b2b3.com/statics/images/tradeTool/searchEmail/description_02.jpg"></div>
            </div>
            <div class="AISearchDes des_01">
                <div class="desTitle"><i>3</i>公司相关信息一览无余</div>
                <div class="desText">
                    <p>包含公司的邮箱、电话、国别、 官网网址等基本信息，所有网址、账号链接都是真实有效且能直接打开</p>
                    <p>所有公司官方的社媒平台账号以及企业名下员工的信息：姓名、职位、 邮箱、社媒账号都清晰可见</p>
                </div>
                <div class="desImg"><img src="https://www.b2b3.com/statics/images/tradeTool/searchEmail/description_03.jpg"></div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {

        }
    }
}
</script>
<style lang="less">
    .serch_all{
        width: 100%;
        background-color: #f2f2f2;
        .title_box{
            width: 100%;
            height: 180px;
            background-color: #fff;
            box-sizing: border-box;
            padding: 0 18%;
            text-align: center;
            .title{
                font-size: 35px;
                color: #555;
                min-width: 1120px;
                margin-bottom: 20px;
            }
            .title2{
                min-width: 1120px;
                font-size: 18px;
                color: #444;
            }
        }
        .vadio{
            display: flex;
            justify-content: center;
            margin-top: 50px;
            .videoPlayer{
                width: 556px;
                height: 310px;
                margin-right: 90px;
            }
            .videoContent{
                box-sizing: border-box;
                padding-top: 20px ;
                h3{
                    font-size: 40px;
                    color: #fa9531;
                }
            }
        }
        .pic_box{
            margin-top: 100px;
            padding: 0 18%;
            .AISearchDes.des_02{
                height: 435px;
                background-color: #dcdcdc;
                background-image: url(https://www.b2b3.com/statics/images/tradeTool/searchEmail/descriptionbg_03.png), url(https://www.b2b3.com/statics/images/tradeTool/searchEmail/descriptionbg_04.png);
            }
            .AISearchDes.des_01{
                min-height: 435px;
                background-color: #fff;
                background-image: url(https://www.b2b3.com/statics/images/tradeTool/searchEmail/descriptionbg_01.png), url(https://www.b2b3.com/statics/images/tradeTool/searchEmail/descriptionbg_02.png);
            }
            .AISearchDes{
                min-width: 1220px;
                background-size: 65px 435px;
                background-position: left top, right top;
                background-repeat: no-repeat;
                box-sizing: border-box;
                padding: 50px 80px;
                .desTitle{
                    font-size: 40px;
                    font-weight: bold;
                    color: #1c93d7;
                    i{
                        display: inline-block;
                        margin-right: 15px;
                        width: 70px;
                        height: 70px;
                        line-height: 70px;
                        background-color: #1c93d7;
                        color: #fff;
                        border-radius: 50%;
                        text-align: center;
                    }
                }
                .desText{
                    padding: 0 80px;
                }
            }
        }
    }
</style>