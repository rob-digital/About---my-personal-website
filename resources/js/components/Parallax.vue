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
                <h1 class="display-1 font-weight-thin mb-4 textShadow">{{ text0 }}</h1>
                <h2 class="display-1 font-weight-thin mb-4 textShadow">{{ text1 }}</h2>
                <h3 class="subheading textShadow">{{ text2 }}</h3>
                <h2 class="display-1 font-weight-thin font-italic mb-4 textShadow">{{ text3 }}</h2>
                <h3 class="display-1 font-weight-thin mb-4 textShadow">{{ text4 }}</h3>
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
            text0: {
                type: String,
                required: false
            },
              text1: {
                type: String,
                required: false
            },
            text2: {
                type: String,
                required: false
            },
              text3: {
                type: String,
                required: false
            },
              text4: {
                type: String,
                required: false
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
  .textShadow{
      text-shadow: 2px 2px 2px #263238;
  }
</style>
