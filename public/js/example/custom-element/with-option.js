const vueApp = Vue.createApp({});

vueApp.config.compilerOptions.isCustomElement = tag => tag.startsWith('non-vue-');

const vueModel = vueApp.mount('#app');
