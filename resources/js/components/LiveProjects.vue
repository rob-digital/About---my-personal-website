<template>
    <div>
        <v-row>
            <v-col cols="10" offset="1" class="pa-1">
                 <v-card color="#37474F" elevation="10">
                    <v-container fluid >
                     <v-row class="mx-0 px-2" >
                        <v-col cols="6">
                            <a target="_blank" :href="url1" @click.stop>Me</a>
                        </v-col>
                        <v-col cols="6">
                            <a target="_blank" :href="url2" @click.stop>Cogito</a>
                        </v-col>
                    </v-row>
                    </v-container>
                 </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                url1: null,
                url2: null
            }
        },
          mounted() {
             this.url1 = `https://digitalwebdevelopment.co.uk`
             this.url2 = 'https://digitalwebdevelopment.co.uk/cogito/'
          }
    }
</script>

<style lang="scss" scoped>

</style>