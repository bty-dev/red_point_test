import {computed, reactive} from "vue";
import {useField} from "@/hooks/useField";

export function useForm(init = {}) {
    const form = reactive({

    })

    for (const [key, value] of Object.entries(init)) {
        form[key] = useField(value);
    }

    const withoutValid = k => k !== "valid";

    form.valid = computed(() => {
        return Object.keys(form).filter(withoutValid).every(key => form[key].valid)
    })

    return form;
}