<template>

      <v-parallax
            dark
            :height="height"
            :src="getImageUrl(`${image}`)"
        >
            <v-row
            align="center"
            justify="center"
            >
            <v-col class="text-center" cols="12">
                <h1 class="display-1 font-weight-thin mb-4">{{ text1 }}</h1>
                <h4 class="subheading">{{ text2 }}</h4>
            </v-col>
            </v-row>
        </v-parallax>

</template>

<script>
// import LaptopImg from '../../assets/images/laptop-web.jpg'

    export default {
        props: {
            height: {
                type: Number,
                required: true
            },
            image: {
                type: String,
                required: true
            },
            text1: {
                type: String,
                required: true
            },
            text2: {
                type: String,
                required: true
            },

        },
        methods: {
            getImageUrl(img) {
            return require(`../../assets/images/${img}`)
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>
