<template>
  <v-form
    @submit.prevent="login"
  >

    <v-text-field
      v-model="form.email"
      label="E-mail"
      type="email"
      required
    ></v-text-field>

    <v-text-field
      v-model="form.password"
      label="Password"
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
      Login
    </v-btn>

  </v-form>
</template>

<script>
export default {
    data() {
        return{
            form:{
                email:null,
                password:null
            }
        }
    },

    methods:{
        login(){
            axios.post('/api/auth/login', this.form)
            .then(res => console.log(res.data))
            .catch(error=> console.log(error.response.data))
        }
    }
}
</script>
