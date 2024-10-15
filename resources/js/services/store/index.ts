import { ref, computed } from 'vue';
import { New, State, Updatable} from './types';
import { getRequest, postRequest, updateRequest, deleteRequest } from '../http/index';

export const storeModuleFactory = <T extends {id: number}>(moduleName: string) => {
    const state: State<T> = ref({});

    const getters = {
        all: computed(() => Object.values(state.value))
    };

    const setters = {
        setAll : (items: T[]) => {
            for (const item of items) state.value[item.id] = Object.freeze(item);
        },
        setById: (item: T) => {
            state.value[item.id] = Object.freeze(item);
        },
        deleteById: (id: number) => {
            delete state.value[id];
        },
    };

    const actions = {
        getAll: async() => {
            const {data} = await getRequest(moduleName);
            if (!data) return
            setters.setAll(data);
        },
        getById: async (id: number) => {
            const {data} = await getRequest(`${moduleName}/${id}`);
            if (!data) return;
            setters.setById(data);
        },
        create: async(newItem: New<T>) => {
            const {data} = await postRequest(moduleName, newItem);
            if (!data) return;
            setters.setById(data);
        },
        update: async(item: Updatable<T>) => {
            const {data} = await updateRequest(`${moduleName}/${item.id}`, item);
            if (!data) return
            setters.setById(data);
        },
        delete: async (id: number) => {
            await deleteRequest(`${moduleName}/${id}`);
            setters.deleteById(id);
        },
    }

    return {
        getters,
        setters,
        actions,
    };
};