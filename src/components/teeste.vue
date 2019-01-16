<template>
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

              <div class="corpo">

                    <p>

                      AQ: IE 5 & 6 EM WINDOWS?
Se você abrir esta página usando o Microsoft Internet Explorer 5 ou 6 em Windows ("IE5/Win" e "IE6/Win"), notará que nada funciona como descrito no tutorial. Muitos me perguntam por que isso acontece, assim, aqui vai uma explicação. Para começar: o bug é do navegador e não nesta página.

WinIE5 e WinIE6 não reconhecem 'fixed'. Isso é ruim, mas o problema maior é eles não parseiam a propriedade 'position' de forma correta. Se uma navegador não reconhece 'fixed' ele deveria descartar a declaração 'position: fixed' e adotar como fall back o valor prévio de 'position' declarado na folha de estilo. Assim, poderíamos declarar 'position: absolute' antes de 'fixed' e o navegador adotaria aquela declaração. Mas, os WinIE 5 e 6 não adotam este comportamento que é oprevisto nas CSS. A palavra-chave 'fixed' é interpretada erroneamente por aqueles navegadores como 'static'.

Não é possível forçar os WinIE5 e 6 a suportarem 'fixed' mas, existe um work-around para resolver este problema de parseamento. Johannes Koch ensinou-me este truque (em seu compêndio de work-arounds). Em primeiro substitua 'position: fixed' nas declarações de estilo mostradas por 'position: absolute' e a seguir insira a seguinte regra CSS na folha de estilos:

*>#intro {position: fixed}
Navegadores que suportam o seletor '>' (filho) usarão esta regra, mas o que não suportam, em particular os WinIE5 e WinIE6, ignorarão a regra. A regra 'position: absolute' será usada por eles e o menu permanecerá no lugar certo, porém não permanecerá fixo na tela e rolará com ela.

É importante que não haja espaço em branco entre o elemento de combinação de seletores '>'.
AQ: IE 5 & 6 EM WINDOWS?
Se você abrir esta página usando o Microsoft Internet Explorer 5 ou 6 em Windows ("IE5/Win" e "IE6/Win"), notará que nada funciona como descrito no tutorial. Muitos me perguntam por que isso acontece, assim, aqui vai uma explicação. Para começar: o bug é do navegador e não nesta página.

WinIE5 e WinIE6 não reconhecem 'fixed'. Isso é ruim, mas o problema maior é eles não parseiam a propriedade 'position' de forma correta. Se uma navegador não reconhece 'fixed' ele deveria descartar a declaração 'position: fixed' e adotar como fall back o valor prévio de 'position' declarado na folha de estilo. Assim, poderíamos declarar 'position: absolute' antes de 'fixed' e o navegador adotaria aquela declaração. Mas, os WinIE 5 e 6 não adotam este comportamento que é oprevisto nas CSS. A palavra-chave 'fixed' é interpretada erroneamente por aqueles navegadores como 'static'.

Não é possível forçar os WinIE5 e 6 a suportarem 'fixed' mas, existe um work-around para resolver este problema de parseamento. Johannes Koch ensinou-me este truque (em seu compêndio de work-arounds). Em primeiro substitua 'position: fixed' nas declarações de estilo mostradas por 'position: absolute' e a seguir insira a seguinte regra CSS na folha de estilos:

*>#intro {position: fixed}
Navegadores que suportam o seletor '>' (filho) usarão esta regra, mas o que não suportam, em particular os WinIE5 e WinIE6, ignorarão a regra. A regra 'position: absolute' será usada por eles e o menu permanecerá no lugar certo, porém não permanecerá fixo na tela e rolará com ela.
AQ: IE 5 & 6 EM WINDOWS?
Se você abrir esta página usando o Microsoft Internet Explorer 5 ou 6 em Windows ("IE5/Win" e "IE6/Win"), notará que nada funciona como descrito no tutorial. Muitos me perguntam por que isso acontece, assim, aqui vai uma explicação. Para começar: o bug é do navegador e não nesta página.

