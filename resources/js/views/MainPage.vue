<template>
    <div>
        <v-container>
             <submit-form
                v-on:submit="submitContactForm"
            ></submit-form>
        </v-container>
    </div>
</template>

<script>
import SubmitForm from '../components/SubmitForm'

    export default {
         components: {
            SubmitForm
        },

        methods: {
             submitContactForm(data) {

                 let sendEmail = {
                     name    : data.name,
                     email   : data.email,
                     message : data.message
                 }

                // console.log('------------------------------------');
                // console.log(sendEmail);
                // console.log('------------------------------------');
               return axios.post('/api/contact', sendEmail )
               .then(response => {
                   alert('message sent')
               })
               .catch(err => (console.log(err)))
            },
        }
    }
</script>

<style lang="scss" scoped>

</style>
