<template>
<body>
  <header>
    <div class="cabecalho cabecalho-default cabecalho-fixed-top">
      <b-navbar toggleable="md">
        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
        <b-navbar-brand class="marca" href="#">Zap-Compras</b-navbar-brand>

        <b-collapse is-nav id="nav_collapse">
          <b-navbar-nav class="menu">
            <b-navbar-nav>
              <b-nav-item href="#">Promoções</b-nav-item>
            </b-navbar-nav>
            <b-nav-item-dropdown>
              <template slot="button-content">
                <em>Produtos</em>
              </template>
              <b-dropdown-item href="#">>Produtos de Limpenza</b-dropdown-item>
              <b-dropdown-item href="#">>Produtos n/Per..</b-dropdown-item>
            </b-nav-item-dropdown>

            <b-nav-item-dropdown>
              <template slot="button-content">
                <em>Mercados</em>
              </template>
              <b-dropdown-item href="#">>Pague Mais</b-dropdown-item>
              <b-dropdown-item href="#">>Baratino</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-form>
              <b-form-input
                class="barraPesquisa"
                type="text"
                placeholder="Buscar Produtos ou mercados..."
              />
              <b-button class="button-buscar" type="submit">Buscar</b-button>
            </b-nav-form>

            <img class="car" :src="img">

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
      <div class="card2">
      <div class="cardInfo">
        <h1>Mercadão Baratino</h1>
        <img class="img" :src="img2">
        <div class="info">
          <h4>Arroz XXXXX</h4>
          <p>Arroz Branco</p>
        </div>
        <div class="card-preco">
          <span>R$ 23</span>
        </div>
      </div>
    </div>
    <div class="card2">
      <div class="cardInfo">
        <h1>Mercadão Baratino</h1>
        <img class="img" :src="img2">
        <div class="info">
          <h4>Arroz XXXXX</h4>
          <p>Arroz Branco</p>
        </div>
        <div class="card-preco">
          <span>R$ 23</span>
        </div>
      </div>
    </div>
</body>
</template>

<script>
import Img from "../assets/car.png"
import Img2 from "../assets/img4.jpeg"

import Cards from "./cards"

export default {
  data: function() {
    return {
      img: Img,
      img2:Img2
    }
  }
}
</script>

<style>
body {
  margin-top: 100px;
  margin-left: 1em;
}

.cabecalho {
  background-color: #ffff00;
  position: fixed;
  z-index: 99;
  width: 100%;
  height: 11%;
  box-sizing: border-box;
  top: 0;
  left: 0;
  border-bottom: solid 5px #ff4000;
}


.marca {
  float: right;
  font-size: 25px;
  font-weight: bold;
  font-style: italic;
  color: red !important;
}

.menu {
  font-size: 20px;
  font-weight: bold;
  color: red;
}

.barraPesquisa {
  float: right;
  border: solid 1px #777;
  height: 40px;
  padding: 5px 120px;
}

.button-buscar {
  float: right;
  color: #eee;
  background-color: #555;
  border: solid 1px #777;
  border-radius: 5px;
  padding: 5px 10px;
  margin: 5px 10px;
}

.car {
  float: right;
  height: 2.8em;
}

.acesso {
  font-size: 20px;
  font-weight: bold;
  font-style: normal;
  float: right;
}

.card2 {
  position: relative;
  z-index: 1 !important;
  padding: 1% 1.8%;
  float: left;
  vertical-align: top;
  font-family: Verdana, sans-serif;
  border: solid 2px #ccc;
  box-shadow: 0 4px 20px 0 rgb(0, 0, 0, 0.3);
  height: 450px;
  width: 80%;
  margin: 60px 50px;
  transition-duration: 0.4s;
}
.cardInfo h1 {
  float:right;
  font-size: 200%;
  font-weight: bold;
  width: 100%;
  padding-right: 100%;
}

.img {
  width: 20%;
  height: 95%;
  padding: 1px 10px;
  overflow: inherit;
}

.info h4 {
  font-size: 1.4em;
  font-weight: 100;
  padding: 5px 2px;
}

.card-preco {
  float: left;
  padding: 5px;
}
</style>
