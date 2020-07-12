<template>
    <div>
            <div v-if="isError500">
                <fatal-error ></fatal-error>
            </div>




            <div v-else>

                <parallax></parallax>


                 <submit-form
                 :loadingIcon="submitting"
                v-on:submit="submitContactForm"
                ></submit-form>

<!-- //! Rate the design -->
                <v-container class="likesDiv" >

                <v-fade-transition>
                    <website-like
                    :sendingFeedback="ratingApplied ? true : false"
                    v-on:rating="ratingRecived"
                    v-show="displayWebsiteLikeCard"
                    ></website-like>
                </v-fade-transition>
                </v-container>


              <v-snackbar
                v-model="snackbar1"
                >
                {{ snackbarText1 }}

                <template v-slot:action="{ attrs }">
                    <v-btn
                    color="yellow"
                    text
                    class="rounded-0"
                    v-bind="attrs"
                    @click="snackbar1 = false"
                    >
                    Close
                    </v-btn>
                </template>
                </v-snackbar>

                <v-snackbar
                v-model="snackbar2"
                >
                {{ snackbarText2 }}

                <template v-slot:action="{ attrs }">
                    <v-btn
                    color="yellow"
                    text
                    class="rounded-0"
                    v-bind="attrs"
                    @click="snackbar2 = false"
                    >
                    Close
                    </v-btn>
                </template>
                </v-snackbar>


            </div>

    </div>
</template>

<script>
import Parallax from '../components/Parallax'
import SubmitForm from '../components/SubmitForm'
import FatalError from '../components/FatalError'
import WebsiteLike from '../components/WebsiteLike'


    export default {
         components: {
            SubmitForm,
            FatalError,
            WebsiteLike,
            Parallax


        },
        data() {
            return {
                status: null,
                errors: null,
                submitting: false,
                ratingApplied: false,
                displayWebsiteLikeCard: true,

                snackbar1: false,
                snackbarText1: 'Message sent succesfully',

                snackbar2: false,
                snackbarText2: 'Thank you for your feedback',
            }
        },

        methods: {
             submitContactForm(data) {

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
                   this.submitting = true
                   this.status = response.status

                   setTimeout(() => (
                       this.submitting = false,
                       this.snackbar1 = true
                       ), 3000)
               })
               .catch(err => {
                   if(422 === err.response.status) {
                       this.errors = err.response.data.errors
                   }
                   this.status = err.response.status
               })

            },
            ratingRecived(rating) {

                let number = {
                    'likes': rating
                }
                this.ratingApplied = true
                setTimeout(() => {
                    this.ratingApplied = false
                    this.snackbar2 = true
                    this.displayWebsiteLikeCard = false
                }, 2000)


                return axios.post('/api/likes', number)
                .then(response => console.log('ok') )
                .catch(err => console.log(err.response.data))
            }
        },

            computed: {
                isError500() {
                    return 500 === this.status
                }
        }
    }
</script>

<style lang="scss" scoped>

.fade-enter-active, .fade-leave-active {
  transition: all 2s ease;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: .5;
}
.likesDiv{
    min-height: 220px;
}
</style>
