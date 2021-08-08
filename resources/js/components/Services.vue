<template>
    <div class=" lightBg pt-4 pb-12 ">

        <heading-intro class="introSlot pt-8 mb-12">
            <h2>services</h2>
        </heading-intro>

        <v-container>
        <v-row class="mx-lg-16">
            <v-col v-for="item in items"
                    :key="item.title" cols=12 class="col-md-4 d-flex">


                <v-hover
                v-slot:default="{ hover }">

                 <v-card
                    class="mx-auto rounded  justify-sm-space-around"
                    max-width="300"
                    :elevation="hover ? 6 : 2"


                >

                    <v-card-text  class="white--text accent " >


                    <v-icon color="white">{{ item.icon }}</v-icon>
                    <v-card-title >{{ item.title }}</v-card-title>

                    </v-card-text>


                    <v-card-text class="text--primary">
                        <div>{{ item.text }}</div>
                    </v-card-text>

                </v-card>
                </v-hover>


            </v-col>
        </v-row>
        </v-container>
    </div>
</template>

<script>
import HeadingIntro from '../components/slots/Heading'

    export default {
        components: {
            HeadingIntro
        },
        data: () => ({
            items: [
                {
                    title: 'web development',
                    icon: 'desktop_mac',
                    text: 'Being a passionated web develper shades light on my my ability to develop a high quality product that will represent your business online. Emphasising your gratest qualities and presenting them in the form of energetic content will attract users and potential customers. Staying up-to-date with constantly evolving web design trends and standards allows me to deliver original ideas with attractive constructions and progressive patterns.'
                },
                {
                    title: 'photogtaphy',
                    icon:  'photo_camera',
                    text:  'The visual aspect of your digital product is one of the first factors judged by users. Images on your website must be carefully selected in such a way that they can fully reflect the essence and character of your business. Emphasizing your greatest strengths by presenting them in a form of high quality photographs will attract users and encourage them to stay on the webiste and explore its content.'
                },
                {   title: 'modern design',
                    icon: 'brush',
                    text: 'Interesting and eye-catching content is the key to online success.  Well planned information architecture presented in a form of attractive design invites new customers and keeps the regular ones. As a web developer, I stay up to date with standards of modern web design and can implement interesting solutions in an elegant and aesthetic manners.'
                },
            ],
        })
    }
</script>

<style lang="scss" scoped>
.v-card__title{
  justify-content: center !important;
  text-transform: uppercase;
}
.v-icon {
    font-size: 80px !important;
    margin-left: calc(50% - 40px) !important;
}
@media only screen and (min-width: 960px) and (max-width: 1073px) {
    .v-card__title {
        font-size: medium;
    }
}
</style>
