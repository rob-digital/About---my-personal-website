<template>
    <div class="blue-grey lightBg pt-4 pb-12 ">

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
                    text: 'I have built digital products that will meet the high standards and top expectations of my clients. This is achieved by emphasising their company’s greatest qualities and presenting these in the form of energetic content, which speaks to the users and encourages them to delve deeper into the website. Being up-to-date with constantly evolving web design trends and standards allows me to deliver original ideas with attractive constructions and progressive patterns.'
                },
                {
                    title: 'photogtaphy',
                    icon:  'photo_camera',
                    text:  'Having such an interesting hobby as photography, I can deliver high quality pictures that will be conspicuous and your website will stand out'
                },
                {   title: 'modern design',
                    icon: 'brush',
                    text: 'Being interested in web design & development, I constantly update my knowledge to be up to date with modern standards of web design'
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

</style>