WinIE5 e WinIE6 não reconhecem 'fixed'. Isso é ruim, mas o problema maior é eles não parseiam a propriedade 'position' de forma correta. Se uma navegador não reconhece 'fixed' ele deveria descartar a declaração 'position: fixed' e adotar como fall back o valor prévio de 'position' declarado na folha de estilo. Assim, poderíamos declarar 'position: absolute' antes de 'fixed' e o navegador adotaria aquela declaração. Mas, os WinIE 5 e 6 não adotam este comportamento que é oprevisto nas CSS. A palavra-chave 'fixed' é interpretada erroneamente por aqueles navegadores como 'static'.

Não é possível forçar os WinIE5 e 6 a suportarem 'fixed' mas, existe um work-around para resolver este problema de parseamento. Johannes Koch ensinou-me este truque (em seu compêndio de work-arounds). Em primeiro substitua 'position: fixed' nas declarações de estilo mostradas por 'position: absolute' e a seguir insira a seguinte regra CSS na folha de estilos:

*>#intro {position: fixed}
Navegadores que suportam o seletor '>' (filho) usarão esta regra, mas o que não suportam, em particular os WinIE5 e WinIE6, ignorarão a regra. A regra 'position: absolute' será usada por eles e o menu permanecerá no lugar certo, porém não permanecerá fixo na tela e rolará com ela.

É importante que não haja espaço em branco entre o elemento de combinação de seletores '>'.
AQ: IE 5 & 6 EM WINDOWS?
Se você abrir esta página usando o Microsoft Internet Explorer 5 ou 6 em Windows ("IE5/Win" e "IE6/Win"), notará que nada funciona como descrito no tutorial. Muitos me perguntam por que isso acontece, assim, aqui vai uma explicação. Para começar: o bug é do navegador e não nesta página.

WinIE5 e WinIE6 não reconhecem 'fixed'. Isso é ruim, mas o problema maior é eles não parseiam a propriedade 'position' de forma correta. Se uma navegador não reconhece 'fixed' ele deveria descartar a declaração 'position: fixed' e adotar como fall back o valor prévio de 'position' declarado na folha de estilo. Assim, poderíamos declarar 'position: absolute' antes de 'fixed' e o navegador adotaria aquela declaração. Mas, os WinIE 5 e 6 não adotam este comportamento que é oprevisto nas CSS. A palavra-chave 'fixed' é interpretada erroneamente por aqueles navegadores como 'static'.

Não é possível forçar os WinIE5 e 6 a suportarem 'fixed' mas, existe um work-around para resolver este problema de parseamento. Johannes Koch ensinou-me este truque (em seu compêndio de work-arounds). Em primeiro substitua 'position: fixed' nas declarações de estilo mostradas por 'position: absolute' e a seguir insira a seguinte regra CSS na folha de estilos:

*>#intro {position: fixed}
Navegadores que suportam o seletor '>' (filho) usarão esta regra, mas o que não suportam, em particular os WinIE5 e WinIE6, ignorarão a regra. A regra 'position: absolute' será usada por eles e o menu permanecerá no lugar certo, porém não permanecerá fixo na tela e rolará com ela.
AQ: IE 5 & 6 EM WINDOWS?
Se você abrir esta página usando o Microsoft Internet Explorer 5 ou 6 em Windows ("IE5/Win" e "IE6/Win"), notará que nada funciona como descrito no tutorial. Muitos me perguntam por que isso acontece, assim, aqui vai uma explicação. Para começar: o bug é do navegador e não nesta página.

WinIE5 e WinIE6 não reconhecem 'fixed'. Isso é ruim, mas o problema maior é eles não parseiam a propriedade 'position' de forma correta. Se uma navegador não reconhece 'fixed' ele deveria descartar a declaração 'position: fixed' e adotar como fall back o valor prévio de 'position' declarado na folha de estilo. Assim, poderíamos declarar 'position: absolute' antes de 'fixed' e o navegador adotaria aquela declaração. Mas, os WinIE 5 e 6 não adotam este comportamento que é oprevisto nas CSS. A palavra-chave 'fixed' é interpretada erroneamente por aqueles navegadores como 'static'.

Não é possível forçar os WinIE5 e 6 a suportarem 'fixed' mas, existe um work-around para resolver este problema de parseamento. Johannes Koch ensinou-me este truque (em seu compêndio de work-arounds). Em primeiro substitua 'position: fixed' nas declarações de estilo mostradas por 'position: absolute' e a seguir insira a seguinte regra CSS na folha de estilos:

