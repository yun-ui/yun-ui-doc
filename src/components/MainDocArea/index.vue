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

        .theme-color{
            color: #ffffff;
            text-align: center;
            width:200px;
            line-height: 60px;
            border-radius: 4px;
            display: block;
        }
        ul.color{
            padding-left:0;
            font-size:0;
            li{
                width:110px;
                height:44px;
                line-height: 44px;
                display: inline-block;
                margin:10px 20px 10px 0;
                text-align: center;
                border-radius: 4px;
                font-size:12px;
            }
        }
        ul.font-color{
            li{
                width:140px;
            }
        }
        ul.page-color{
            li.mask-color{
                color: #ffffff;
                background: rgba(12,33,63,0.80);
            }
            li.bg-color{
                background: #eaeff3;
            }
            li.border-color{
                background: #dce1e8;
            }
        }
        ul.icon-list{
            padding:0;
            li {
                display: inline-block;
                vertical-align: top;
                width:110px;
                text-align: center;
                font-size:12px;
                margin-bottom: 30px;
                .iconfont{
                    color: #777;
                    cursor: pointer;
                    font-size:40px;
                    &:hover{
                        color: #3cbaff;
                    }
                }
            }
        }
        .utility-position{
            overflow: hidden;
            margin-bottom: 20px;
            >div{
                border-radius: 4px;
                text-align: center;
                width:120px;
                border:1px solid #dce1e8;
            }
        }
        .utility-border{
            .yun-border{
                background-color: rgba(0,0,0,.02);
                padding:10px;
                margin-bottom: 10px;
            }
        }
        .utility-divided{
            padding:10px 0;
            >span{
                padding:0 20px;
                margin-bottom: 10px;
            }
        }
    }
</style>