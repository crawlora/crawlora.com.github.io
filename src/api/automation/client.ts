// import { setupCache, buildWebStorage, type CacheOptions } from 'axios-cache-interceptor';
import axios from "axios";

export const api = () => {
    const ax = axios.create({baseURL: "https://n8n.sending.ac"})

    // const opts: CacheOptions = {}

    // if(window?.localStorage && typeof window?.localStorage === 'object'){
    //     opts.storage = buildWebStorage(localStorage, 'axios-cache:')
    // }

    // setupCache(ax, opts)
    return ax
}