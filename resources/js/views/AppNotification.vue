<template>
    <div>
        <!-- <v-btn
        class="ma-2"
        text
        icon
        color="red lighten-2"
      >
        <v-icon>mdi-bell</v-icon>5
      </v-btn> -->

      <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
        class="ma-2"
        text
        icon
        :color="color"

          v-bind="attrs"
          v-on="on"
        >
          <v-icon>mdi-bell</v-icon>{{unReadCount}}
        </v-btn>
      </template>

      <v-list>
        <v-list-item
          v-for="item in unRead" :key="item.id"
        >
        <router-link :to="item.path">
          <v-list-item-title @click="readIt(item)">{{item.question}}</v-list-item-title>
        </router-link>
        </v-list-item>

         <v-divider></v-divider>

         <v-list-item
          v-for="item in read" :key="item.id"
        >
          <v-list-item-title>{{item.question}}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    </div>

    
</template>

<script>
export default {
    data(){
        return{
            read: {},
            unRead: {},
            unReadCount: 0
        }
    },

    created(){
        if(User.loggedIn()){
            this.getNotifications()
        }

        //also used in Replies.vue, for realtime reply cards
        Echo.private("App.User." + User.id()).notification(notification => {
          //this.playSound();
          this.unRead.unshift(notification);
          this.unReadCount++;
        });
    },

    methods:{
        getNotifications(){
            axios.post('/api/notifications')
            .then(res => {
                this.read = res.data.read
                this.unRead = res.data.unRead
                this.unReadCount = res.data.unRead.length
            })
        },

        readIt(notification) {
            axios.post("/api/markAsRead", { id: notification.id }).then(res => {
            this.unRead.splice(notification, 1);
            this.read.push(notification);
            this.unReadCount--;
      });
    }
    },

    computed: {
    color() {
      return this.unReadCount > 0 ? "red" : "red lighten-4";
    }
  }
}
</script>

<style>

</style>