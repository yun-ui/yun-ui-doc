<template>
    <section class="left-side-bar">
        <ul id="demo">
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
