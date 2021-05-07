<template>
    <div>
        <vue-simplemde v-model="reply.reply" />
        
        <v-btn class="ma-2" color="blue" dark @click="update">
            Save
            <v-icon dark right>
            mdi-checkbox-marked-circle
            </v-icon>
            </v-btn>

            <v-btn class="ma-2" color="red" dark @click="cancel">
            Cancel
            <v-icon dark right>
            mdi-cancel
            </v-icon>
        </v-btn>
          
    </div>
</template>

<script>
import VueSimplemde from 'vue-simplemde'
export default {
    props:['reply'], //from Reply.vue
    components: {
      VueSimplemde
    },
    methods:{
        cancel(){
            EventBus.$emit('cancelEditing'); //to Reply.vue
        },
        update(){
            axios.patch(`/api/question/${this.reply.question_slug}/reply/${this.reply.id}`,{body:this.reply.reply})
            // .then(res => this.cancel(this.reply.reply))
            .then(res => this.cancel())
        }
    }
}
</script>

<style>

</style>
