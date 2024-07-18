import { ref, computed } from 'vue';
import { registerResponseErrorMiddleware } from '../http';

type ErrorBag = {
    [property: string]: string[];
};

const errorBag = ref<ErrorBag>({});

export const getErrorBag = computed(() => errorBag.value);

export const getErrorByProperty = (property: string) => computed(() => errorBag.value[property]);
export const setErrorByProperty = (property: string, error: string[]) => (errorBag.value[property] = error);

export const setErrorBag = (bag: ErrorBag) => (errorBag.value = bag);

export const destroyErrors = () => (errorBag.value = {});

registerResponseErrorMiddleware(({response}) => {
    if(!response || !response.data?.errors) return;
    setErrorBag(response.data.errors);
})