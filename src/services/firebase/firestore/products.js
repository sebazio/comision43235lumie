import { getDocs, collection, query, where } from 'firebase/firestore'
import { db } from '../firebaseConfig'

export const getProducts = (categoryId) => {
    const productsRef = !categoryId 
        ? collection(db, 'products')
        : query(collection(db, 'products'), where('category', '==', categoryId))

    return getDocs(productsRef)
        .then(querySnapshot =>{
            const productsAdapted = querySnapshot.docs.map(doc => {
                const fields = doc.data()
                return { id: doc.id, ...fields }
            }) 
            
            return productsAdapted
        })
        .catch(error => {
            return error
        })
}

export const getProductById = (productId) => {
    
}