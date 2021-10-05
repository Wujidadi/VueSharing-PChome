const vueApp = Vue.createApp({
    setup() {
        const count = Vue.ref(0);
        return {
            count,
            nested: {
                count
            }
        };
    }
});

const vueModel = vueApp.mount('#app');
