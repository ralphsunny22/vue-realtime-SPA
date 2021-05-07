<template>
    <div class="mt-4">
         <vue-simplemde v-model="body" />
        <v-btn class="ma-2" color="blue" dark @click="submit">
            Reply
            <!-- <v-icon dark right>
            mdi-pencil
            </v-icon> -->
        </v-btn>
    </div>
</template>

<script>
import VueSimplemde from 'vue-simplemde'
export default {
    props:['questionSlug'],
    components: {
      VueSimplemde
    },
    data(){
        return {
            body:null
        }
    },
    methods:{
        submit(){
            axios.post(`/api/question/${this.questionSlug}/reply`,{body:this.body})
            .then(res => {
                this.body = ''
                EventBus.$emit('newReply',res.data.reply) //sending an event b4 using res data. Listenned at Replies.vue
                window.scrollTo(0,0)
            })
        }
    }
}
</script>

<style>
@import '~simplemde/dist/simplemde.min.css';
</style>