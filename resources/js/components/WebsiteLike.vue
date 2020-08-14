<template>
    <v-container fluid class=" pt-12 pb-12 likesDiv main">
        <v-fade-transition>
            <v-card
            class=" align-center justify-center pa-4 mx-auto rounded blue-grey lighten-5"
            max-width="550"
            min-height="76"
            :loading="sendingFeedback"
            :elevation="12"
            v-if="displayCard === 0"
            >
            <div :class="`text-h5 text-sm-h4 text-center mb-6 mt-6`">
                {{ ratingQuestion }}
            </div>

            <v-layout mt-4 justify-space-around>

            <v-btn
                fab
                dark
                small
                color="blue"
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
        </v-fade-transition>
    </v-container>
</template>

<script>
    export default {
        name: 'WebsiteLike',
        props: {
            sendingFeedback: Boolean,
            displayCard: Number

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

.fade-enter-active, .fade-leave-active {
  transition: all 2s ease;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: .5;
}
.likesDiv{
    min-height: 256px;

}
</style>

