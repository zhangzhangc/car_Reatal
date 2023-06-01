    

<template>
  


    <div class="title">
      <h2>汽车</h2>
    </div>

    <div class="row row-cols-1 row-cols-md-4 g-4">
      <div class="col" v-for="item in 8">
        <div class="card">
          <img src="https://cdn.atzuche.com/pc/day/ssx.jpg" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional
              content. This content is a little bit longer.</p>
          </div>
        </div>
      </div>
    </div>

    <div class="title">
      <h2>热门品牌</h2>
    </div>

    <div class="row row-cols-2 row-cols-md-6 g-4 ">
      <div class="col col1" v-for="item in 12">
        <div class="card ">
          <img src="https://cdn.atzuche.com/pc/hotbrand/ad.jpg" class="card-img-top car_category" alt="...">
          <h3 class="des">奥迪</h3>

        </div>
      </div>
    </div>


    <div class="title">
      <h2>租车专题</h2>
    </div>


    <div class="row row-cols-1 row-cols-md-4 g-4">
      <div class="col" v-for="item in 4">
        <div class="card">
          <img src="https://carphoto.atzuche.com/pcWebService/imageFile/1671526624000.jpg" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">五一租车</h5>
            <p class="card-text">2023五一租车专题，提供五一租车价格，五一租车攻略、五一租车具体车型推荐等，更有超多五一租车优惠；共享汽车模式，让你享受随时随地的共享租车体验！</p>
          </div>
        </div>
      </div>
    </div>




</template>
<style scoped>
.des {
  /* position: absolute;
  top: 150px;
  left: 70px; */

  color: #fff;
  font-size: 16px;
  line-height: 24px;
  position: absolute;
  bottom: 15px;
  text-align: center;
  z-index: 9;
  left: 0;
  width: 100%;
}

.car_category {
  border-radius: 50%;
}

.card {
  border: 0
}


.title {
  margin-top: 20px;
  height: 70px;
  background-color: rgb(248, 248, 248);
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;

}

img {
  width: 100%;
  height: 100%;
}

.col:hover {
  cursor: pointer;
  margin-top: 20px;
  border-radius: 50%;
}



/* 演示分割 */
</style>




