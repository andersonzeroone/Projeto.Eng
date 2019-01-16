<template>
  <div>


        <div class="card1">

          <div class="cardInfo">

            <h1>Mercadão Baratino</h1>
            <img  class="img"   :src="img"/>
            <div class="info">
              <h4>Arroz XXXXX </h4>
              <p>Arroz Branco </p>
            </div>


            <div class="card-preco">
              <span>R$ 23</span>
            </div>
          </div>
        </div>




  </div>

</template>

<script>


import Img from '../assets/img4.jpeg'
export default {
      data:function(){
      return {
        img : Img,
        efeitoClick: null
      }
   }
}
</script>

<style>

.card1{

  position: relative;
  z-index: 1 !important;
  padding: 1% 1.8% ;
  float: left;
  vertical-align: top;
  font-family: Verdana, sans-serif;
  border: solid 2px #ccc;
  box-shadow: 0 4px 20px 0 rgb(0, 0,0, 0.3);
  height: 400px;
  width: 260px;
  margin: 25px 30px;
transition-duration: 0.4s;


}

.card1:hover{


 /* font-family: Verdana, sans-serif;
  border: solid 2px #ccc;
  box-shadow: 0 4px 20px 0 rgb(0, 0,0, 0.3);
  height: 420px;
  width: 280px; */
  transform: scale(1.1);
  transition-duration: 0.4s;
}

.card h1{

  font-size: 23px;
  width: 100%;
  padding: 8px 5px;



}

.img {
  width: 95%;
  height: 95%;
  padding: 5px 10px;
  overflow:inherit;

}
.info h4{

   font-size: 1.4em;
   font-weight: 100;
   padding: 5px 2px;
}

.preco{

   float: right;
   padding: 10px;
}
</style>
