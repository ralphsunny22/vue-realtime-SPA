<template>
<!-- eslint-disable vue/no-use-v-if-with-v-for,vue/no-confusing-v-for-v-if -->
    <v-app id="inspire">
       

        <Toolbarr></Toolbarr>

        <v-main>
            <v-container>
                <router-view></router-view>
            </v-container>
        </v-main>

        <v-footer app>
            <span>© {{ new Date().getFullYear() }}</span>
        </v-footer>
    </v-app>
</template>

<script>

import Toolbarr from './views/Toolbarr.vue';
    export default {
  components: { Toolbarr },
        
    }
</script>