<template>
     <v-form
    @submit.prevent="register"
  >
    <v-text-field
      v-model="form.name"
      label="Name"
      type="text"
      required
    ></v-text-field>
    <span class="red--text" v-if="errors.name">{{errors.name[0]}}</span>

    <v-text-field
      v-model="form.email"
      label="E-mail"
      type="email"
      required
    ></v-text-field>
    <span class="red--text" v-if="errors.email">{{errors.email[0]}}</span>

    <v-text-field
      v-model="form.password"
      label="Password"
      type="password"
      required
    ></v-text-field>
    <span class="red--text" v-if="errors.password">{{errors.password[0]}}</span>

    <v-text-field
      v-model="form.password_confirmation"
      label="Password Confirmation"
      type="password"
      required
    ></v-text-field>

    <!-- <v-select
      v-model="select"
      :items="items"
      :rules="[v => !!v || 'Item is required']"
      label="Item"
      required
    ></v-select> -->

    <!-- <v-checkbox
      v-model="checkbox"
      :rules="[v => !!v || 'You must agree to continue!']"
      label="Do you agree?"
      required
    ></v-checkbox> -->

    <v-btn
      color="green"
      type="submit"
    >
      Register
    </v-btn>

  </v-form>
</template>

<script>
export default {
    data() {
        return{
            form:{
                name:null,
                email:null,
                password:null,
                password_confirmation:null,
            },
            errors:{}
        }
    },

    methods:{
        register(){
          axios.post('/api/auth/register', this.form)
          .then(res => {
            User.responseAfterLogin(res)
            this.$router.push({name:'forum'})
          })
          .catch( error => this.errors = error.response.data?.errors)
          // .catch(error => console.log(error.response.data))
        }
    }
}
</script>

<style>

</style>