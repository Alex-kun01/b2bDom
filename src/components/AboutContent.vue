<template>
    <div class="about_content">
        <div class="about_con">
            <h1>关于我们</h1>
            <div class="text">
                优贸网WWW.B2B3.COM是东莞优贸网络有限公司旗下的外贸营销平台，专注为全球贸易从业者提供精准的大数据营销服务。公司从事海关数据研究已有8年历史，是一个权威海关数据平台，有着一整套完善的海关数据系统；为全球供应商提供查验采购商的数据服务，助力出口商快速获取海量优质采购商，并提供其采购分析报告和带姓名职称的精准联系方式，辅助于CRM客户管理系统，邮件智能追踪系统，助您快速开发全球客户，实现业绩倍增；为全球采购商提供查验供应商的数据服务，采购商可通过出口数据匹配自己适合的供应商，在线发布采购需求、在线发送询盘、在线与供应商沟通。
            </div>
            <div class="text">
                平台数据来源主要有美国、加拿大、英国、德国、法国、墨西哥、日本、印度、越南、菲律宾、俄罗斯、巴基斯坦、智利、哥伦比亚、阿根廷、巴西等全球100多个国家和地区的进出口数据，通过真实客观的数据，让贸易变得更安全更高效；服务内容主要有全球海关数据、海关数据免费查询、邮件智能追踪、怎么找采购商邮箱、常用外贸软件、外贸营销工具、买家联系方式、供应商出口数据、采购商进口数据、海关进出口数据、海关编码查询、出口退税率查询。
            </div>
            <div class="btn_box">
                <div class="btn">查看更多</div>
            </div>
        </div>
        <div class="float-top"></div>
        <div class="float-bom"></div>
    </div>
</template>
<script>
export default {

}
</script>
<style lang="less">
    .about_content{
        width: 100%;
        min-width: 1220px;
        height: 500px;
        color: #fff;
        background: url(https://www.b2b3.com/statics/images/newhome/about.jpg) center no-repeat;;
        box-sizing: border-box;
        padding: 30px 5%;
        position: relative;
        margin-bottom: 80px;
        .about_con{
            transition: all 1s;
            h1{
                font-size: 40px;
                text-align: center;
            }
            .text{
                font-size: 14px;
                margin-bottom: 40px;
            }
            .btn_box{
                width: 100%;
                display: flex;
                justify-content: center;
                .btn{
                border: 1px solid #fff;
                font-size: 18px;
                width: 250px;
                height: 40px;
                line-height: 40px;
                border-radius: 5px;
                text-align: center;
                cursor: pointer;
                transition: all 0.4s;
                }
            }
        }
        .float-top,.float-bom{
            height: 0;
            width: 100%;
            // background-color: rgba(255, 255, 255, 0.1);
            border-color: rgba(255, 255, 255, 0.2);
            border-style: solid;
            position: absolute;
            left: 0;
            z-index: 999;
            transition: all 0.5s ease-out;
        }
        .float-top{
            top: 0;
        }
        .float-bom{
            bottom: 0;
        }
    }
    .about_content:hover .btn{
        border: none;
        background-color: #fe9601;
    }
    .about_content:hover .float-top{
        border-top-width: 247px;
    }
    .about_content:hover .float-bom{
        border-top-width: 247px;
    }
    .about_content:hover .about_con{
        transform: translateY(-4%);
    }
</style>
