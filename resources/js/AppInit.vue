/* resources > js > AppInit.vue */

<template>
    <v-app id="inspire">
        <!-- <v-navigation-drawer
            v-model="drawer"
            app
            clipped
        >
            <v-list dense>
                <v-list-item link to="/">
                    <v-list-item-action>
                        <v-icon>mdi-view-dashboard</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>Dashboard</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item link to="/products">
                    <v-list-item-action>
                        <v-icon>mdi-buffer</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>Products</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>-->

        <v-app-bar
            app
            clipped-left
        >
            <!-- <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon> -->
            <v-toolbar-title>Title</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items class="hidden-sm-and-down">
                <v-btn text>Link One</v-btn>
                <v-btn text>Link Two</v-btn>
                <v-btn text>Link Three</v-btn>
            </v-toolbar-items>
        </v-app-bar> 

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
    export default {
        props: {
            source: String,
        },
        data: () => ({
            drawer: null,
        }),
        created () {
            this.$vuetify.theme.light = true
        },
    }
</script>