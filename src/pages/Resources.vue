<template>
    <div class="recources-page">
        <div class="banner">
            <h1>资源中心</h1>
            <p>这里提供云之家相关设计资源的下载，更多资源将持续更新</p>
        </div>
        <div class="panel-container">
            <div class="panel">
                <img src="../assets/resources.png" />
                <h2>Sketch设计文档</h2>
                <p>云之家标准视觉设计控件库<br/>快速开发出符合云之家标准的应用</p>
                <a class="button" href="">下载</a>
            </div>
        </div>
    </div>
</template>

<style lang="less" scoped>
    .banner{
        padding:140px 0 240px;
        color: #ffffff;
        text-align: center;
        background: #3cbaff url("../assets/resources-banner-bg.png") no-repeat center top/auto 400px;
        h1{
            font-size:36px;
            font-weight: 100;
        }
        p{
            margin-top:18px;
            font-size: 18px;
            font-weight: 100;
        }
    }
    .panel-container{
        text-align: center;
        position: relative;
        margin-top:-160px;
        padding-bottom: 100px;
        .panel{
            display: inline-block;
            width:372px;
            height:400px;
            text-align: center;
            background: #FFFFFF;
            box-shadow: 0 2px 10px 0 rgba(60,186,255,0.40);
            border-radius: 10px;
            img{
                width:115px;
                margin-top:60px;
                margin-bottom: 20px;
            }
            h2{
                font-size:20px;
                color: #3cbaff;
            }
            p{
                font-size:14px;
                margin: 20px 0;
                padding:0 80px;
            }
            .button{
                display: inline-block;
                text-decoration: none;
                width:160px;
                line-height: 30px;
                border-radius: 30px;
                color: #ffffff;
                background-color: #3CBAFF;
                font-size:14px;
                font-weight: 100;
                &:hover{
                    background-color: fade(#3CBAFF,50%) ;
                }
            }
        }
    }
</style>