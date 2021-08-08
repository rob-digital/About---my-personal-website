<template>
  <v-container>
  <form>
      <v-text-field
      v-model="name"
      :error-messages="nameErrors"
      :counter="100"
      label="Name"
      required
      @input="$v.name.$touch()"
      @blur="$v.name.$touch()"
    ></v-text-field>

    <v-text-field
      v-model="category1"

      :counter="100"
      label="Category1"


    ></v-text-field>

    <v-text-field
      v-model="category2"
      :counter="10"
      label="Category2"
    ></v-text-field>

    <v-text-field
      v-model="category3"
      :counter="10"
      label="Category3"
    ></v-text-field>

    <v-text-field
      v-model="category4"
      :counter="10"
      label="Category4"
    ></v-text-field>

    <v-text-field
      v-model="category5"
      :counter="10"
      label="Category5"
    ></v-text-field>

     <v-file-input
    accept="image/*"
    label="Upload file"
    multiple
    v-on:change="onImageChange"
  ></v-file-input>


    <v-btn
      class="mr-4"
      @click="submit"
    >
      submit
    </v-btn>
    <v-btn @click="clear">
      clear
    </v-btn>
  </form>
  </v-container>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, maxLength, email } from 'vuelidate/lib/validators'
 const STATUS_INITIAL = 0, STATUS_SAVING = 1, STATUS_SUCCESS = 2, STATUS_FAILED = 3;

    export default {
    mixins: [validationMixin],

    validations: {
      name: { required, maxLength: maxLength(100) },
      category1: { required, mamLength: maxLength(100) }

    },

    data: () => ({
      name: '',
      category1: '',
      category2: '',
      category3: '',
      category4: '',
      category5: '',
      image: ''

    }),
    computed: {
    nameErrors () {
        const errors = []
        if (!this.$v.name.$dirty) return errors
        !this.$v.name.maxLength && errors.push('Name must be at most 100 characters long')
        !this.$v.name.required && errors.push('Name is required.')
        return errors
      },
    //   category1Errors () {
    //     const errors = []
    //     if (!this.$v.category1.$dirty) return errors
    //     !this.$v.category1.maxLength && errors.push('Category1 must be at most 100 characters long')
    //     !this.$v.category1.required && errors.push('Category1 is required.')
    //     return errors
    //   },
    },
   methods: {
      submit () {
        this.$v.$touch()
        let data = {
            name: this.name,
            category1: this.category1,
            category2: this.category2,
            category3: this.category3,
            category4: this.category4,
            category5: this.category5,
            image: this.image
        }
        this.uploadImage()


      },
      clear () {
        this.$v.$reset()
        this.name = ''
        this.category1 = '',
        this.category2 = '',
        this.category3 = '',
        this.category4 = '',
        this.category5 = ''
      },

      onImageChange(e) {
        // let files = e.target.files || e.dataTransfer.files;
        // if (!files.length)
        //     return;
        // this.createImage(files[0]);
        console.log('------------------------------------');
        console.log(e);
        console.log('------------------------------------');
        },
        createImage(file) {
            let reader = new FileReader();
            let vm = this;
            reader.onload = (e) => {
                vm.image = e.target.result;
            };
            reader.readAsDataURL(file);
        },
        uploadImage(){
            axios.post('/api/uploadImage',{image: this.image}).then(response => {
                console.log(response);
            });
        }
    },
}

</script>

<style lang="scss" scoped>
.container {
    margin-top: 100px
}
</style>
