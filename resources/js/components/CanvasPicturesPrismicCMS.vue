<template>
<div>
<!-- <div v-if="loading" >Loading....</div>

<div v-else> -->
    <div v-if="fields.images">
        <!-- <prismic-image v-if="fields.image" :field="fields.image " ></prismic-image>
        <div v-for="(image, i) in fields.images" :key="i">
            <prismic-image  :field="image" ></prismic-image>
        </div> -->


    <v-row>
    <v-col cols="12" md="8" lg="6" offset-md="2" offset-lg="3" class="pa-1">
      <v-card>
        <v-container fluid >
          <v-row class="mx-0 px-2">
            <v-col
              v-for="(image, i) in fields.images"
              :key="i"
              class="d-flex child-flex singleImg"
              cols="3"
            >


              <prismic-image :field="image" :lazy-src="image" @click="zoom(image)" @click.stop="dialog = true">
                  <!-- <template v-slot:placeholder>
                    <v-row
                      class="fill-height ma-0"
                      align="center"
                      justify="center"
                      :lazy-src="image"
                    >
                      <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                    </v-row>
                  </template> -->
                </prismic-image>



            </v-col>
          </v-row>

            <v-row justify="center">


    <v-dialog
      v-model="dialog"
      max-width="1024"
    >
      <v-card >
        <v-card-title   class="headline">Use Google's location service?</v-card-title>

//v-model="cirrentItem"
//:value="currentItem"


        <v-carousel v-if="selectedImage" :value="currentItem"   hide-delimiters>
            <v-carousel-item
            v-for="(item,i) in reorderedImagesArray"
            :key="i"
            >

            <prismic-image width="100%"  :field="item"/>

            </v-carousel-item>
        </v-carousel>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            color="green darken-1"
            text
            @click="dialog = false"
          >
            Disagree
          </v-btn>

          <v-btn
            color="green darken-1"
            text
            @click="dialog = false"
          >
            Agree
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>



        </v-container>
      </v-card>
    </v-col>
  </v-row>
</div>
</div>
    <!-- </div> -->
</template>

<script>
    export default {
         data () {
            return {
            fields: {
                uuid: null,
                image: null,
                images: [],
            },
            loading: false,
            dialog: false,
            selectedImage: null,
            currentItem: 0,
            imagesArrayToBeReorder: [],
            reorderedImagesArray: []
            };
        },

        methods: {
            async getContent () {

                const data = await this.$prismic.client.getSingle('portfolioimage')  // api id

                this.fields.uuid = data.uid,
                this.fields.image = data.data.image1

            },
           async getMultipleContent() {

               const data = await this.$prismic.client.getByUID('single-image', '2sfwe424')     //prismic 'api id' and 'uid'

                        const imgArray = []

                       for (var key in data.data) {
                            if (Object.prototype.hasOwnProperty.call(data.data, key)) {
                                imgArray.push( data.data[key]);
                            }
                            this.fields.images = imgArray
                            this.imagesArrayToBeReorder = imgArray
                    }

            },

            zoom(img) {

                this.selectedImage = img;
                let itemZ = this.fields.images.indexOf(img)
                this.currentItem = itemZ                                        // continue with currewnt item
                console.log('------------------------------------');
                console.log(itemZ);
                console.log('------------------------------------');


                let leftSideArr = []
                let rightSideArr = []
                let newOrderArray = []

                leftSideArr =  this.imagesArrayToBeReorder.slice(0,itemZ)
                rightSideArr = this.imagesArrayToBeReorder.slice(itemZ, this.imagesArrayToBeReorder.length)
                newOrderArray = rightSideArr.concat(leftSideArr)
                this.reorderedImagesArray = newOrderArray


                console.log('------------------------------------');
                console.log(newOrderArray);
                console.log('------------------------------------');
            },

        },
        computed: {
            clearModal() {
                if (this.dialog === false) {
                    this.reorderedImagesArray = []
                    // this.imagesArrayToBeReorder = []
                    this.currentItem = 0
                }
            }
        },
        created() {
            this.getContent()
            this.getMultipleContent()
        }
    }
</script>

<style lang="scss" scoped>
.singleImg{
    padding: 1px !important;
}
</style>
