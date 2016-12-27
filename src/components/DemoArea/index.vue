<template>
    <section class="demo-area">
        <div class="clearfix demo-title">
            <button class="preview-button"><i class="iconfont icon-close"></i>关闭预览</button>
        </div>
        <div class="phone">
            <div class="demo-container">
                <div class="demo-header">
                    <span class="iconfont icon-arrow-left"></span>
                    YunUI
                </div>
                <iframe></iframe>
            </div>
        </div>
    </section>
</template>

<style lang="less">
    @phoneWidth: 352px;
    @phoneHeight: 690px;
    @demoWidth: 320px;
    @demoHeight: 570px;
    .demo-area {
        position: relative;
        padding: 50px 50px 0 0;
        .demo-title {
            margin-bottom: 32px;
        }
        .preview-button {
            float: right;
            background-color: #3cbaff;
            color: #ffffff;
            height: 40px;
            padding: 0 18px;
            border-radius: 4px;
        }
        .phone {
            position: relative;
            width: @phoneWidth;
            height: @phoneHeight;
            border-radius: 32px;
            background: #637CA3;
            .demo-container {
                position: absolute;
                padding-top:44px;
                top: 60px;
                left: (@phoneWidth - @demoWidth)/2;
                width: @demoWidth;
                height: @demoHeight;
                background: #EAEFF3;
                .demo-header{
                    position: absolute;
                    top:0;
                    left:0;
                    right:0;
                    height:44px;
                    line-height: 44px;
                    color: #ffffff;
                    background-color: #3cbaff;
                    text-align: center;
                    .icon-arrow-left{
                        position: absolute;
                        display: block;
                        width:44px;
                        height:44px;
                        cursor: pointer;
                    }
                }
                iframe {
                    width: 100%;
                    height: 100%;
                    overflow-y: auto;
                }
            }
        }
    }

    .switch-demo-area {
        position: absolute;
        width: 20px;
        height: 20px;
        top: 50%;
        margin-top: -10px;
        left: -10px;
        background-color: #3cbaff;
        cursor: pointer;
    }

    @media screen and (max-width: 1300px) {
        .demo-area {
            display: none;
        }
    }
</style>