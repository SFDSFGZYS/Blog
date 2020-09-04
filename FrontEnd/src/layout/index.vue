<template>
    <div class="layout">
        <div class="header">
            <div class="w">我是头部</div>
        </div>
        <div class="main-container">
            <div class="w">
                <div class="left-aside">左侧边栏</div>
                <div class="right-aside">右侧边栏</div>
                <div class="main">
                    <p>主体内容</p>
                    <p>主体内容</p>
                    <p>主体内容</p>
                    <p>主体内容</p>
                    <p>主体内容</p>
                    <p>主体内容</p>
                    <p>主体内容</p>
                    <p>主体内容</p>
                    <p>主体内容</p>
                    <p>主体内容</p>
                    <p>主体内容</p>
                    <p>主体内容</p>
                    <p>主体内容</p>
                    <p>主体内容</p>
                    <p>主体内容</p>
                    <p>主体内容</p>
                    <p>主体内容</p>
                    <p>主体内容</p>
                    <p>主体内容</p>
                    <p>主体内容</p>
                    <p>主体内容</p>
                    <p>主体内容</p>
                    <p>主体内容</p>
                    <p>主体内容</p>
                    <p>主体内容</p>
                    <p>主体内容</p>
                    <p>主体内容</p>
                    <p>主体内容</p>
                    <p>主体内容</p>
                    <p>主体内容</p>
                    <p>主体内容</p>
                    <p>主体内容</p>
                    <p>主体内容</p>
                    <p>主体内容</p>
                    <p>主体内容</p>
                    <p>主体内容</p>
                    <p>主体内容</p>
                    <p>主体内容</p>
                    <p>主体内容</p>
                    <p>主体内容</p>
                    <p>主体内容</p>
                    <p>主体内容</p>
                    <p>主体内容</p>
                    <p>主体内容</p>
                    <p>主体内容</p>
                    <p>主体内容</p>
                    <p>主体内容</p>
                    <p>主体内容</p>
                    <p>主体内容</p>
                    <p>主体内容</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {}
</script>
<style lang="scss" scoped>
.layout {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: #f1f2f6;
    .w {
        width: 1200px;
        margin: 0 auto;
    }
    .header {
        height: 100px;
        background-color: #fff;
    }
    .main-container {
        position: absolute;
        left: 0;
        top: 100px;
        right: 0;
        bottom: 0;
        overflow: auto;
        .left-aside {
            width: 180px;
            float: left;
            background-color: skyblue;
        }
        .right-aside {
            width: 220px;
            float: right;
            background-color: pink;
        }
        .main {
            overflow: hidden;
            background-color: aqua;
        }
    }
}
</style>