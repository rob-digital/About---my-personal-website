<template>
   <v-container >
            <v-row>

                <v-col cols="12 text-center" >
                    <i class="devicon-javascript-plain colored accent--text icon px-4"></i>
                    <i class="devicon-vuejs-plain colored accent--text icon px-4"  color="accent"> </i>
                    <i class="devicon-laravel-plain colored accent--text icon px-4"></i>
                 </v-col>

            </v-row>

        <v-row>
            <v-col cols="12" >
            <span class="px-4 ">&copy; {{ new Date().getFullYear() }}</span>


            </v-col>
        </v-row>

            </v-container>

</template>

<script>
    export default {

    }
</script>

<style lang="scss" scoped>
.icon {
    // color:#35495e;
    font-size: 62px;
}
</style>
