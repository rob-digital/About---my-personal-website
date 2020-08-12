<template>
    <div>

        <v-hover
        v-slot:default="{ hover }">

            <v-card
                class="mx-auto rounded"
                max-width="800"
                :elevation="hover ? 12 : 8"
            >
                <a target="_blank" :href="url" @click.stop>
                <v-img
                class="white--text"
                height="300px"
                :src="getImageUrl(`${image}`)"
                >
                </v-img>
                </a>

                <v-card-text class="text--primary">
                <blockquote class="font-weight-bold">{{ title }}</blockquote>


                </v-card-text>

                <v-card-actions>
                <a target="_blank" :href="url" @click.stop>
                <v-btn
                    color="textAccent"
                    text
                    class="font-weight-bold"
                >
                   visit
                </v-btn>
                </a>


                </v-card-actions>
            </v-card>
        </v-hover>

    </div>
</template>

<script>
    export default {
        props: {
            image: {
                type: String,
                required: true
            },
              url: {
                type: String,
                required: true
            },
            title: {
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
