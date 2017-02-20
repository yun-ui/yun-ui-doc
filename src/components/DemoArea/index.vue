<template>
    <section class="demo-area">
        <div class="phone" :style="{ visibility: isInIframe ? 'hidden' : '' }">
            <a class="btn-QR-code" @click="getIframeUrl">
                <img src="../../assets/eyes.png">
                <span> 预览</span>
            </a>
            <div class="QR-code-container" v-show="qrcode">
                <div class="QR-code">
                    <canvas width="100" height="100" id="qrcode"></canvas>
                    <p>扫码在手机预览</p>
                </div>
            </div>
            <div class="demo-container">
                <iframe src="/yun-ui/" id="demoIframe"></iframe>
                <!--<iframe src="http://localhost:8089" id="demoIframe"></iframe>-->
                <div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import QRCode from 'qrcode'

export default {
    data () {
        return {
            qrcode: false,
            isInIframe: window.parent !== window
        }
    },
    methods: {
        getIframeUrl () {
            if (this.qrcode === true) {
                this.qrcode = !this.qrcode
                return
            }
            document.getElementById('demoIframe').contentWindow.postMessage({type: 'GETCURRENTURL'}, '*')
            this.qrcode = !this.qrcode
        },
        genQrCode (url) {
            console.log(url)
            const canvas = document.getElementById('qrcode')
            const QRCodeDraw = new QRCode.QRCodeDraw()

            QRCodeDraw.draw(canvas, url, function (error, canvas) {
                if (error) console.error(error)
                console.log('success!')
            })
        }
    },
    mounted () {
        window.addEventListener('message', (e) => {
            if (e.data.demoUrl) {
                this.genQrCode(e.data.demoUrl)
            }
        })
    },
    destoryed () {}
}
</script>
<style lang="less">
    @phoneWidth: 352px;
    @phoneHeight: 690px;
    @demoWidth: 332px;
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
            .btn-QR-code{
                position: absolute;
                top:16px;
                right:16px;
                display: block;
                padding:0 10px;
                line-height: 32px;
                cursor: pointer;
                overflow: hidden;
                background-color: #3CBAFF;
                color: #ffffff;
                vertical-align: middle;
                border-radius: 20px;
                img{
                    max-width:24px;
                }
                >*{
                    vertical-align: middle;
                }
            }
            .QR-code-container,
            .demo-container{
                position: absolute;
                top: 60px;
                left: (@phoneWidth - @demoWidth)/2;
                width: @demoWidth;
                height: @demoHeight;
            }
            .QR-code-container{
                background: rgba(255,255,255,0.8);
                z-index:2;
                text-align: center;
                .QR-code{
                    position: absolute;
                    top:50%;
                    width:100%;
                    margin-top:-80px;
                    canvas{
                        width:140px;
                        height:140px;
                        margin:0 auto;
                    }
                }
            }
            .demo-container {
                background: #EAEFF3;
                iframe {
                    width: 100%;
                    height: 100%;
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

    @media screen and (max-width: 1260px) {
        .demo-area {
            display: none;
        }
    }
</style>