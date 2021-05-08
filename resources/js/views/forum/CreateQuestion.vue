<template>
     <v-form
    @submit.prevent="create"
  >

  <div v-if="errors">
        <span class="red--text" v-if="errors.title">{{errors.title[0]}}</span>
  </div>
    <v-text-field
      v-model="form.title"
      label="Title"
      type="text"
      required
    ></v-text-field>
    
    

    <div v-if="errors">
        <span class="red--text" v-if="errors.category_id">{{ errors.category_id[0] }}</span>
    </div>
    <v-select
    :items="categories"
    item-text="name"
    item-value="id"
    v-model="form.category_id"
    label="Category"
    autocomplete
    ></v-select>

    <div v-if="errors">
        <span class="red--text" v-if="errors.body">{{errors.body[0]}}</span>
    </div>
    
    <vue-simplemde v-model="form.body" />
    

   

    <v-btn
      color="green"
      type="submit"
      :disabled="disabled"
    >
      Create
    </v-btn>

  </v-form>
</template>

<script>
import VueSimplemde from 'vue-simplemde'
export default {
    components: {
      VueSimplemde
    },
    data() {
        return{
            form:{
                title:null,
                body:null,
                category_id:null,      
            },
            categories:[],
            errors:{}
        }
    },

    created() {
    axios.get("/api/category").then(res => (this.categories = res.data.data));
  },

    methods:{
        create() {
      axios
        .post("/api/question", this.form)
        .then(res => this.$router.push(res.data.path))
        .catch(error => (this.errors = error.response ? error.response.data.errors : null));
    }
  },

    computed: {
    //disable submit btn if form is not filled
    disabled() {
      return !(this.form.title && this.form.category_id && this.form.body);
    }
  }
}
</script>

<style>
@import '~simplemde/dist/simplemde.min.css';
</style>