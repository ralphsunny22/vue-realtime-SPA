<template>
    <v-card>
        <v-container fluid>
        <v-card-title>
            <div>
                <div class="headline">
                    {{data.title}}
                </div>
                <span class="grey--text">{{data.user}} said {{data.created_at}}</span>
            </div>
            <v-spacer></v-spacer>
            <v-btn color="teal" dark>{{replyCount}} Replies</v-btn>
        </v-card-title>

        <v-card-text v-html="body"></v-card-text>

        <div v-if="own">
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
        </div>
         
        </v-container>
    </v-card>
</template>

<script>
import md from 'marked'
export default {
    props:['data'],

    data(){
        return {
            own: User.own(this.data.user_id),
            replyCount:this.data.reply_count
        }
    },

    computed:{
        body(){
            return md.parse(this.data.body)
        }
    },

    created(){

        //Private Channel. Once this channel is perceived, do this
        Echo.private('App.User.' + User.id())
        .notification((notification) => {
            this.replyCount++
        });
        
        //Public channel
        EventBus.$on('deleteReply',()=>{
            this.replyCount--
        });

        //from CreateReply.vue. Used for increasing replies count above
        EventBus.$on('newReply',()=>{
            this.replyCount++
        });
    },

    methods:{
        destroy(){
            axios.delete(`/api/question/${this.data.slug}`)
            .then(res => this.$router.push({name:'forum'}))
            .catch(error => console.log(error.response.data))
        },
        edit(){
            EventBus.$emit('startEditing')
        }
    }
}
</script>

<style>

</style>