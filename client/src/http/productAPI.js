import { $authHost, $host } from "./index";

export const createCategory = async (categoty) =>{
    const {data} = await $authHost.post('api/category', categoty)
    return data
}

export const fetchCategories = async () =>{
    const {data} = await $host.get('api/category')
    return data
}


export const createTheme = async (theme) =>{
    const {data} = await $authHost.post('api/theme', theme)
    return data
}

export const fetchThemes = async () =>{
    const {data} = await $host.get('api/theme')
    return data
}


export const createProduct = async (product) =>{
    const {data} = await $authHost.post('api/product', product)
    return data
}

export const fetchProducts = async (categoryId, themeId, page, limit = 5) =>{
    const {data} = await $host.get('api/product', {params: {
        categoryId, themeId, page, limit
    }})
    return data
}
export const fetchOneProducts = async (id) =>{
    const {data} = await $host.get('api/product/' + id)
    return data
}
