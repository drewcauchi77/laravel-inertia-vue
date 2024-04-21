import { createApp, h } from 'vue'
import { createInertiaApp, router } from '@inertiajs/vue3'
import Layout from './Shared/Layout.vue';
import nProgress from 'nprogress'

createInertiaApp({
    progress: {
        color: 'red',
    },
    title: title => `My App | ${title}`,
    resolve: async(name) => {
        const pages = await import.meta.glob('./Pages/**/*.vue')
        let page = await pages[`./Pages/${name}.vue`]();
        if(page.default.layout === undefined) page.default.layout = Layout;
        return page;
    },
    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
            .use(plugin)
            .mount(el)
    },
})


router.on('start', () => nProgress.start())
router.on('finish', () => nProgress.done())