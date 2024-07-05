import { ref, computed } from 'vue';
import { getRequest, postRequest, updateRequest, deleteRequest } from './http/index';

export const storeModuleFactory = (moduleName: string) => {
    const state = ref<Array<object>>([]);

    const getters = {
        all: computed(() => Object.values(state.value))
    };

    const setters = {
        setAll : (items: Array<object>) => {
            items.forEach(item => {
                state.value[item.id] = item
            });
        },

        setById: (item: object) => {
            state.value[item.id] = item;
        }
    };

    const actions = {
        getAll: async() => {
            const {data} = await getRequest(moduleName);
            if (!data) return
            setters.setAll(data);
        },

        create: (endpoint: string, item: object) => {
            const {} = postRequest(endpoint, item);
            setters.setById(item);
        },

        update: (endpoint: string, item: object) => {
            const {} = updateRequest(endpoint, item);
            setters.setById(item);
        },

        delete: (endpoint: string, item_id: number) => {
            const {} = deleteRequest(endpoint, {item_id})
        }
    }

    return {
        getters,
        actions
    };
}