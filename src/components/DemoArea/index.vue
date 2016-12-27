<template>
    <section class="demo-area">
        <div class="phone">
            <div class="demo-container">
                <iframe src="https://yun-ui.github.io/yun-ui/" id="demoIframe"></iframe>
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
                top: 60px;
                left: (@phoneWidth - @demoWidth)/2;
                width: @demoWidth;
                height: @demoHeight;
                background: #EAEFF3;
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