*>#intro {position: fixed}
Navegadores que suportam o seletor '>' (filho) usarão esta regra, mas o que não suportam, em particular os WinIE5 e WinIE6, ignorarão a regra. A regra 'position: absolute' será usada por eles e o menu permanecerá no lugar certo, porém não permanecerá fixo na tela e rolará com ela.

É importante que não haja espaço em branco entre o elemento de combinação de seletores '>'.
AQ: IE 5 & 6 EM WINDOWS?
Se você abrir esta página usando o Microsoft Internet Explorer 5 ou 6 em Windows ("IE5/Win" e "IE6/Win"), notará que nada funciona como descrito no tutorial. Muitos me perguntam por que isso acontece, assim, aqui vai uma explicação. Para começar: o bug é do navegador e não nesta página.

WinIE5 e WinIE6 não reconhecem 'fixed'. Isso é ruim, mas o problema maior é eles não parseiam a propriedade 'position' de forma correta. Se uma navegador não reconhece 'fixed' ele deveria descartar a declaração 'position: fixed' e adotar como fall back o valor prévio de 'position' declarado na folha de estilo. Assim, poderíamos declarar 'position: absolute' antes de 'fixed' e o navegador adotaria aquela declaração. Mas, os WinIE 5 e 6 não adotam este comportamento que é oprevisto nas CSS. A palavra-chave 'fixed' é interpretada erroneamente por aqueles navegadores como 'static'.

Não é possível forçar os WinIE5 e 6 a suportarem 'fixed' mas, existe um work-around para resolver este problema de parseamento. Johannes Koch ensinou-me este truque (em seu compêndio de work-arounds). Em primeiro substitua 'position: fixed' nas declarações de estilo mostradas por 'position: absolute' e a seguir insira a seguinte regra CSS na folha de estilos:

*>#intro {position: fixed}
Navegadores que suportam o seletor '>' (filho) usarão esta regra, mas o que não suportam, em particular os WinIE5 e WinIE6, ignorarão a regra. A regra 'position: absolute' será usada por eles e o menu permanecerá no lugar certo, porém não permanecerá fixo na tela e rolará com ela.

            AQ: IE 5 & 6 EM WINDOWS?
Se você abrir esta página usando o Microsoft Internet Explorer 5 ou 6 em Windows ("IE5/Win" e "IE6/Win"), notará que nada funciona como descrito no tutorial. Muitos me perguntam por que isso acontece, assim, aqui vai uma explicação. Para começar: o bug é do navegador e não nesta página.

WinIE5 e WinIE6 não reconhecem 'fixed'. Isso é ruim, mas o problema maior é eles não parseiam a propriedade 'position' de forma correta. Se uma navegador não reconhece 'fixed' ele deveria descartar a declaração 'position: fixed' e adotar como fall back o valor prévio de 'position' declarado na folha de estilo. Assim, poderíamos declarar 'position: absolute' antes de 'fixed' e o navegador adotaria aquela declaração. Mas, os WinIE 5 e 6 não adotam este comportamento que é oprevisto nas CSS. A palavra-chave 'fixed' é interpretada erroneamente por aqueles navegadores como 'static'.

Não é possível forçar os WinIE5 e 6 a suportarem 'fixed' mas, existe um work-around para resolver este problema de parseamento. Johannes Koch ensinou-me este truque (em seu compêndio de work-arounds). Em primeiro substitua 'position: fixed' nas declarações de estilo mostradas por 'position: absolute' e a seguir insira a seguinte regra CSS na folha de estilos:

*>#intro {position: fixed}
Navegadores que suportam o seletor '>' (filho) usarão esta regra, mas o que não suportam, em particular os WinIE5 e WinIE6, ignorarão a regra. A regra 'position: absolute' será usada por eles e o menu permanecerá no lugar certo, porém não permanecerá fixo na tela e rolará com ela.

