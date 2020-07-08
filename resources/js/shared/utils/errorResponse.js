export const is422 = (err) => isErrorWithResponseAndStatus(err) && 422 === err.response.status



const isErrorWithResponseAndStatus = (err) => err.response && err.response.status
