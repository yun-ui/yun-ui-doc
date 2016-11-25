<template>
    <div class="wrap">
        <y-header></y-header>
        <main-menu></main-menu>
        <router-view></router-view>
    </div>
</template>

<script>
import { Header, MainMenu } from 'components'

export default {
    components: {
        'y-header': Header,
        MainMenu
    }
}
</script>