import { configureStore, createSlice } from "@reduxjs/toolkit"

const initState = { products: [] }

const productSlice = createSlice({
    name: "products",
    initialState: initState,
    reducers: {
        // increment: state => { state.products.push("new element") },
        add: (state, action) => { state.products.push(action.payload) },
        remove: (state, action) => {
            state.splice(action.payload, 1)
            return state
        }, // payload = id || name du produit à supprimer
        update: (state, action) => {
            const { id, name, cc } = action.payload
            const existingProduct = state.products.find(product => product.id === id)
            if (existingProduct) {
                existingProduct.name = name
                existingProduct.cc = cc
            }
        }
    },
})

export const { add, remove, update } = productSlice.actions

export const store = configureStore({
    reducer: productSlice.reducer
})

export const subscribeProduct = store.subscribe(() => console.log(store.getState()))

export default productSlice.reducer
