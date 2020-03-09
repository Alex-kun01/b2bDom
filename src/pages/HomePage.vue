<template>
<!-- 网站首页 -->
    <div class="home_page">
        <header-bar />
        <home-top />
        <hot-product />
        <seach-box />
        <home-service />
        <about-content />
        <new-content />
        <footer-bar />
    </div>
</template>
<script>
import HeaderBar from '../components/HeaderBar'
import HomeTop from '../components/HomeTop'
import HotProduct from '../components/HotProduct'
import SeachBox from '../components/SeachBox'
import HomeService from '../components/HomeService'
import AboutContent from '../components/AboutContent'
import NewContent from '../components/NewContent'
import FooterBar from '../components/FooterBar'
export default {
  components: {
    HeaderBar,
    HomeTop,
    HotProduct,
    SeachBox,
    HomeService,
    AboutContent,
    NewContent,
    FooterBar
  }
}
</script>
<style lang="less">
    .home_page{
        width: 100%;
        background-color: #f2f3f7;
    }
</style>
