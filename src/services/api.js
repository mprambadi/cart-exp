import axios from 'axios'


const api = axios.create({
   baseURL:'https://res.cloudinary.com/sivadass/raw/upload/v1535817394/json'
})


export const getProducts = async () => {
  return await api.get('/products.json')
}
