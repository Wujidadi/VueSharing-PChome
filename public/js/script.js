const vueApp = Vue.createApp({
    data() {
        return {
            subPages: [
                { href: '/example/component',               text: '組件'            },
                { href: '/example/slot',                    text: '插槽'            },
                { href: '/example/async-component',         text: '異步組件 (基本)' },
                { href: '/example/async-component/await',   text: '異步組件 (等待)' },
                { href: '/example/component-communication', text: '組件間通信'      }
            ]
        };
    }
});

vueApp.component('sub-page-list', {
    props: [ 'href', 'text' ],
    template: '<li><a v-bind:href="href" target="_blank">{{ text }}</a>'
});

const vueModel = vueApp.mount('#main-page');
