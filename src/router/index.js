import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import header from '@/components/header';
import footer from '@/components/footer'
import jobDetails from '@/components/jobDetails'
import applyHere from '@/components/applyHere'
import preview from '@/components/preview'

Vue.component('headerStuff', header)
Vue.component('footerStuff', footer)
Vue.component('jobDetails', jobDetails)
Vue.component('apply', applyHere)
Vue.component('preview', preview)


Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
  }]
})
