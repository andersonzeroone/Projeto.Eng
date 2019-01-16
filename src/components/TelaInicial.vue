<template>
  <div>
     <Cards/>
    <Barramenu/>

  </div>

</template>

<script>

import Img from '../assets/car.png'

import Cards from './cards'

import Barramenu from './BarraMenu'

export default {

     data:function(){
      return {
        img : Img
      }
   },
   components:{

     Cards,
     Barramenu

   }
}
</script>

<style>


</style>
