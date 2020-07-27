<template>
    <v-app>



    <v-container class="lightDarkToggleContainer">

        <v-layout justify-end>
        <v-icon
        class="material-icons absolute"
        :left="true"
        align-end
        color="yellow"
        @click="toggleTheme"
        >
        wb_sunny
        </v-icon>
        </v-layout>

    </v-container>


    <router-view></router-view>


    </v-app>
</template>

<script>


    export default {
        name: 'Index',

        methods: {

            toggleTheme() {
                this.$vuetify.theme.themes.dark.anchor = '#41b883'
                this.$vuetify.theme.dark = !this.$vuetify.theme.dark
            }
        }
    }
</script>

<style lang="scss">
// @import '~@/app.scss';
// body {
//     font-family:  $body-font-family, sans-serif;
// }

.lightDarkToggleContainer{
    position: absolute;
    z-index: 100;

}

.introSlot {
    text-transform: uppercase;
}
.v-divider {
     border-color: red !important;
}
.v-application {
    margin-right: 0px !important;
}
.v-progress-circular__underlay{
    stroke: lightgrey !important;
}

</style>
