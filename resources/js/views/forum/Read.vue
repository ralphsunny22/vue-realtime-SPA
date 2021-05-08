<template>
    <div v-if="question">
        <edit-question
         v-if="editing"
         :data = question
         ></edit-question>

        <single-question
        v-else
        :data = question
        ></single-question>

       <v-container>
            <replies :question="question"></replies>
            <create-reply v-if="loggedIn" :questionSlug="question.slug"></create-reply>

            <div class="mt-4" v-else >
                <router-link to="/login">Login in to Reply</router-link>
            </div>
        </v-container>

             
    </div>
</template>

<script>
import SingleQuestion from './SingleQuestion'
import EditQuestion from './EditQuestion'
import Replies from '../reply/Replies'
import CreateReply from '../reply/CreateReply'
export default {
    components:{SingleQuestion, EditQuestion, Replies, CreateReply},
    data(){
        return {
            question:null,
            editing:false
        }
    },

    created(){
        this.listen()
        this.getQuestion()
    },

    computed:{
        loggedIn(){
            return User.loggedIn()
        }
    },

    methods:{
        listen(){
            EventBus.$on('startEditing',()=>{
                //console.log('read')
                this.editing = true
            })

            EventBus.$on('cancelEditing',()=>{
                this.editing = false
            })
        },
        getQuestion(){
            axios.get(`/api/question/${this.$route.params.slug}`)
            .then(res => this.question = res.data.data)
        }
    }

    


}
</script>

<style>

</style>