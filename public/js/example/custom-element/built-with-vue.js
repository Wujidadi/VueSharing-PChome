const vueApp = Vue.createApp({});

vueApp.config.compilerOptions.isCustomElement = tag => tag = 'my-vue-el';

const myVueEl = Vue.defineCustomElement({
    template: '<div>這是一個自訂元素</div>',
    styles: [
        'div { display: block; width: 60vw; padding: 1em; margin-top: 8px; background-color: brown; color: lemonchiffon; box-shadow: 3px 3px 5px 6px #555; }'
    ]
});

customElements.define('my-vue-el', myVueEl);

const vueModel = vueApp.mount('#app');
