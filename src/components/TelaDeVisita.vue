<template>
  <div>

     <CardsProdutos/>
    <Barramenu/>

  </div>

</template>

<script>

import Img from '../assets/car.png'

import CardsProdutos from './cardsProdutos'

import Barramenu from './BarraMenu'

export default {

     data:function(){
      return {
        img : Img
      }
   },
   components:{

     CardsProdutos,
     Barramenu

   }
}
</script>

<style>


</style>
