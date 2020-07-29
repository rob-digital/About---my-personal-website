<template>
    <div>
        <v-container >

        <form >
           <v-row>
                    <v-col
                    cols="12"
                    md="6"
                    >
                    <v-text-field
                        v-model="dataFields.name"
                        :error-messages="nameErrors"
                        :counter="20"
                        label="Name"
                        required
                        clearable
                        solo

                        clear-icon="cancel"
                        @input="$v.dataFields.name.$touch()"
                        @blur="$v.dataFields.name.$touch()"
                        ></v-text-field>
                    </v-col>

                    <v-col
                    cols="12"
                    md="6"
                    >
                        <v-text-field
                            v-model="dataFields.email"
                            :error-messages="emailErrors"
                            label="E-mail"
                            required
                            clearable
                            solo
                            filled
                            clear-icon="cancel"
                            @input="$v.dataFields.email.$touch()"
                            @blur="$v.dataFields.email.$touch()"
                            ></v-text-field>
                    </v-col>







            <v-col cols="12" >
                <v-textarea
                solo
                clearable
                clear-icon="cancel"
                name="input-7-4"
                label="Solo message"
                :error-messages="messageErrors"
                v-model="dataFields.message"
                @input="$v.dataFields.message.$touch()"
                ></v-textarea>






            <v-btn
              class="mr-4 rounded-sm"
              :loading="loadingIcon"
              @click=" $v.$touch(), clear, $emit('submit', dataFields)"
            >
            <!-- <v-icon left>done</v-icon> -->
            submit</v-btn>



            <v-btn @click="clear" class="rounded-sm">clear</v-btn>
            </v-col>
        </v-row>
        </form>

  </v-container>
    </div>
</template>

<script>
  import { validationMixin } from 'vuelidate'
  import { required, maxLength, email } from 'vuelidate/lib/validators'
   import VueRecaptcha from 'vue-recaptcha';

  export default {
    mixins: [validationMixin],
    props: {
        'loadingIcon': Boolean
    },
    components: {VueRecaptcha},
    validations: {

        dataFields: {
            name: { required, maxLength: maxLength(20) },
            email: { required, email },
            message: {required}
    }


    },

    data: () => ({
        dataFields: {
            name: '',
            email: '',
            message: ''
        },

    }),

    computed: {

      nameErrors () {
        const errors = []
        if (!this.$v.dataFields.name.$dirty) return errors
        !this.$v.dataFields.name.maxLength && errors.push('Name must be at most 10 characters long')
        !this.$v.dataFields.name.required && errors.push('Name is required.')
        return errors
      },
      emailErrors () {
        const errors = []
        if (!this.$v.dataFields.email.$dirty) return errors
        !this.$v.dataFields.email.email && errors.push('Must be valid e-mail')
        !this.$v.dataFields.email.required && errors.push('E-mail is required')
        return errors
      },
       messageErrors () {
        const errors = []
        if (!this.$v.dataFields.message.$dirty) return errors
        !this.$v.dataFields.message.required && errors.push('Message is required')
        return errors
      },
    },

    methods: {

      clear () {
        this.$v.$reset()
        this.dataFields.name = ''
        this.dataFields.email = ''
        this.dataFields.message = ''

      },
    },
  }
</script>

<style lang="scss" scoped>

</style>
