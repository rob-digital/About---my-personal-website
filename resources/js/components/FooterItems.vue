<template>
   <v-container>

        <p class="text-center white--text mb-12 pt-8 footerTitle">Used Technologies:</p>

        <v-row class="justify-center techIconsContainer">

            <v-col
                v-for="(item, i) in icons" :key="i"
                cols="6"
                sm="6"
                md="4"
                lg="2"
            >
                <div>
                    <div class="d-flex big-icon align-center justify-center">
                        <span class="iconify" :data-icon="item.icon" data-inline="false" color="white"></span>
                        <p class="techTitles">{{ item.title }}</p>
                    </div>
                </div>
            </v-col>
        </v-row>

        <hr>

        <v-row class="bottomRow pt-4">

            <v-col cols="12" sm="6" class="leftCol">
                <v-img
                class="logo"
                :src="getImageUrl('rrwd-logo-closed-white.svg')"
                ></v-img>
            </v-col>


            <v-col cols="12" sm="6" class="d-flex rightCol">
                <span class="px-4 white--text copy">&copy; {{ new Date().getFullYear() }}</span>
            </v-col>

        </v-row>

    </v-container>

</template>

<script>


    export default {
        data() {
            return {
                icons: [
                    {
                        title: 'Vue',
                        icon: 'simple-icons:vue-dot-js'
                    },
                    {
                        title: 'Laravel',
                        icon: 'simple-icons:laravel'
                    },
                    {
                        title: 'Vuetify',
                        icon: 'simple-icons:vuetify'
                    },
                    {
                        title: 'JavaScript',
                        icon: 'simple-icons:javascript'
                    },
                    {
                        title: 'Prismic CMS',
                        icon: 'simple-icons:prismic'
                    },

                ]
            }
        },
        methods: {
             getImageUrl(img) {
                return require(`../../assets/images/${img}`)
            },
        }
    }
</script>

<style lang="scss" scoped>
.big-icon .iconify {
   font-size: 48px;
   line-height: 1em;
   margin:  10px;
}
.techTitles{
    margin-bottom: 0 !important;
    color: white;
}

.logo{
    max-width: 150px;

}
@media only screen and (min-width: 1264px) and (max-width: 1400px) {
    .techIconsContainer{

        display: flex;
        justify-content: center;
    }
}
  .techRow {
      justify-content: center !important;

  }

.bottomRow{
    justify-content: space-between;
}
.copy {
    align-self: center;
}
@media only screen and (min-width: 600px) {
    .rightCol {
        justify-content: flex-end;
    }
    .techTitles{
    font-size: 1.3rem;
}

}
@media only screen and (max-width: 599px) {
    .rightCol{
        justify-content: center;
    }
    .logo{
        margin-left: calc(50% - 75px);
    }
    .big-icon {
        flex-direction: column;
    }
}

.copy{
    margin-right: 30px;
}

.footerTitle{
    font-size: 1.5rem;
}

</style>
