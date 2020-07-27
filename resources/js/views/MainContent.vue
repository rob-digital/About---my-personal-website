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


                <canvas-pictures-prismic-c-m-s></canvas-pictures-prismic-c-m-s>


                <education-stepper :colors="['red', 'blue', 'orange']"></education-stepper>



                 <submit-form
                 id="scroll-target-submit"
                 :loadingIcon="submitting"
                 v-on:submit.prevent="submitContactForm"
                ></submit-form>

<!-- //! Rate the design -->
                <!-- <v-container class="likesDiv" > -->

                <v-fade-transition>
                    <website-like
                    id="scroll-target-likes"
                    :sendingFeedback="ratingApplied ? true : false"
                    v-on:rating="ratingRecived"
                    v-show="displayWebsiteLikeCard"
                    ></website-like>
                </v-fade-transition>
                <!-- </v-container> -->

<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?

Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?

Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?

Second
Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?

Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?

Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>

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

    </v-main>
</template>

<script>
import Parallax from '../components/Parallax'
import About from '../components/About'
import Skills from '../components/Skills'
import Services from '../components/Services'
import CanvasPicturesPrismicCMS from '../components/CanvasPicturesPrismicCMS'
import EducationStepper from '../components/EducationStepper'
import SubmitForm from '../components/SubmitForm'
import FatalError from '../components/FatalError'
import WebsiteLike from '../components/WebsiteLike'
import { positionY } from '../shared/utils/positionYOfComponentsMixin'


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
            CanvasPicturesPrismicCMS
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



                return axios.post('/api/likes', number)
                .then(response => {
                    this.ratingApplied = true
                    setTimeout(() => {
                        this.ratingApplied = false
                        this.snackbar2 = true
                        this.displayWebsiteLikeCard = false
                    }, 2000)
                } )
                .catch(err => {
                    if(422 === err.response.status) {
                       this.errors = err.response.data.errors
                   }
                   this.status = err.response.status
                })
            }
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

</style>
