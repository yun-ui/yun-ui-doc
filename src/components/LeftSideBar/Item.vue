<template>
    <li class="docs-navbar-item">
        <div @click="toggle" class="navbar-item-title">
            <router-link :to="{ path: path}" v-if="!isFolder">
                {{data.title}}
            </router-link>
            <span v-else>{{data.title}}</span>
            <small>{{data.secondary}}</small>
            {{hasParent}}
            <i v-if="isFolder" :class="['iconfont', {'icon-arrow-down': open}, {'icon-arrow-up': !open}]"></i>
        </div>
        <ul v-show="open" v-if="isFolder" class="navbar-item-child">
            <menu-item
            v-for="item in data.subMenu"
            :data="item" :prefixpath="data.routePath">
            </menu-item>
        </ul>
    </li>
</template>

<script>
export default {
    props: {
        data: {
            type: Object,
            required: true
        },
        prefixpath: {
            type: String
        }
    },
    data () {
        return {
            open: true
        }
    },
    computed: {
        isFolder () {
            return this.data.subMenu && this.data.subMenu.length
        },
        path () {
            if (this.prefixpath) {
                return `/docs/${this.prefixpath}/${this.data.routePath}`
            }
            return `/docs/${this.data.routePath}`
        }
    },
    methods: {
        toggle () {
            if (this.isFolder) {
                this.open = !this.open
            }
        }
    }
}
</script>

<style lang="less">
    .docs-navbar-item{
        font-size: 15px;
        .navbar-item-title{
            cursor: pointer;
            padding:8px 0;
            .iconfont{
                font-size:12px;
                color: #98A1A8;
            }
            small{
                padding-left:2px;
                color: #98A1A8;
            }
            &.is-active{
                color: #3cbaff;
            }
        }
        a{
            text-decoration: none;
        }
        .navbar-item-child{
            padding-left:20px;
            .docs-navbar-item{
                font-size:12px;
            }
            .navbar-item-title .icon-arrow-down{
                display: none;
            }
        }
    }
</style>