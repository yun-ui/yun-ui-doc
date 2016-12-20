<template>
    <li>
        <div @click="toggle">
            <router-link :to="{ path: path}" v-if="!isFolder">
                {{data.title}}
            </router-link>
            <span v-else>{{data.title}}</span>
            {{hasParent}}
        </div>
        <ul v-show="open" v-if="isFolder">
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
