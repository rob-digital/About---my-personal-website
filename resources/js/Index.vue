<template>
    <v-app>
        <v-container>


        <v-layout justify-end>
        <v-icon
        class="material-icons"
        :left="true"
        align-end
        @click="toggleTheme"
        >
        wb_sunny
        </v-icon>
        </v-layout>

    <router-view></router-view>

        </v-container>
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

<style lang="scss" scoped>

</style>
