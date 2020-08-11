<template>
    <div class="contactColor pt-4 pb-0">

        <heading-intro class="introSlot pt-8 pb-12">
            <h2 >contact</h2>
        </heading-intro>

        <v-container fluid >

        <v-row class="contactRow">
        <v-col cols="10" sm="10" md="10" lg="8" offset="1" offset-sm="1" offset-md="1"  offset-lg="2" class="pa-1 ">
        <form>
           <v-row>
                    <v-col
                    cols="12"
                    md="6"
                    >
                    <v-text-field
                        v-model="dataFields.name"
                        :error-messages="nameErrors"
                        background-color="grey lighten-4"
                        class="rounded-sm"
                        label="Name"
                        required

                        solo
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
                            background-color="grey lighten-4"
                            solo
                            class="rounded-sm"
                            @input="$v.dataFields.email.$touch()"
                            @blur="$v.dataFields.email.$touch()"
                            ></v-text-field>
                    </v-col>







            <v-col cols="12" >
                <v-textarea
                solo
                class="rounded-sm"
                background-color="grey lighten-4"
                color="blue-grey darken-4"
                name="input-7-4"
                label="Your message"
                :error-messages="messageErrors"
                v-model="dataFields.message"
                @input="$v.dataFields.message.$touch()"
                ></v-textarea>






            <v-btn
              class="mr-4 rounded-sm black--text"
              color="grey lighten-5"

              :loading="loadingIcon"
              @click=" $v.$touch(), clear, $emit('submit', dataFields)"
            >
            <!-- <v-icon left>done</v-icon> -->
            submit</v-btn>



            <v-btn
              @click="clear"
              class="rounded-sm black--text"
              color="grey lighten-5"
            >clear</v-btn>
            </v-col>
        </v-row>
        </form>
        </v-col>
        </v-row>

  </v-container>
    </div>
</template>

<script>
  import { validationMixin } from 'vuelidate'
  import { required, maxLength, email } from 'vuelidate/lib/validators'
  import VueRecaptcha from 'vue-recaptcha';
  import HeadingIntro from '../components/slots/Heading'

  export default {
    mixins: [validationMixin],
    props: {
        'loadingIcon': Boolean
    },
    components: {VueRecaptcha, HeadingIntro},
    validations: {

        dataFields: {
            name: { required },
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
@media only screen and (max-width: 600px) {
  .contactRow {
      margin-left: -11% !important;
      margin-right: -11% !important;
  }
}
</style>
