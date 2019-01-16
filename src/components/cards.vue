<template>
  <div>
    <div class="card1">
      <div class="cardInfo">
        <h1>Mercadão Baratino</h1>
        <img class="img" :src="img">
        <div class="info">
          <h4>Arroz Vera 1kg</h4>
          <p>Arroz Branco</p>
        </div>
        <div class="card-preco">
          <span>R$ 23</span>
          <b-button class="buttonComprar" type="submit">Comprar</b-button>
        </div>
      </div>
    </div>
    <div class="card1">
      <div class="cardInfo">
        <h1>Pague Mais</h1>
        <img class="img" :src="img">
        <div class="info">
          <h4>Arroz XXXXX</h4>
          <p>Arroz Branco</p>
        </div>
        <div class="card-preco">
          <span>R$ 23</span>
          <b-button class="buttonComprar" type="submit">Comprar</b-button>
        </div>
      </div>
    </div>
    <div class="card1">
      <div class="cardInfo">
        <h1>Super Mine-mercadinho</h1>
        <img class="img" :src="img">
        <div class="info">
          <h4>Arroz XXXXX</h4>
          <p>Arroz Branco</p>
        </div>
        <div class="card-preco">
          <span>R$ 23</span>
          <b-button class="buttonComprar" type="submit">Comprar</b-button>
        </div>
      </div>
    </div>
    <div class="card1">
      <div class="cardInfo">
        <h1>Preço Boom</h1>
        <img class="img" :src="img">
        <div class="info">
          <h4>Arroz XXXXX</h4>
          <p>Arroz Branco</p>
        </div>
        <div class="card-preco">
          <span>R$ 23</span>
          <b-button class="buttonComprar" type="submit">Comprar</b-button>
        </div>
      </div>
    </div>
    <div class="card1">
      <div class="cardInfo">
        <h1>Mercadão Baratino</h1>
        <img class="img" :src="img">
        <div class="info">
          <h4>Arroz XXXXX</h4>
          <p>Arroz Branco</p>
        </div>
        <div class="card-preco">
          <span>R$ 23</span>
          <b-button class="buttonComprar" type="submit">Comprar</b-button>
        </div>
      </div>
    </div>
    <div class="card1">
      <div class="cardInfo">
        <h1>Mercadão Baratino</h1>
        <img class="img" :src="img">
        <div class="info">
          <h4>Arroz XXXXX</h4>
          <p>Arroz Branco</p>
        </div>
        <div class="card-preco">
          <span>R$ 23</span>
          <b-button class="buttonComprar" type="submit">Comprar</b-button>
        </div>
      </div>
    </div>
    <div class="card1">
      <div class="cardInfo">
        <h1>Mercadão Baratino</h1>
        <img class="img" :src="img">
        <div class="info">
          <h4>Arroz XXXXX</h4>
          <p>Arroz Branco</p>
        </div>
        <div class="card-preco">
          <span>R$ 23</span>
          <b-button class="buttonComprar" type="submit">Comprar</b-button>
        </div>
      </div>
    </div>
    <div class="card1">
      <div class="cardInfo">
        <h1>Mercadão Baratino</h1>
        <img class="img" :src="img">
        <div class="info">
          <h4>Arroz XXXXX</h4>
          <p>Arroz Branco</p>
        </div>
        <div class="card-preco">
          <span>R$ 23</span>
          <b-button class="buttonComprar" type="submit">Comprar</b-button>
        </div>
      </div>
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
  height: 400px;
  width: 260px;
  margin: 25px 30px;
  transition-duration: 0.4s;
}

.card1:hover {
  transform: scale(1.1);
  transition-duration: 0.4s;
}

.cardInfo h1 {

  font-size: 130%;
  font-weight: bold;
  width: 100%;
  padding: 8%  1% 2%  5% ;
}

.img {
  width: 210px;
  height: 190px;
  padding: 2% 15%;
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
  right: -65px;
  top: 8px;

}
</style>
