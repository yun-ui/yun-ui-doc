<template>
    <div class="index-page">
        <div class="index-page-content">
            <div class="photo-images">
                <img src="../assets/phone.png">
            </div>
            <div class="enter-container">
                <h1>YunUI</h1>
                <h2 class="slogan">让开发更有趣</h2>
                <h2 class="translation">Real simple. Real fun.</h2>
                <div class="enter-content">
                    <div class="enter-item">
                    <router-link :to="{path: '/docs'}">

                            <img class="enter-item-component" src="../assets/component.png" />
                            <h3>组件</h3>
                            <span>Component</span>

                    </router-link>
                    </div>
                    <div class="enter-item">
                        <img class="enter-item-resources" src="../assets/resources.png" />
                        <h3>资源</h3>
                        <span>Resources</span>
                    </div>
                </div>
            </div>
        </div>
        <footer class="copyright">
            <span class="ui-name">YunUI</span><span>© 1993-2016 金蝶国际软件集团有限公司版权所有粤ICP备05041751号</span>
        </footer>
    </div>
</template>

<style lang="less">
    .index-page{
        background:url("../assets/wavy.png") #3cbaff  no-repeat content-box;
        background-position: left bottom 98px ;
        -webkit-background-size: 100% 215px;
        background-size: 100% 215px;
    }
    .index-page-content{
        width:1200px;
        margin: 0 auto;
        overflow: hidden;
        color: #ffffff;
        padding:174px 0 40px 0;
        .photo-images{
            width:468px;
            float: left;
        }
        .enter-container{
            margin-left:468+200px;
            h1{
                width:350px;
                border-bottom: 1px solid #ffffff;
                font-size:48px;
            }
            .slogan,
            .translation{
                margin-top:20px;
                font-weight: 100;
                color: #FFFFFF;

            }
            .slogan{
                font-size: 26px;
                letter-spacing: 27px;
                }
            .translation{
                font-size: 18px;
                letter-spacing: 6px;
            }
        }
        .enter-content{
            margin-top:50px;
            .enter-item{
                vertical-align: middle;
                width:200px;
                height:220px;
                display: inline-block;
                text-align: center;
                background-color: #ffffff;
                border-radius: 10px;
                margin-right: 50px;
                cursor: pointer;
                a{
                    text-decoration: none;
                }
                &:last-child{
                    margin-right: 0;
                }
                h3{
                    color: #3cbaff;
                    font-size:16px;
                }
                .enter-item-component{
                    margin-top:35px;
                    width:72px;
                }
                .enter-item-resources{
                    margin-top:47px;
                    margin-bottom: 10px;
                    width:90px;
                }
                span{
                    margin-top: 8px;
                    font-size: 14px;
                    color: #7A797B;
                }
            }
        }
    }
    footer.copyright{
        font-size:12px;
        text-align: center;
        height: 98px;
        line-height: 98px;
        background-color: #ffffff;
        color: #98A0AA;
        .ui-name{
            font-size:16px;
            margin-right:18px;
        }
    }
</style>