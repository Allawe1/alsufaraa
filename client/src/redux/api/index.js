import axios from 'axios'

const url = "http://localhost:5000/"



export const fetchProduct = () => axios.get(url + 'product')
export const fetchProductById = (id) => axios.get(`${url}/${id}`)

export const fetchProductGategorys = () => axios.get(url + 'productGategorys')
export const fetchProductGategorysProduct = (name) => axios.get(`${url}productGategorys/products/${name}`)

export const fetchBestSelling = () => axios.get(url + 'bestSelling')



