<template>
    <v-app>



    <v-container class="lightDarkToggleContainer">

        <v-layout justify-end>
        <v-switch v-model="switch1" @change="toggleTheme" inset >

        <!-- <v-icon
        class="material-icons absolute modeToggle"
        :left="true"
        align-end
        color="yellow"
        @click="toggleTheme"
        >
        wb_sunny
        </v-icon> -->
        </v-switch>
        </v-layout>

    </v-container>


    <router-view></router-view>


    </v-app>
</template>

<script>


    export default {
        name: 'Index',
        data() {
            return {
                switch1: false
            }
        },
        methods: {

            toggleTheme() {
                this.$vuetify.theme.themes.dark.anchor = '#41b883'
                this.$vuetify.theme.dark = !this.$vuetify.theme.dark
            }
        },
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
.v-dialog--active{
    height: auto !important;
    max-height: initial !important;
}
a {
    text-decoration: none;
}
.v-footer{
    position: sticky !important;
    bottom: 0;
    z-index: 0;
    margin-left: 170px;
}
.v-main{
    padding-bottom: 40px !important;
}
.v-main__wrap {
    z-index: 10;
    -webkit-box-shadow: 0 8px 6px -6px black;
	   -moz-box-shadow: 0 8px 6px -6px black;
	        box-shadow: 0 8px 6px -6px black;
    // border-bottom-right-radius: 25px;
}
.v-navigation-drawer {
z-index: 100;
}
.theme--dark.v-label {
    color: #263238 !important;
}
.v-snack {
    padding-bottom: 30px !important;
    margin-left: 85px;
}


@media only screen and (max-width: 600px) {
    .v-footer{
        margin-left: 56px;
    }
    .v-snack{
        margin-left: 28px;
    }
}
.modeToggle {
    background-color: grey;
    border-radius: 50%;
    padding: 5px;
}
</style>
