<template>
    <div>
            <v-card
                class="mx-auto"
                max-width="800"
            >
                <v-img
                class="white--text align-end"
                height="300px"
                :src="getImageUrl(`${image}`)"
                >

                </v-img>



                <v-card-text class="text--primary">
                <div>Whitehaven Beach</div>


                </v-card-text>

                <v-card-actions>
                <v-btn
                    color="orange"
                    text
                >
                   visit
                </v-btn>


                </v-card-actions>
            </v-card>
    </div>
</template>

<script>
    export default {
        props: {
            image: {
                type: String,
                required: true
            },
        },
        methods: {
            getImageUrl(img) {
            return require(`../../../assets/images/${img}`)
            }
    }
    }
</script>

<style lang="scss" scoped>

</style>
