<template>
    <v-main>
            <div v-if="isError500">
                <fatal-error ></fatal-error>
            </div>


            <div v-else>


                <parallax
                image="web.jpg"
                :height="600"
                text1="Vuetify.js"
                text2="Build something nice"
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
                text1="modern, clean and creative design solutions"
                ></parallax>


                 <submit-form
                id="scroll-target-contact"
                 :loadingIcon="submitting"

                 v-on:submit="submitContactForm"
                ></submit-form>

            <v-container fluid class="contactColor pb-10">
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

                <v-fade-transition>
                    <form @submit.prevent="onSubmit">
                    <website-like
                    id="scroll-target-likes"
                    :sendingFeedback="ratingApplied ? true : false"
                    v-on:rating="ratingRecived"
                    v-show="displayWebsiteLikeCard"

                    >
                       <vue-recaptcha
                    ref="invisibleRecaptcha"
                    @verify="onVerify"
                    @expired="onCaptchaExpired"
                    :loadRecaptchaScript="true"
                    size="invisible"
                    :sitekey="siteKey2">
                    </vue-recaptcha>
                    </website-like>
                    </form>



                </v-fade-transition>

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


    export default {
        mixins: [positionY],
        props: [
            'target',
            'activateSkillsCircleAnimation'

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

            if ((this.recaptchaConfirmed === false && data.name && data.email && data.message) )

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

                    setTimeout(() => {
                        this.ratingApplied = false
                        this.$emit('activateSnackbar2', true)
                        this.displayWebsiteLikeCard = false
                    }, 2000)
                } )
                .catch(err => {
                    if(422 === err.response.status) {
                       this.errors = err.response.data.errors
                   }
                   this.status = err.response.status
                })
            },
             onSubmit: function () {
                this.$refs.invisibleRecaptcha.execute()
            },
            },

            computed: {
                isError500() {
                    return 500 === this.status
                },
         },


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
@media only screen and (max-width: 600px) {
  .recaptchaRow {
      margin-left: -11% !important;
      margin-right: -11% !important;
  }
}
</style>
