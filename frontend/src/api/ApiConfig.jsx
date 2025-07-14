import axios from 'axios'

const instance= axios.create({
    baseURL:"https://meal-selector.onrender.com",
    withCredentials:true,
})


export default instance