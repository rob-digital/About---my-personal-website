<template>
    <div>
        <v-container>

            <div v-if="isError500">
                <fatal-error ></fatal-error>
            </div>

            <div v-else>
                 <submit-form
                 :loadingIcon="submitting"
                v-on:submit="submitContactForm"
                ></submit-form>
            </div>

              <v-snackbar
                v-model="snackbar"
                >
                {{ text }}

                <template v-slot:action="{ attrs }">
                    <v-btn
                    color="yellow"
                    text
                    class="rounded-0"
                    v-bind="attrs"
                    @click="snackbar = false"
                    >
                    Close
                    </v-btn>
                </template>
                </v-snackbar>

        </v-container>
    </div>
</template>

<script>
import SubmitForm from '../components/SubmitForm'
import FatalError from '../components/FatalError'

    export default {
         components: {
            SubmitForm,
            FatalError
        },
        data() {
            return {
                status: null,
                errors: null,
                submitting: false,
                snackbar: false,
                 text: 'Message sent succesfully',
            }
        },

        methods: {
             submitContactForm(data) {
                 this.submitting = true
                 let sendEmail = {
                     name    : data.name,
                     email   : data.email,
                     message : data.message
                 }

                // console.log('------------------------------------');
                // console.log(sendEmail);
                // console.log('------------------------------------');
               return axios.post('/api/contact', sendEmail )

               .then(response => {
                   this.status = response.status

                   setTimeout(() => (
                       this.submitting = false,
                       this.snackbar = true
                       ), 1000)
               })
               .catch(err => {
                   if(422 === err.response.status) {
                       this.errors = err.response.data.errors
                   }
                   this.status = err.response.status
               })

            },
            },

            computed: {
                isError500() {
                    return 500 === this.status
                }
        }
    }
</script>

<style lang="scss" scoped>

</style>
