<template>
  <body>
      <div>
      <div class="card1" v-for="produto  in produtos" :key="produto.ID_PRODUTO">
        <div class="cardTitulo">
          <h1>{{produto.PRODUTO.slice(0,13)}}.</h1>
        </div>
        <img class="img" :src="img">
        <div class="info">
          <h4>{{produto.PRODUTO.slice(0,30)}}...</h4>
        </div>
        <div class="card-preco">
          <span v-money="'R$'">{{produto.PRECO}}</span>
          <!-- <b-button class="buttonComprar" type="submit" @click="comprar()">Comprar</b-button> -->
          <!-- <button class="button-contador">{{produto.ID_PRODUTO}}</button> -->
          <button class="button-contador" >{{contador}}</button>
          <button class="button-contador" @click="add(produto.ID_PRODUTO)">+</button>
          <button class="button-contador" @click="remove">-</button>
          <b-button class="button-add">Add/Produto</b-button>
          <b-button class="button-add">Cancelar</b-button>
        </div>
      </div>
    </div>
  </body>

</template>

<script>
import Img from "../assets/img4.jpeg";
import axios from "axios";
import app from "../App";
export default {
  produtos: "",
  contador: [],
  data: function() {
    return {
      img: Img,
      efeitoClick: null,
      produtos: this.produtos,
      contador:[],
      produto: this.produto
    }
  },
  methods: {
    comprar() {
      this.$router.push("/comprar/");
    },
    test() {
      axios
        .get("http://191.252.103.186/api/produtos")
        .then(response => {
          this.produtos = response.data;
          this.produtos = this.produtos.slice(0, 10);

        })
        .catch(error => {
          console.log(error);
        });
    },
    add(produtoID_PRODUTO){

      this.contador[produtoID_PRODUTO]++

      console.log(this.contador);

  },
  remove(){

       if(this.contador >0){
         this.contador--
       }
  }
  },
  mounted() {
    this.test();
    console.log(this.produtos);

  }
};
</script>

<style>
body{
  background-color:#ffffff;
}
.card1 {
  background-color: hsl(0, 100%, 100%);
  position: relative;
  z-index: 1 !important;
  float: left;
  vertical-align: top;
  font-family: Verdana, sans-serif;
  border: solid 2px #ccc;
  box-shadow: 0 4px 20px 0 rgb(0, 0, 0, 0.3);
  height: 25% !important;
  width: 15%;
  margin: 1% 2% 2% 2%;
  transition-duration: 0.4s;
}
.card1:hover {
  transform: scale(1.1);
  transition-duration: 0.4s;
}
.cardTitulo h1 {
  font-size: 130%;
  font-weight: bold;
  width: 100%;
  padding: 8% 1% 1% 5%;
}
.img {
  width: 14em;
  height: 12em;
  padding: 4%  20%;
  overflow: inherit;
}
.info h4 {
  font-size: 1em;
  font-weight:bold;
  padding: 8px 10px 10px 10px;
  position: relative;
  width: 98%;
  height: 10em;
  max-width: 98%;
  max-height: 3em;
}
.card-preco {
  float: left;
  font-size: 1.5em;
  font-weight:bold;
  padding: 1px 1px 4px 6px;
  margin: 5%;
}
.button-contador{
  background-color: #ffffff;
  position: relative;
  border: solid 0.1px;
  padding: 3px 5px;
  right: -25px;
  outline:none;
  margin: -2%;
}
.button-add {
  font-size: 0.6em;
  position: relative;
  color: #eee;
  background-color: #555;
  border: solid 1px #777;
  border-radius: 5px;
  padding: 3px 5px;
  right: -5px;
  top: 10px;
  margin: 2%;
}
</style>
