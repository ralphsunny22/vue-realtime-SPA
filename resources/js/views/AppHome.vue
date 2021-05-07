<template>
  <div>
    <toolbarr></toolbarr>

    <router-view></router-view>
    
    <app-footer></app-footer>
  </div>
</template>

<script>
import Toolbarr from './Toolbarr'
import AppFooter from './AppFooter'
import Login from './auth/Login'

export default {
  components:{Toolbarr,AppFooter,Login}
}
</script>

<style>

</style>
