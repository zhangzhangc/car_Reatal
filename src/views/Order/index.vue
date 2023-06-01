
<script setup>

import LayoutNav from '@/views/Layout/components/LayoutNav.vue';

</script>

<template>
    <LayoutNav />




    <div class="confirm-order">

        <div class="section-title">
            <h3>订单信息</h3>
            <h5>Total : <span>$315.00</span></h5>
        </div>
        <div class="booking-details">
         <div class="confirmation">
            <div>汽车信息</div>
         </div>
        </div>

        

    </div>







<!-- 
    <h2>我是订单页</h2> -->



    
</template>


<style scoped>
.confirm-order .section-title {
    max-width: 900px;
    margin: 0 auto 20px;
    padding: 0;
    display: flex;
}
.confirm-order .section-title h3{
    flex:1 2;

}
.confirm-order .section-title h5 span {
    font-weight: 700;
    font-size: 20px;
}
.booking-details{
    display: flex;
}
.booking-details .confirmation{
    flex: 1 1;
}
</style>