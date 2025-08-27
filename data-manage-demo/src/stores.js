import { writable } from "svelte/store";

export const countNumber = writable(0)

export const user = writable({
    name: 'Guest',
    isLoggedIn: false
})
