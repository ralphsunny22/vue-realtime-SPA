<template>
  <div>
      <!-- <v-btn icon @click="likeIt">
          <v-icon :color="color">favorite</v-icon> {{count}}
      </v-btn> -->
      <v-btn :color="color" dark @click="likeIt"> Likes {{ count }}</v-btn>
  </div>
</template>

<script>
export default {
    props:['content'], //from Reply.vue. 'content is a single reply'
    data(){
        return {
            liked:this.content.liked, //from ReplyResource
            count:this.content.like_count
        }
    },

    computed:{
        color(){
            return this.liked ? 'red' : 'red lighten-4';
        }
    },

    created(){

        //public channel. Similarly used in "Replies.vue", to check for any "deleteReplyChannel"
        Echo.channel('likeChannel')
        .listen('LikeEvent', (e) => {
            //console.log(e);
            if(this.content.id == e.id){
                ///this.liked = !this.liked
                if(e.type == 1){
                    this.count ++
                    this.liked = true
                } else{
                   this.count --
                    this.liked = false 
                }
                     
                }
        });

        
    },

    methods:{
        likeIt(){
            //check to protect backend auth
            if(User.loggedIn()){
                this.liked ? this.decr() : this.incr()
                this.liked = !this.liked
            }
        },
        //backend handles 'likes' for only auth user
        incr(){
            axios.post(`/api/like/${this.content.id}`)
            .then(res => this.count ++)
            
        },
        decr(){
            axios.delete(`/api/like/${this.content.id}`)
            .then(res => this.count --)
        }
    }
}
</script>

<style>

</style>