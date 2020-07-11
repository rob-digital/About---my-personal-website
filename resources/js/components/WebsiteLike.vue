<template>
    <v-layout mt-4 justify-space-around>
         <!-- <v-btn
        fab
        dark
        small
        color="green"
      >
        <v-icon>thumb_up</v-icon>
      </v-btn> -->

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
        color="red"
        @click.prevent="$emit('rating', 0)"
      >
        <v-icon>thumb_down</v-icon>
      </v-btn>
    </v-layout>
</template>

<script>
    export default {
        name: 'WebsiteLike',
        computed: {
            hasOneLike() {
                return 1
            },
            hasNoLike() {
                return 0
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