É importante que não haja espaço em branco entre o elemento de combinação de seletores '>'.
AQ: IE 5 & 6 EM WINDOWS?
Se você abrir esta página usando o Microsoft Internet Explorer 5 ou 6 em Windows ("IE5/Win" e "IE6/Win"), notará que nada funciona como descrito no tutorial. Muitos me perguntam por que isso acontece, assim, aqui vai uma explicação. Para começar: o bug é do navegador e não nesta página.

WinIE5 e WinIE6 não reconhecem 'fixed'. Isso é ruim, mas o problema maior é eles não parseiam a propriedade 'position' de forma correta. Se uma navegador não reconhece 'fixed' ele deveria descartar a declaração 'position: fixed' e adotar como fall back o valor prévio de 'position' declarado na folha de estilo. Assim, poderíamos declarar 'position: absolute' antes de 'fixed' e o navegador adotaria aquela declaração. Mas, os WinIE 5 e 6 não adotam este comportamento que é oprevisto nas CSS. A palavra-chave 'fixed' é interpretada erroneamente por aqueles navegadores como 'static'.

Não é possível forçar os WinIE5 e 6 a suportarem 'fixed' mas, existe um work-around para resolver este problema de parseamento. Johannes Koch ensinou-me este truque (em seu compêndio de work-arounds). Em primeiro substitua 'position: fixed' nas declarações de estilo mostradas por 'position: absolute' e a seguir insira a seguinte regra CSS na folha de estilos:

*>#intro {position: fixed}
Navegadores que suportam o seletor '>' (filho) usarão esta regra, mas o que não suportam, em particular os WinIE5 e WinIE6, ignorarão a regra. A regra 'position: absolute' será usada por eles e o menu permanecerá no lugar certo, porém não permanecerá fixo na tela e rolará com ela.

É importante que não haja espaço em branco entre o elemento de combinação de seletores '>'.
AQ: IE 5 & 6 EM WINDOWS?
Se você abrir esta página usando o Microsoft Internet Explorer 5 ou 6 em Windows ("IE5/Win" e "IE6/Win"), notará que nada funciona como descrito no tutorial. Muitos me perguntam por que isso acontece, assim, aqui vai uma explicação. Para começar: o bug é do navegador e não nesta página.

WinIE5 e WinIE6 não reconhecem 'fixed'. Isso é ruim, mas o problema maior é eles não parseiam a propriedade 'position' de forma correta. Se uma navegador não reconhece 'fixed' ele deveria descartar a declaração 'position: fixed' e adotar como fall back o valor prévio de 'position' declarado na folha de estilo. Assim, poderíamos declarar 'position: absolute' antes de 'fixed' e o navegador adotaria aquela declaração. Mas, os WinIE 5 e 6 não adotam este comportamento que é oprevisto nas CSS. A palavra-chave 'fixed' é interpretada erroneamente por aqueles navegadores como 'static'.

Não é possível forçar os WinIE5 e 6 a suportarem 'fixed' mas, existe um work-around para resolver este problema de parseamento. Johannes Koch ensinou-me este truque (em seu compêndio de work-arounds). Em primeiro substitua 'position: fixed' nas declarações de estilo mostradas por 'position: absolute' e a seguir insira a seguinte regra CSS na folha de estilos:

*>#intro {position: fixed}
Navegadores que suportam o seletor '>' (filho) usarão esta regra, mas o que não suportam, em particular os WinIE5 e WinIE6, ignorarão a regra. A regra 'position: absolute' será usada por eles e o menu permanecerá no lugar certo, porém não permanecerá fixo na tela e rolará com ela.

É importante que não haja espaço em branco entre o elemento de combinação de seletores '>'.
*>#intro {position: fixed}
Navegadores que suportam o seletor '>' (filho) usarão esta regra, mas o que não suportam, em particular os WinIE5 e WinIE6, ignorarão a regra. A regra 'position: absolute' será usada por eles e o menu permanecerá no lugar certo, porém não permanecerá fixo na tela e rolará com ela.

É importante que não haja espaço em branco entre o elemento de combinação de seletores '>'.
AQ: IE 5 & 6 EM WINDOWS?
Se você abrir esta página usando o Microsoft Internet Explorer 5 ou 6 em Windows ("IE5/Win" e "IE6/Win"), notará que nada funciona como descrito no tutorial. Muitos me perguntam por que isso acontece, assim, aqui vai uma explicação. Para começar: o bug é do navegador e não nesta página.

