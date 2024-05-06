export default {
    getRandomWYR() {
        return fetch('/wyr').then(response =>{
            return response.json()
            //makes a fetch call, then converts the promise to json
        //    which returns a promise
        })
    }
}