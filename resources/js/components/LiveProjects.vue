<template>
    <div>
        <v-row>

                     <v-row class="mx-0 px-2" >
                        <v-col cols="12">
                            <a target="_blank" :href="url1" @click.stop>Me RR</a>
                            <long-card image="cogito.jpg"></long-card>
                        </v-col>
                        <v-col cols="12">
                            <a target="_blank" :href="url2" @click.stop>Cogito</a>
                            <long-card image="intro.jpg"></long-card>
                        </v-col>
                    </v-row>

        </v-row>
    </div>
</template>

<script>
import LongCard from '../components/slots/LongCard'
    export default {
        components: {
            LongCard
        },
        data() {
            return {
                url1: null,
                url2: null
            }
        },
          mounted() {
             this.url1 = `https://digitalwebdevelopment.co.uk`
             this.url2 = 'https://digitalwebdevelopment.co.uk/cogito/'
          }
    }
</script>

<style lang="scss" scoped>

</style>
