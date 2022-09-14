import { error } from "@sveltejs/kit"

export function load({ params }) {
    if (params.id) return { id: params.id }

    throw error(404, 'Not Found silly!')
}

//+page.ts file runs w/ the .svelte file which means it runs on the server during server side rendering, and in the browser during client side navigation!