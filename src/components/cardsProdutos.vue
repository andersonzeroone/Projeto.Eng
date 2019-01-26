<template>
  <div>
        <div class="card1" v-for="produto  in produtos" :key="produto.ID_PRODUTO">
          <div class="cardTitulo">
            <h1>Mercadão Baratino</h1>
            <img class="img" :src="img">
            <div class="info">
              <h4></h4>
              <p>{{produto.PRODUTO}}</p>
            </div>
            <div class="card-preco">
              <span>R${{produto.PRECO}}</span>
              <b-button class="buttonComprar" type="submit" @click="comprar()">comprar</b-button>
            </div>
          </div>
        </div>
  </div>
</template>

<script>
import Img from "../assets/img4.jpeg";
import axios from "axios";


//produto;

export default {
  produtos: '',
  data: function() {
    return {
      img: Img,
      efeitoClick: null,
      produtos: this.produtos
    };
  },
  methods: {
    comprar() {
      this.$router.push("/comprar/");
    },
    test() {

 for(let card=0; card <=10 ; card++){
         axios
        .get("http://191.252.103.186:8080/api/produtos")
        .then(response => {

            this.produtos = response.data;

            console.log(this.produtos);

        })
        .catch(error => {
          console.log(error);

        })

}
    }
  },
  mounted() {
    this.test();
    console.log(this.produtos)
  }
};
</script>

<style>
.card1 {
  position: relative;
  z-index: 1 !important;

  float: left;
  vertical-align: top;
  font-family: Verdana, sans-serif;
  border: solid 2px #ccc;
  box-shadow: 0 4px 20px 0 rgb(0, 0, 0, 0.3);
  height: 10% !important;
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
  padding: 8% 1% 2% 5%;
}

.img {
  width: 85%;
  height: 20%;
  padding: 2% 20%;
  overflow: inherit;
}

.info h4 {
  font-size: 1.4em;
  font-weight: 100;
  padding: 4px 20px;
}

.info p {
  font-size: 1.1em;
  font-weight: 100;
  padding: 1px 15px;
}
.card-preco {
  float: left;
  font-size: 150%;
  padding: 1px 15px;
} /**/

.buttonComprar {
  position: relative;

  color: #eee;
  background-color: #555;
  border: solid 1px #777;
  border-radius: 5px;
  padding: 5px 10px;
  right: -35px;
  top: -12px;
}
</style>
