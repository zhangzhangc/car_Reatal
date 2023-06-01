<script setup>
import LayoutNav from '@/views/Layout/components/LayoutNav.vue';

import Page from '@/components/Page.vue'
</script>

<template>
    <LayoutNav />




    <div class="album py-5 bg-light">



        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3">
            <div class="col" v-for="item in 8">
                <div class="card shadow-sm">

                    <img src="https://carphoto.atzuche.com/car/21/05/303892602/1666146058265_3.jpg?x-oss-process=image/resize,m_lfit,h_315,w_480"
                        alt="">
                    <div class="card-body">
                        <h5 class="card-title">蔚来 ES6 电动车 自动挡</h5>
                        <p class="card-text">
                        <p class="desc">沪A****68
                            <span>5.0分</span>
                        </p>


                        <p class="price">
                            <span>8370</span>
                            元/月均
                        </p>
                        </p>
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="btn-group">
                                <button type="button" class="btn btn-sm btn-outline-secondary">详情</button>

                            </div>
                            <small class="text-muted">9 mins</small>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
    <Page/>
    <h2>我是长租页面</h2>
</template>

<style scoped> .card-body .desc span {
     color: #f63;
 }

 .card-body .price {
     color: #ff4d3b;
     font-size: 12px;
 }

 .card-body .price span {
     font-size: 18px;
     font-weight: 700;
 }
</style>