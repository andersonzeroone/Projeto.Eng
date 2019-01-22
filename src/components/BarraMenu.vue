<template>
    <body>
          <header>
        <div class="cabecalho cabecalho-default cabecalho-fixed-top">
          <b-navbar  toggleable="md">
              <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
              <b-navbar-brand class ="marca" href="#"> Zap-Compras </b-navbar-brand>

            <b-collapse is-nav id="nav_collapse">

               <b-navbar-nav class="menu">
                    <b-navbar-nav>
                        <b-nav-item href="#">Promoções</b-nav-item>
                    </b-navbar-nav>
                    <b-nav-item-dropdown >
                        <template slot="button-content">
                            <em>Produtos</em>
                        </template>
                      <b-dropdown-item href="#"> >Produtos de Limpenza</b-dropdown-item>
                      <b-dropdown-item href="#">  >Produtos n/Per..</b-dropdown-item>
                    </b-nav-item-dropdown>

                    <b-nav-item-dropdown >
                        <template slot="button-content">
                            <em>Mercados</em>
                        </template>
                      <b-dropdown-item href="#"> >Pague Mais</b-dropdown-item>
                      <b-dropdown-item href="#"> >Baratino</b-dropdown-item>
                    </b-nav-item-dropdown>
              </b-navbar-nav>

                  <!-- Right aligned nav items -->
                  <b-navbar-nav class="ml-auto">

                      <b-nav-form>
                          <b-form-input class="barraPesquisa" type="text" placeholder="Buscar Produtos ou mercados..."/>
                           <b-button   class="button-buscar" type="submit">Buscar</b-button>
                      </b-nav-form>

                   <img  class="car"   :src="img"/>

                  <b-nav-item-dropdown class="acesso">
                      <!-- Using button-content slot -->
                      <template slot="button-content">
                        <em>Acesso</em>
                      </template>

                     <b-dropdown-item href="#">Login</b-dropdown-item>
                    <b-dropdown-item href="#">Cadastrar</b-dropdown-item>
                  </b-nav-item-dropdown>

                  </b-navbar-nav>

             </b-collapse>
           </b-navbar>
        </div>

    </header>

  </body>


</template>

<script>

import Img from '../assets/car.png'



export default {

     data:function(){
      return {
        img : Img
      }
   }
}
</script>

<style>
body{
  margin-top: 100px;

}
.cabecalho{

  background-color: #ffff00;
  position: fixed ;
  z-index: 99;
  width: 100%;
  height: 11%;;
  box-sizing: border-box;
  top: 0;
  left: 0;
  border-bottom: solid 5px #ff4000;


}

.marca{
  float: right;
  font-size: 25px;
  font-weight: bold;
  font-style: italic;
  color: red !important;


}
.menu{

  font-size: 20px;
  font-weight: bold;
  color: red;
}
.barraPesquisa{
  float: right;
  border: solid 1px #777;
  height:  40px;
   padding: 5px 120px;
}
.button-buscar{
   float: right;
   color: #eee;
   background-color: #555;
   border: solid 1px #777;
   border-radius: 5px;
   padding: 5px 10px ;
   margin: 5px 10px;


}

.car{

  float: right;
  height: 2.8em;
}
.acesso{
  font-size: 20px;
  font-weight:bold;
  font-style: normal;
  float: right;
}




</style>
