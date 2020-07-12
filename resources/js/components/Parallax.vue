<template>

      <v-parallax
            dark
            height="600"
            :src="getImageUrl('web.jpg')"
        >
            <v-row
            align="center"
            justify="center"
            >
            <v-col class="text-center" cols="12">
                <h1 class="display-1 font-weight-thin mb-4">Vuetify.js</h1>
                <h4 class="subheading">Build your application today!</h4>
            </v-col>
            </v-row>
        </v-parallax>

</template>

<script>
// import LaptopImg from '../../assets/images/laptop-web.jpg'

    export default {
        methods: {
            getImageUrl(img) {
            return require(`../../assets/images/${img}`)
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>
