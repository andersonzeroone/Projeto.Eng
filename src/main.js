// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */



Vue.directive('money', {
  inserted(el, binding){
      const amount = parseFloat(el.innerHTML).toFixed(2)
          .replace('.', ',')
          .replace(/(\d)(?=(\d{3})+\,)/g, '$1.')
      el.innerHTML = `${binding.value} ${amount}`
  }
})

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})


