<template>
    <section class="main-doc-area">
        <div class="markdown-body yun-md">
            <slot></slot>
        </div>
    </section>
</template>

<style lang="less">
    @import "../../css/github-gist.css";

    .markdown-body{
        min-width:600px;
        max-width: 800px;
        margin: 0 auto;
    }
    .yun-md{
        font-family: -apple-system,Microsoft YaHei,Arial,Microsoft JhengHei,sans-serif;
        line-height: 1.7;
        color: #5e5e5e;
        font-size:15px;
        h1,h2,h3,h4,h5,h6{
            border:none;
            font-weight: normal;
        }
        h1{
            font-size:28px;
        }
        h2{
            font-size:22px;
            border-bottom: 1px solid #f7f7f7;
        }
        h3{
            margin-top:50px;
            font-size:20px;
        }
        h4{
            font-size:16px;
        }
        h5{
            font-size:14px;
        }
        a{
            color: #3cbaff;
        }
        pre{
            font-size:13.6px;
        }
        code{
            background-color: #f0f6fb;
        }
        table tr{
            height: 40px;
            border-top:none;
            border-bottom: 1px solid #f0f6fb;
        }
        thead tr{
            background-color: #f0f6fb;
            th{
                font-weight: normal;
            }
        }
        tbody tr{
            font-size:13px;
            background-color: #ffffff !important;
        }
        thead th,
        tbody td{
            border:none;
            min-width:100px;
        }
    }
</style>