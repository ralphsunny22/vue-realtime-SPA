<template>
    <div>
        <v-app-bar
            app
            clipped-left
        >

        <v-toolbar-title>
            <v-btn text link to="/">Vue SPA</v-btn>
        </v-toolbar-title>

            <v-spacer></v-spacer>

            <app-notification v-if="loggedIn"></app-notification>
            <v-toolbar-items class="hidden-sm-and-down">
                

                <v-btn text link to="/forum">Forum</v-btn>
                <v-btn text link to="/ask" v-if="loggedIn">Ask Question</v-btn>
                <v-btn text link to="/category" v-if="admin">Category</v-btn>
                <v-btn text to="/logout" v-if="loggedIn">Logout</v-btn>

                <v-btn text link to="/login" v-if="!loggedIn">Login</v-btn>
                <v-btn text link to="/register" v-if="!loggedIn">Register</v-btn>
                

                
            </v-toolbar-items>
        </v-app-bar> 
    </div>
</template>

<script>

import AppNotification from './AppNotification.vue'

export default {
    components: {
      AppNotification
    },
   data(){
        return {
            loggedIn: User.loggedIn(),
            admin: User.admin()
            }
        },
    //getting the logout emit event
    created(){
        EventBus.$on('logout', () => {
            User.logout()
        })
    }

}
</script>

<style>

</style>