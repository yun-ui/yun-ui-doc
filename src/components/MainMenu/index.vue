<template>
    <section class="main-menu">
        <h2 class="title"> <router-link :to="{path: '/'}">YunUI</router-link></h2>
        <ul class="menu">
            <li><router-link :to="{path: '/docs'}">文档</router-link></li>
            <li><router-link :to="{path: '/resources'}">资源</router-link></li>
        </ul>
    </section>
</template>
