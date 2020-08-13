export default {
    state: {
        feedbackSent: 0
    },
    mutations: {
        sendRating(state, payload) {
            state.feedbackSent = payload
        }
    },
    actions: {
        saveRating(context, payload) {
            context.commit('sendRating', payload)
            localStorage.setItem('userLeftFeedback', payload)
        },
        loadStoredFeedback(context) {
            const userFeedback = localStorage.getItem('userLeftFeedback')
          
            if(userFeedback) {
                context.commit('sendRating', userFeedback)
            }
        }
    }
}
