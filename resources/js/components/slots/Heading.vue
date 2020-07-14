<template>


    <v-row align="center">
                <v-divider></v-divider>

                <slot/>

                <v-divider></v-divider>
    </v-row>



</template>

<script>
    export default {

    }
</script>

<style lang="scss" scoped>
.v-divider{
    border-bottom: 2px ;
    margin: 0 7%;
}
</style>
