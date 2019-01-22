<template>
  <div>
    <div class="card1">
      <div class="cardTitulo">
        <h1>Mercadão Baratino</h1>
        <img class="img" :src="img">
        <div class="info">
          <h4>Compre mais</h4>
          <p>Pague menos</p>
        </div>
        <div class="card-preco">
          <span>R$ 23</span>
          <b-button class="buttonComprar" type="submit" @click="comprar()" >comprar</b-button>
        </div>
      </div>
    </div>
        <div class="card1">
      <div class="cardTitulo">
        <h1>Mercadão Baratino</h1>
        <img class="img" :src="img">
        <div class="info">
          <h4>Compre mais</h4>
          <p>Pague menos</p>
        </div>
        <div class="card-preco">
          <span>R$ 23</span>
          <b-button class="buttonComprar" type="submit" @click="comprar()" >comprar</b-button>
        </div>
      </div>
    </div>
        <div class="card1">
      <div class="cardTitulo">
        <h1>Mercadão Baratino</h1>
        <img class="img" :src="img">
        <div class="info">
          <h4>Compre mais</h4>
          <p>Pague menos</p>
        </div>
        <div class="card-preco">
          <span>R$ 23</span>
          <b-button class="buttonComprar" type="submit" @click="comprar()" >comprar</b-button>
        </div>
      </div>
    </div>
        <div class="card1">
      <div class="cardTitulo">
        <h1>Mercadão Baratino</h1>
        <img class="img" :src="img">
        <div class="info">
          <h4>Compre mais</h4>
          <p>Pague menos</p>
        </div>
        <div class="card-preco">
          <span>R$ 23</span>
          <b-button class="buttonComprar" type="submit" @click="comprar()" >comprar</b-button>
        </div>
      </div>
    </div>
        <div class="card1">
      <div class="cardTitulo">
        <h1>Mercadão Baratino</h1>
        <img class="img" :src="img">
        <div class="info">
          <h4>Compre mais</h4>
          <p>Pague menos</p>
        </div>
        <div class="card-preco">
          <span>R$ 23</span>
          <b-button class="buttonComprar" type="submit" @click="comprar()" >comprar</b-button>
        </div>
      </div>
    </div>
        <div class="card1">
      <div class="cardTitulo">
        <h1>Mercadão Baratino</h1>
        <img class="img" :src="img">
        <div class="info">
          <h4>Compre mais</h4>
          <p>Pague menos</p>
        </div>
        <div class="card-preco">
          <span>R$ 23</span>
          <b-button class="buttonComprar" type="submit" @click="comprar()" >comprar</b-button>
        </div>
      </div>
    </div>
        <div class="card1">
      <div class="cardTitulo">
        <h1>Mercadão Baratino</h1>
        <img class="img" :src="img">
        <div class="info">
          <h4>Compre mais</h4>
          <p>Pague menos</p>
        </div>
        <div class="card-preco">
          <span>R$ 23</span>
          <b-button class="buttonComprar" type="submit" @click="comprar()" >comprar</b-button>
        </div>
      </div>
    </div>
        <div class="card1">
      <div class="cardTitulo">
        <h1>Mercadão Baratino</h1>
        <img class="img" :src="img">
        <div class="info">
          <h4>Compre mais</h4>
          <p>Pague menos</p>
        </div>
        <div class="card-preco">
          <span>R$ 23</span>
          <b-button class="buttonComprar" type="submit" @click="comprar()" >comprar</b-button>
        </div>
      </div>
    </div>
        <div class="card1">
      <div class="cardTitulo">
        <h1>Mercadão Baratino</h1>
        <img class="img" :src="img">
        <div class="info">
          <h4>Compre mais</h4>
          <p>Pague menos</p>
        </div>
        <div class="card-preco">
          <span>R$ 23</span>
          <b-button class="buttonComprar" type="submit" @click="comprar()" >comprar</b-button>
        </div>
      </div>
    </div>
        <div class="card1">
      <div class="cardTitulo">
        <h1>Mercadão Baratino</h1>
        <img class="img" :src="img">
        <div class="info">
          <h4>Compre mais</h4>
          <p>Pague menos</p>
        </div>
        <div class="card-preco">
          <span>R$ 23</span>
          <b-button class="buttonComprar" type="submit" @click="comprar()" >comprar</b-button>
        </div>
      </div>

    </div>
 <div class="Outros">
      <h1>Outros Mercados</h1>
    </div>
  </div>
</template>

<script>
import Img from "../assets/img4.jpeg";
export default {
  data: function() {
    return {
      img: Img,
      efeitoClick: null
    };
  },
  methods: {
    comprar () {
      this.$router.push('/comprar/');
    }
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