WinIE5 e WinIE6 não reconhecem 'fixed'. Isso é ruim, mas o problema maior é eles não parseiam a propriedade 'position' de forma correta. Se uma navegador não reconhece 'fixed' ele deveria descartar a declaração 'position: fixed' e adotar como fall back o valor prévio de 'position' declarado na folha de estilo. Assim, poderíamos declarar 'position: absolute' antes de 'fixed' e o navegador adotaria aquela declaração. Mas, os WinIE 5 e 6 não adotam este comportamento que é oprevisto nas CSS. A palavra-chave 'fixed' é interpretada erroneamente por aqueles navegadores como 'static'.

Não é possível forçar os WinIE5 e 6 a suportarem 'fixed' mas, existe um work-around para resolver este problema de parseamento. Johannes Koch ensinou-me este truque (em seu compêndio de work-arounds). Em primeiro substitua 'position: fixed' nas declarações de estilo mostradas por 'position: absolute' e a seguir insira a seguinte regra CSS na folha de estilos:

*>#intro {position: fixed}
Navegadores que suportam o seletor '>' (filho) usarão esta regra, mas o que não suportam, em particular os WinIE5 e WinIE6, ignorarão a regra. A regra 'position: absolute' será usada por eles e o menu permanecerá no lugar certo, porém não permanecerá fixo na tela e rolará com ela.

É importante que não haja espaço em branco entre o elemento de combinação de seletores '>'.
*>#intro {position: fixed}
Navegadores que suportam o seletor '>' (filho) usarão esta regra, mas o que não suportam, em particular os WinIE5 e WinIE6, ignorarão a regra. A regra 'position: absolute' será usada por eles e o menu permanecerá no lugar certo, porém não permanecerá fixo na tela e rolará com ela.

É importante que não haja espaço em branco entre o elemento de combinação de seletores '>'.
AQ: IE 5 & 6 EM WINDOWS?
Se você abrir esta página usando o Microsoft Internet Explorer 5 ou 6 em Windows ("IE5/Win" e "IE6/Win"), notará que nada funciona como descrito no tutorial. Muitos me perguntam por que isso acontece, assim, aqui vai uma explicação. Para começar: o bug é do navegador e não nesta página.

WinIE5 e WinIE6 não reconhecem 'fixed'. Isso é ruim, mas o problema maior é eles não parseiam a propriedade 'position' de forma correta. Se uma navegador não reconhece 'fixed' ele deveria descartar a declaração 'position: fixed' e adotar como fall back o valor prévio de 'position' declarado na folha de estilo. Assim, poderíamos declarar 'position: absolute' antes de 'fixed' e o navegador adotaria aquela declaração. Mas, os WinIE 5 e 6 não adotam este comportamento que é oprevisto nas CSS. A palavra-chave 'fixed' é interpretada erroneamente por aqueles navegadores como 'static'.

Não é possível forçar os WinIE5 e 6 a suportarem 'fixed' mas, existe um work-around para resolver este problema de parseamento. Johannes Koch ensinou-me este truque (em seu compêndio de work-arounds). Em primeiro substitua 'position: fixed' nas declarações de estilo mostradas por 'position: absolute' e a seguir insira a seguinte regra CSS na folha de estilos:

*>#intro {position: fixed}
Navegadores que suportam o seletor '>' (filho) usarão esta regra, mas o que não suportam, em particular os WinIE5 e WinIE6, ignorarão a regra. A regra 'position: absolute' será usada por eles e o menu permanecerá no lugar certo, porém não permanecerá fixo na tela e rolará com ela.

É importante que não haja espaço em b
                    </p>


              </div>
    </header>



</template>

<script>

import Img from '../assets/car.png'

export default {

     data:function(){
      return {
        img : Img,
        slide: 0,
       sliding: null
      }
   },

  methods: {
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    }
  }
}
</script>

<style>
.cabecalho{

  background-color: yellow;
  position: fixed ;
  width: 100%;
  box-sizing: border-box;
  top: 0;
  left: 0;
   border-bottom: solid 3px red;


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
  color: red
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
.corpo{

 padding:5% 1.8% ;

}


</style>
