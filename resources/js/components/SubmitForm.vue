<template>
    <div>
        <v-container >

        <form>
            <v-text-field
            v-model="dataFields.name"
            :error-messages="nameErrors"
            :counter="20"
            label="Name"
            required
            clearable
            clear-icon="cancel"
            @input="$v.dataFields.name.$touch()"
            @blur="$v.dataFields.name.$touch()"
            ></v-text-field>

            <v-text-field
            v-model="dataFields.email"
            :error-messages="emailErrors"
            label="E-mail"
            required
            clearable
            clear-icon="cancel"
            @input="$v.dataFields.email.$touch()"
            @blur="$v.dataFields.email.$touch()"
            ></v-text-field>



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


            </v-col>



            <v-btn class="mr-4" @click="$v.$touch(), $emit('submit', dataFields)">submit</v-btn>
            <v-btn @click="clear">clear</v-btn>
        </form>

  </v-container>
    </div>
</template>

<script>
  import { validationMixin } from 'vuelidate'
  import { required, maxLength, email } from 'vuelidate/lib/validators'

  export default {
    mixins: [validationMixin],

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
