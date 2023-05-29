    

<template>


<div class="header"><h2>汽车</h2> </div>


  <div class="row row-cols-1 row-cols-md-5 g-4">



    <div class="col" v-for="item in 6" >
      <div class="card"  >
        <img src="https://cdn.atzuche.com/pc/day/ssx.jpg" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional
            content. This content is a little bit longer.</p>
        </div>
      </div>
    </div>

  </div>

  





</template>
<style scoped>

.header{
 
  height: 70px;
  background-color: gray;
  text-align: center;

}
img {
  width: 100%;
  height: 100%;
}
.col:hover{
  cursor: pointer;


}


</style>
