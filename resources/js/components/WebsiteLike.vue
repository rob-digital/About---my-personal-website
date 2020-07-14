<template>

    <v-container>


    <v-card
      class=" align-center justify-center pa-4 mx-auto"
      max-width="550"
      min-height="76"
      :loading="sendingFeedback"
    >
      <div :class="`text-h5 text-sm-h4 text-center mb-6 mt-6`">
        {{ ratingQuestion }}
      </div>

    <v-layout mt-4 justify-space-around>

      <v-btn
        fab
        dark
        small
        color="indigo"
        @click.prevent="$emit('rating', 1)"
      >
        <v-icon>thumb_up</v-icon>
      </v-btn>

      <v-btn
        fab
        dark
        small

        @click.prevent="$emit('rating', 0)"
      >
        <v-icon>thumb_down</v-icon>
      </v-btn>


    </v-layout>
    </v-card>


    <v-card>
         <v-card-text class="grey lighten-4">
      <v-sheet

        class="mx-auto"
      >

      <v-card
      class=" align-center justify-center pa-4 mx-auto"
      max-width="550"
      min-height="76"
      :loading="sendingFeedback"
    >
      <div :class="`text-h5 text-sm-h4 text-center mb-6 mt-6`">
        {{ ratingQuestion }}
      </div>

    <v-layout mt-4 justify-space-around>

      <v-btn
        fab
        dark
        small
        color="indigo"
        @click.prevent="$emit('rating', 1)"
      >
        <v-icon>thumb_up</v-icon>
      </v-btn>

      <v-btn
        fab
        dark
        small

        @click.prevent="$emit('rating', 0)"
      >
        <v-icon>thumb_down</v-icon>
      </v-btn>


    </v-layout>
    </v-card>

      </v-sheet>
    </v-card-text>
  </v-card>


    </v-container>
</template>

<script>
    export default {
        name: 'WebsiteLike',
        props: {
            sendingFeedback: Boolean
        },
        data() {
            return {
                ratingQuestion: 'Like the design?',
            }
        },
        computed: {
            hasOneLike() {
                return 1
            },
            hasNoLike() {
                return 0
            },
        }
    }
</script>

<style lang="scss" scoped>
@import '~@/_variables.scss';
button {
    background-color: $red !important;
}
</style>

