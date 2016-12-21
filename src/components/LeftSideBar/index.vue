<template>
    <section class="left-side-bar">
        <ul id="demo" class="docs-navbar">
            <menu-item
            v-for="item in menu"
            :data="item">
            </menu-item>
        </ul>
    </section>
</template>

<script>
import Vue from 'vue'
import Item from './Item'
import menuList from 'src/menuList'

Vue.component('menu-item', Item)

export default {
    data () {
        return {
            menu: menuList
        }
    },
    mounted () {
    }

}
</script>

<style lang="less">
    .docs-navbar{
        padding:50px 0 50px 50px;

    }
</style>