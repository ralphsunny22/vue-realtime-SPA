<template>
    <div class="mt-3">
      <v-card>
          <v-card-title>
              <div class="headline">{{data.user}}</div>
              <div class="ml-2">said {{data.created_at}}</div>
              <v-spacer></v-spacer>
              <like :content = "data"></like>
          </v-card-title>

          <v-divider></v-divider>

          <edit-reply 
          v-if="editing"
          :reply=data
          ></edit-reply>

          <v-card-text v-else color="red" v-html="reply"></v-card-text>

          <v-divider></v-divider>

        <div v-if="!editing">
            <v-card-actions v-if="own">
              <v-btn class="ma-2" color="blue" dark @click="edit">
                Edit
                <v-icon dark right>
                mdi-pencil
                </v-icon>
            </v-btn>

            <v-btn class="ma-2" color="red" dark @click="destroy">
                Delete
                <v-icon dark right>
                mdi-delete
                </v-icon>
            </v-btn>
          </v-card-actions>
        </div>

      </v-card>
    </div>
</template>

<script>
import md from 'marked'
import EditReply from './EditReply'
import Like from '../likes/Like'
export default {
    props:['data', 'index'], //from replies
    components:{EditReply, Like},
    data(){
        return {
            editing:false,
            beforeEditReplyBody:''
        }
    },
    computed:{
        own(){
            return User.own(this.data.user_id)
        },
        
        reply(){
            return md.parse(this.data.reply)
        }
    },

    created(){
        this.listen()
    },

        methods:{
            edit(){
            this.editing = true,
            this.beforeEditReplyBody = this.data.reply
        },
            destroy(){
            EventBus.$emit('deleteReply',this.index)
            },

            listen(){
            EventBus.$on('cancelEditing',()=>{ //from EditReply.vue
                this.editing = false
                // if(reply !== this.data.reply){
                //     this.data.reply = this.beforeEditReplyBody
                //     this.beforeEditReplyBody = ''
                // }
            })
        }
        }
        
        
    
}
</script>

<style>

</style>