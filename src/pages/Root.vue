<template>
    <div class="wrap">
        <!--<y-header></y-header>-->
        <main-menu></main-menu>
        <router-view></router-view>
        <y-footer></y-footer>
    </div>
</template>

<script>
    import {Header, MainMenu, Footer} from 'components'

    export default {
        components: {
            'y-header': Header,
            MainMenu,
            'y-footer': Footer
        },
        watch: {
            '$route' (to, from) {
                if (window.frames[0]) {
                    window.frames[0].postMessage({ redirectName: to.name }, window.location.origin)
                }
                if (window.parent !== window) {
                    window.parent.postMessage({ hashchange: to }, '*')
                }
            }
        },
        created () {
            window.addEventListener('message', e => {
                if (e.data && e.data.ready === true) {
                    if (window.frames[0]) {
                        window.frames[0].postMessage({ redirectName: this.$route.name }, window.location.origin)
                    }
                }
            }, false)
        }
    }
</script>