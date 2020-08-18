<template>
    <v-app>

        <v-tooltip left>
        <template v-slot:activator="{ on, attrs }">
            <v-btn
                v-scroll="onScroll"
                v-show="fab"
                v-bind="attrs"
                v-on="on"
                fab
                dark
                fixed
                bottom
                class="scrollToTopBtn"
                right
                color="red"
                @click="toTop"
            >
                <v-icon>keyboard_arrow_up</v-icon>
            </v-btn>
        </template>
        <span>Scroll to Top</span>
        </v-tooltip>


    <v-container class="lightDarkToggleContainer">

        <v-layout justify-end>
            <v-switch
              v-model="switch2"
              @change="toggleTheme"
              inset

            >
            </v-switch>
        </v-layout>

    </v-container>


    <router-view v-on:changeTheme="applyTheme" :switchControl="switch2"></router-view>


    </v-app>
</template>

<script>


    export default {
        name: 'Index',
        data() {
            return {
                switch2: false,
                fab: false
            }
        },
        methods: {

            toggleTheme() {
                this.$vuetify.theme.themes.dark.anchor = '#41b883'
                this.$vuetify.theme.dark = !this.$vuetify.theme.dark
            },
            onScroll (e) {
            if (typeof window === 'undefined') return
            const top = window.pageYOffset ||   e.target.scrollTop || 0
            this.fab = top > 20
            },
            toTop () {
            this.$vuetify.goTo(0)
            },
             applyTheme() {
                this.toggleTheme()
                this.switch2 = !this.switch2
            }
        },
        computed:{

        },
        beforeCreate() {
            this.$store.dispatch('loadStoredFeedback')
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
.logo{
      width: 146px;
        height:36px;
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



// .modeToggle {
//     background-color: grey;
//     border-radius: 50%;
//     padding: 5px;
// }
.v-tooltip__content{
    z-index: 400 !important;
}
.scrollToTopBtn {
    z-index: 40 !important;
    height: 46px !important;
    width: 46px !important;
}
// hide invisible recaptcha badge -------------
.grecaptcha-badge {
display: none !important;
visibility: hidden !important;
}
.v-input__slot{
    justify-content: center !important;
}
.v-application--is-ltr .v-input--selection-controls__input{
    margin-right: 0px !important;
}
.v-input--switch__track {
    color: white !important;
}
.theme--dark.v-input--switch .v-input--switch__track{
    color: white !important;
}

@media only screen and (max-width: 599px) {
    .v-footer{
        margin-left: 56px;
    }
    .v-snack{
        margin-left: 28px;
    }
    .v-input--switch__track {
        color: red !important;
    }
    .theme--dark.v-input--switch .v-input--switch__track{
    color: red !important;
}
}
.v-input input{
      display: none !important;
  }
body{
    overflow:hidden
}
</style>
