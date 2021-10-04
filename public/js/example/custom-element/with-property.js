const vueApp = Vue.createApp({
    mounted() {
        console.log(document.querySelector('non-vue-el').act);
    }
});

vueApp.config.compilerOptions.isCustomElement = tag => tag.startsWith('non-vue-');

const vueModel = vueApp.mount('#app');
