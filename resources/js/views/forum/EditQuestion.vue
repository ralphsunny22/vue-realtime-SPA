<template>
     <v-form
    @submit.prevent="update"
  >

    <v-text-field
      v-model="form.title"
      label="Title"
      type="text"
      required
    ></v-text-field>
    
    
    <vue-simplemde v-model="form.body" />

    <v-btn class="ma-2" color="blue" dark type="submit">
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

  </v-form>
</template>

<script>
import VueSimplemde from 'vue-simplemde'
export default {
    props:['data'],

    data(){
        return {
            form : {
                title : null,
                body : null
            }
        }
    },

    components: {
      VueSimplemde
    },

    methods:{
        cancel(){
            EventBus.$emit('cancelEditing')
        },
        update(){
            axios.patch(`/api/question/${this.form.slug}`,this.form)
            .then(res => this.cancel())
        }
    },

    created(){
        this.form = this.data //fill up form object with props data
    }
}
</script>

<style>
@import '~simplemde/dist/simplemde.min.css';
</style>