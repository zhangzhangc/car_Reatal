<script setup>


import LayoutNav from '@/views/Layout/components/LayoutNav.vue'
import Page from '@/components/Page.vue'



</script>
<template>
    <LayoutNav />

    <div class="page-aside">
        <header>
            <h4>热门品牌</h4>

        </header>
        <div class="list">
            <div class="item active"><a>全部</a></div>
            <div class="item "><a>宝马</a></div>
            <div class="item"><a>玛莎拉蒂</a></div>
            <div class="item"><a>捷豹</a></div>
            <div class="item"><a>保时捷</a></div>
            <div class="item"><a>奥迪</a></div>
            <div class="item"><a>迷你</a></div>
            <div class="item"><a>凯迪拉克</a></div>
            <div class="item"><a>蔚来</a></div>
            <div class="item"><a>特斯拉</a></div>
            <div class="item"><a>奔驰</a></div>
            <div class="item"><a>本田</a></div>
            <div class="item"><a>别克</a></div>
            <div class="item"><a>大众</a></div>
            <div class="item"><a>福特</a></div>
        </div>
    </div>


    <div class="row row-cols-1 row-cols-md-2 g-4">
        <div class="col" v-for="item in 6">
            <div class="card mb-3 " style="max-width: 540px;">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="https://carphoto.atzuche.com/pcWebService/imageFile/1680835310140.jpg" alt="..."
                            style="width: 100%; height: 100%; border-radius:2%;">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <header>
                                <h2>宝马 M4(进口)</h2>
                                <div class="price">￥<strong>1623</strong>/天</div>
                            </header>



                            <!-- <p class="card-text"> -->








                            <!-- </p> -->
                            <p class="info">沪A***41<!-- --> | <!-- -->自动挡<!-- --> |<!-- --> <!-- -->3.0T</p>

                            <div class="tags">
                                <p class="tag">新车保证</p>
                                <p class="tag">收藏最多</p>
                            </div>
                            <div class="msglist">
                                <div class="msg">车子嘎嘎新，租车体验很好</div>
                                <div class="msg">好评，体验很好</div>
                            </div>

                            <button class="booking">立即预定</button>
                            <!-- <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>






    <Page />
    <h2>我是短租页面</h2>
</template>
<style scoped>
header {

    display: flex;

    align-items: center;
    padding: 10px 0;
    position: relative;
}

.page-aside {
    /* width: px; */
    margin-right: 16px;
}

.list {

    display: flex;

    flex-wrap: wrap;
    margin-right: -8px;
    margin-bottom: 8px;
}

.list .item {
    display: block;
    width: 10%;
    padding: 4px 8px 4px 0;
}

.list a {
    border: 1px solid rgba(60, 60, 90, .1);
    height: 32px;
    border-radius: 16px;

    display: flex;

    align-items: center;

    justify-content: center;
    font-size: 12px;
    cursor: pointer;
}

.item.active a {
    color: #00cf97;
    border: 1px solid #00cf97;
}

.card-body header {
    display: flex;


}

.card-body header h2 {
    flex: 1 2;
    font-size: 20px;
}

.card-body header .price {

    display: flex;
    font-size: 12px;

    align-items: baseline;
    position: relative;
    right: 10px;
    top: 20px;
}

.card-body header .price strong {
    display: block;
    font-size: 20px;
    font-weight: 700;
}

.card-body .info {
    display: block;

    font-size: 12px;
    color: rgba(60, 60, 90, .6);
    margin-bottom: 2px;
}



.card-body .tags {

    display: flex;
    /* margin-bottom: 6px; */
    margin-top: 5px;
}

.card-body .tags .tag {
    display: block;
    border: 1px solid rgba(191, 120, 44, .2);
    color: #bf782c;
    margin-right: 4px;
    border-radius: 4px;
    padding: 2px 4px;
    line-height: 1;
    font-size: 12px;
}

.card-body .msglist {

    display: flex;

    flex-direction: column;

    align-items: flex-start;
}

.card-body .msglist .msg {
    background-color: rgba(44, 155, 142, .05);
    border-radius: 50px;
    margin-bottom: 4px;
    padding: 4px 8px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    max-width: 340px;
    font-size: 12px;
    color: #2c9b8e;
}

.card-body .booking {
    position: absolute;
    right: 10px;
    bottom: 10px;
    width: 88px;
    height: 32px;
    background-color: #00cf97;
    border: 0;
    display: flex;

    align-items: center;

    justify-content: center;
    color: #fff;
    font-size: 12px;
    font-weight: 700;
    border-radius: 44px;
    cursor: pointer;
}
</style>