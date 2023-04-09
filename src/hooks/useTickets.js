import {useFetch} from "@/hooks/useFetch";
import {ref} from "vue";

export async function useTickets() {
    const loaded = ref(false);
    const {response: tickets, request} = useFetch("https://jsonplaceholder.typicode.com/posts")

    if(!loaded.value) {
        await request();
        loaded.value = true;
    }

    return {
        tickets
    }
}