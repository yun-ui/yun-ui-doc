<template>
    <section class="page page-doc">
        <left-side-bar></left-side-bar>
        <main-doc-area>
            <router-view></router-view>
        </main-doc-area>
        <demo-area></demo-area>
    </section>
</template>

<script>
    import {LeftSideBar, MainDocArea, DemoArea} from 'components'

    export default {
        components: {
            LeftSideBar,
            MainDocArea,
            DemoArea
        }
    }
</script>