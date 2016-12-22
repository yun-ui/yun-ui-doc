<template>
    <section class="main-doc-area">
        <div class="markdown-body">
            <slot></slot>
        </div>
    </section>
</template>

<style lang="less">
    .markdown-body{
        min-width:600px;
        max-width: 800px;
        margin: 0 auto;
    }
</style>