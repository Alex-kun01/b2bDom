<template>
    <div class="indexPage">
        <header-bar />
        <router-view />
        <footer-bar />
        <float-page />
    </div>
</template>
<script>
import HeaderBar from '../components/HeaderBar'
import FooterBar from '../components/FooterBar'
import FloatPage from '../components/FloatPage'
export default {
    data () {
        return {

        }
    },
    components: {
        HeaderBar,
        FooterBar,
        FloatPage
    }
}
</script>
<style lang="less">
    .indexPage{
        width: 100%;
    }
</style>