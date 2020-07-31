<template>
    <div class="lightBg pt-8 pb-15">

        <heading-intro class="introSlot pt-6 mb-12">
            <h2>Live Projects</h2>
        </heading-intro>



                     <v-row class="mx-0 px-2" >
                        <v-col cols="12">

                                <long-card
                                  image="cogito.jpg"
                                  :url="url1"
                                  title="Brain Stimulation - Games and Quizes"
                                  class="mb-8"
                                ></long-card>

                        </v-col>
                        <v-col cols="12">

                                <long-card
                                  image="intro.jpg"
                                  :url="url2"
                                  title="My first live project - about me website"
                                ></long-card>

                        </v-col>
                    </v-row>


    </div>
</template>

<script>
import LongCard from '../components/slots/LongCard'
import HeadingIntro from '../components/slots/Heading'

    export default {
        components: {
            HeadingIntro,
            LongCard
        },
        data() {
            return {
                url1: '',
                url2: ''
            }
        },
          mounted() {
             this.url1 = 'https://digitalwebdevelopment.co.uk/cogito/'
             this.url2 = `https://digitalwebdevelopment.co.uk`
          }
    }
</script>

<style lang="scss" scoped>

</style>
