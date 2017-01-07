<template>
    <div class="wrap">
        <!--<y-header></y-header>-->
        <main-menu></main-menu>
        <router-view></router-view>
        <y-footer></y-footer>
    </div>
</template>

<script>
import { Header, MainMenu, Footer } from 'components'

export default {
    components: {
        'y-header': Header,
        MainMenu,
        'y-footer': Footer
    }
}
</script>