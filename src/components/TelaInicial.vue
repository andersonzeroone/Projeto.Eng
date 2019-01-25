<template>
  <div>
     <CardsInicio/>
    <Barramenu/>

  </div>

</template>

<script>

import Img from '../assets/car.png'

import CardsInicio from './cardsInicio'

import Barramenu from './BarraMenu'


export default {

     data:function(){
      return {
        img : Img
      }
   },
   components:{

     CardsInicio,
     Barramenu

   }


}
</script>

<style>


</style>
