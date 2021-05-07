<template>
  <v-container>
      <v-alert v-if="errors" type="error" :value="true">
          Please give category name
      </v-alert>

      <v-form @submit.prevent="submit">
          <v-text-field
            label="Category Name"
            v-model="form.name"
            required
            ></v-text-field>

            <v-btn type="submit" color="pink" v-if="editSlug" :disabled="disabled">Update</v-btn>
            <v-btn type="submit" color="teal" v-else :disabled="disabled">Create</v-btn>
      </v-form>

      <v-card>
          <v-toolbar color="indigo" dark dense class="mt-5">
          <v-toolbar-title>Categories</v-toolbar-title>
        </v-toolbar>



        <v-card
            class="mx-auto"
            tile
        >
            <v-list dense>
            <v-list-item-group
                color="primary"
            >
                <v-list-item
                v-for="(category, index) in categories"
                :key="category.id"
                >
                <v-list-item-content>
                    <v-list-item-title>{{category.name}}</v-list-item-title>
                </v-list-item-content>

                <v-btn class="ma-2" color="blue" dark @click="edit(index)">
                Edit
                <v-icon dark right>
                mdi-pencil
                </v-icon>
            </v-btn>

            <v-btn class="ma-2" color="red" dark @click="destroy(category.slug,index)">
                Delete
                <v-icon dark right>
                mdi-delete
                </v-icon>
            </v-btn>

                </v-list-item>
            </v-list-item-group>
            </v-list>
        </v-card>

        <!-- <v-list>
            <div v-for="(category,index) in categories" :key="category.id">
                <v-list-tile>

                <v-list-tile-action>
                    <v-btn icon small @click="edit(index)">
                        <v-icon color="orange">edit</v-icon>
                    </v-btn>
                </v-list-tile-action>

                <v-list-tile-content>
                    <v-list-tile-title>
                        {{category.name}}
                    </v-list-tile-title>
                </v-list-tile-content>

                <v-list-tile-action>
                    <v-btn icon small @click="destroy(category.slug,index)">
                        <v-icon color="red">delete</v-icon>
                    </v-btn>
                </v-list-tile-action>
            </v-list-tile>
            <v-divider></v-divider>
            </div>
        </v-list> -->
      
      </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: null
      },
      categories: {},
      editSlug: null,
      errors: null
    };
  },
  created() {
    if (!User.admin()) {
      this.$router.push("/forum");
    }
    axios.get("/api/category").then(res => (this.categories = res.data.data));
  },
  methods: {
    submit() {
      this.editSlug ? this.update() : this.create();
    },
    update() {
      axios.patch(`/api/category/${this.editSlug}`, this.form).then(res => {
        this.categories.unshift(res.data);
        this.form.name = null;
      });
    },
    create() {
      axios
        .post("/api/category", this.form)
        .then(res => {
          this.categories.unshift(res.data); //like pushing into array
          this.form.name = null; //clear name field
        })
        .catch(error => (this.errors = error.response.data.errors));
    },
    destroy(slug, index) {
      axios
        .delete(`/api/category/${slug}`)
        .then(res => this.categories.splice(index, 1));//delete only 1, by index
    },
    edit(index) {
      this.form.name = this.categories[index].name; //fill input
      this.editSlug = this.categories[index].slug; //condn to show update btn
      this.categories.splice(index, 1); //filter out
    }
  },
  computed: {
    disabled() {
      return !this.form.name;
    }
  }
};
</script>

<style>
</style>
