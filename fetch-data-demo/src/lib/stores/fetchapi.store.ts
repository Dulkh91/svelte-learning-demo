import { writable } from "svelte/store";

export const posts = writable([])
export const isLoading = writable(false)
export const error = writable<string | null>(null)


export const fetchData = async()=>{
    isLoading.set(true)
    error.set(null)
    try {
        const responce = await fetch('https://jsonplaceholder.typicode.com/posts')
        if(!responce.ok){
            throw new Error('Failed to fetch posts')
        } 
        const data = await responce.json()
        posts.set(data) 
    } catch (err) {
        const er = err as Error
        error.set(er.message)
        console.log('Fetch error:',er);
    }finally{
        isLoading.set(false)
    }
}