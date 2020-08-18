<template>
    <v-main>
            <div v-if="isError500">
                <fatal-error ></fatal-error>
            </div>


            <div v-else>


                <parallax
                image="web.jpg"
                :height="700"
                text0="Robert Roksela - Web Development"
                text2="Creative Solutions for the Web"
                ></parallax>


                <about class="about" id="scroll-target-about"></about>


                <skills :activateSkillsCircleAnimation="activateSkillsCircleAnimation"></skills>


                <services id="scroll-target-services"></services>


                <parallax
                image="comp.jpg"
                :height="400"
                text1="modern, clean and creative design solutions"
                ></parallax>


                <live-projects id="scroll-target-live"></live-projects>


                <canvas-pictures-prismic-c-m-s id="scroll-target-hobby"></canvas-pictures-prismic-c-m-s>


                <education-stepper id="scroll-target-education" :colors="['red', 'blue', 'orange']"></education-stepper>


                <parallax
                image="mac.jpg"
                :height="400"
                text3="“Digital design is like painting, except the paint never dries.”"
                text4="Neville Brody"
                ></parallax>


                 <submit-form
                id="scroll-target-contact"
                 :loadingIcon="submitting"

                 v-on:submit="submitContactForm"
                ></submit-form>

            <v-container fluid class="lightBg pb-10">
                <v-row class="recaptchaRow">
                    <v-col cols="10" sm="10" md="10" lg="8" offset="1" offset-sm="1" offset-md="1"  offset-lg="2" class="pa-1 ">
                    <vue-recaptcha
                        :sitekey="siteKey"
                        :loadRecaptchaScript="true"
                        @verify="onVerify"
                        @expired="onCaptchaExpired"
                        ref="recaptcha"
                    ></vue-recaptcha>
                    </v-col>
                </v-row>
            </v-container>

<!-- //! Rate the design -->
                <!-- <v-container class="likesDiv" > -->


                    <form @submit.prevent="ratingRecived">

                    <vue-recaptcha
                    ref="invisibleRecaptcha"
                    @verify="onVerify"
                    @expired="onCaptchaExpired"
                    :loadRecaptchaScript="true"
                    size="invisible"
                    :sitekey="siteKey2">
                    </vue-recaptcha>
                     <website-like
                    id="scroll-target-likes"
                    :sendingFeedback="ratingApplied ? true : false"
                    v-on:rating="ratingRecived"
                    :displayCard="userProvidedFeedback ? 1 : 0"

                    >
                    </website-like>
                    </form>





            </div>

    </v-main>
</template>

<script>
import Parallax from '../components/Parallax'
import About from '../components/About'
import Skills from '../components/Skills'
import Services from '../components/Services'
import LiveProjects from '../components/LiveProjects'
import CanvasPicturesPrismicCMS from '../components/CanvasPicturesPrismicCMS'
import EducationStepper from '../components/EducationStepper'
import SubmitForm from '../components/SubmitForm'
import FatalError from '../components/FatalError'
import WebsiteLike from '../components/WebsiteLike'
import { positionY } from '../shared/utils/positionYOfComponentsMixin'
 import VueRecaptcha from 'vue-recaptcha';
import { mapState } from 'vuex'

    export default {
        mixins: [positionY],
        props: [
            'target',
            'activateSkillsCircleAnimation',
            'snackbar2'

        ],
         components: {
            SubmitForm,
            FatalError,
            WebsiteLike,
            Services,
            Parallax,
            About,
            Skills,
            EducationStepper,
            CanvasPicturesPrismicCMS,
            LiveProjects,
            VueRecaptcha,
        },
        data() {
            return {
                status: null,
                errors: null,
                submitting: false,
                ratingApplied: false,
                displayWebsiteLikeCard: true,

                siteKey: '6LdRrLYZAAAAADGs1EGJgcHWAGizzYvvXwzDU4VM',
                siteKey2: '6LdTxrYZAAAAAIQ0vvUbhvXIv2UX4fbO3oAaanE-',
                recaptchaConfirmed: false,

                userProvidedFeedback: this.$store.state.feedbackSent
            }
        },

        methods: {
            onVerify(response) {
               if(response) {
                   this.recaptchaConfirmed = true
               }
               setTimeout(() => {
                   this.$refs.recaptcha.reset()
                   this.recaptchaConfirmed = false
                   }, 8000)
            },
            onCaptchaExpired: function () {
               setTimeout(() => {
                   this.$refs.recaptcha.reset()
                   this.recaptchaConfirmed = false
                   }, 100)
                },


             submitContactForm(data) {
                 if (this.recaptchaConfirmed) {

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
                    //    this.snackbar1 = true
                        this.$emit('activateSnackbar1', true)
                       ), 3000)
               })
               .catch(err => {
                   if(422 === err.response.status) {
                       this.errors = err.response.data.errors
                   }
                   this.status = err.response.status
               })
            }

             if ((!this.recaptchaConfirmed && data.name && data.email && data.message) )
                {
                     this.$emit('activateSnackbar3', true)
                }
            },
            ratingRecived(rating) {

                let number = {
                    'likes': rating
                }



                return axios.post('/api/likes', number)
                .then(response => {
                    this.ratingApplied = true
                    this.$refs.invisibleRecaptcha.execute()

                    setTimeout(() => {
                        this.ratingApplied = false
                        this.$emit('activateSnackbar2', true)
                        this.$store.dispatch('saveRating', 1)
                        this.displayWebsiteLikeCard = false
                        this.userProvidedFeedback = this.$store.state.feedbackSent

                    }, 2000)

                } )
                .catch(err => {
                    if(422 === err.response.status) {
                       this.errors = err.response.data.errors
                   }
                   this.status = err.response.status
                })
            },
            //  onSubmit: function () {
            //     this.$refs.invisibleRecaptcha.execute()
            // },
            },

            computed: {
                isError500() {
                    return 500 === this.status
                },
                // checkIfRatingProvided() {
                //     return this.userProvidedFeedback = this.$store.state.feedbackSent
                // }
         },


    }
</script>

<style lang="scss" scoped>


@media only screen and (max-width: 600px) {
  .recaptchaRow {
      margin-left: -11% !important;
      margin-right: -11% !important;
  }
}
</style>
