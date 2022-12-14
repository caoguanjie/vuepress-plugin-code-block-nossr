import { siteData as siteDataRaw } from '@internal/siteData';
import { ref } from 'vue';
/**
 * Global site data ref
 */
export const siteData = ref(siteDataRaw);
/**
 * Returns the ref of the site data
 */
export const useSiteData = () => siteData;
if (import.meta.hot) {
    // reuse vue HMR runtime
    __VUE_HMR_RUNTIME__.updateSiteData = (data) => {
        siteData.value = data;
    };
}
