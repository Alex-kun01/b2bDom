<template>
    <div class="jinContent">
        <div class="title">
            <h1>海关进口数据</h1>
            <div class="text1">采购商进口数据是如下相应国家进口全球货物的数据，帮助你更快更安全地找到更合适的贸易伙伴</div>
            <div class="text2">它包括进口商和出口商的公司名称、产品规格、价值、数量、原产地和目的地国家、起运港和目的港、HS编码、装运日期等</div>
        </div>
        <country-list />
    </div>
</template>
<script>
import CountryList from '../HsContent/CountryList'
export default {
  components: {
    CountryList
  }
}
</script>
<style lang="less">
    .jinContent{
        width: 100%;
        background: #fff;
        box-sizing: border-box;
        .title{
            text-align: center;
            padding-top:35px ;
            .text1{
                margin-bottom: 10px;
            }
        }
    }
</style>
