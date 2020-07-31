<template>
    <div  class="pb-12 main">

        <!-- <heading-intro class="introSlot pt-8 mb-12">
                    <h2>Coding Skills</h2>
                </heading-intro> -->

        <v-container>
            <v-row>

                <v-col cols="12" >

                    <p class="text-center">languages and frameworks I specialise in:</p>
                    <p class="text-center">languages and frameworks in which I specialise:</p>


                  <div id="scroll-target-skills" class="text-center">
                      <div>
                          <v-progress-circular
                        :size="125"
                        :width="20"
                        color="red"
                        :value="percentage1"
                        >JavaScript<br>
                        {{ percentage1 }}%
                        </v-progress-circular>



                        <v-progress-circular
                        :size="125"
                        :width="20"
                        :value="percentage2"
                        color="accent"
                        >React<br>
                        {{ percentage2 }}%
                        </v-progress-circular>

                        <v-progress-circular
                        :size="125"
                        :width="20"
                        :value="percentage3"
                        color="teal"
                        >Vue<br>
                        {{ percentage3 }}%
                        </v-progress-circular>

                        <v-progress-circular
                        :size="125"
                        :width="20"
                        :value="percentage4"
                        color="pink"
                        >PHP<br>
                        {{ percentage4 }}%
                        </v-progress-circular>

                        <v-progress-circular
                        :size="125"
                        :width="20"
                        :value="percentage5"
                        color="purple darken-2"

                        >Laravel<br>
                        {{ percentage5 }}%
                        </v-progress-circular>
                    </div>
                    </div>
                </v-col>


            </v-row>
        </v-container>

    </div>
</template>

<script>
import HeadingIntro from '../components/slots/Heading'
import { positionY } from '../shared/utils/positionYOfComponentsMixin'

    export default {
        mixins: [positionY],
        props: ['activateSkillsCircleAnimation'],
        components: {
            HeadingIntro
        },
        data() {
            return {
                percentage1: 0,
                stop1: 82,
                percentage2: 0,
                stop2: 71,
                percentage3: 0,
                stop3: 80,
                percentage4: 0,
                stop4: 73,
                percentage5: 0,
                stop5: 79,
            }
        },

    mounted() {

            // var this = this;


    },
    watch: {
        activateSkillsCircleAnimation: function() {
            setInterval(() => {

                if (this.percentage1 < this.stop1) { this.percentage1++; }
                if (this.percentage2 < this.stop2) { this.percentage2++; }
                if (this.percentage3 < this.stop3) { this.percentage3++; }
                if (this.percentage4 < this.stop4) { this.percentage4++; }
                if (this.percentage5 < this.stop5) { this.percentage5++; }

            }, 10);

        }
    }

    }
</script>

<style lang="scss" scoped>
.v-progress-circular {
  margin: 1rem;
  transition: transform .2s; /* Animation */
}
.v-progress-circular:hover{
    transform: scale(1.2);
}
</style>
