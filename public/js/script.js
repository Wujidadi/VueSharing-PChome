const vueApp = Vue.createApp({
    data() {
        return {
            subPages: [
                {
                    name: 'ComponentsInDepth',
                    text: '深入組件',
                    list: [
                        { href: '/example/component',               text: '組件'            },
                        { href: '/example/slot',                    text: '插槽'            },
                        { href: '/example/async-component',         text: '異步組件 (基本)' },
                        { href: '/example/async-component/await',   text: '異步組件 (等待)' },
                        { href: '/example/component-communication', text: '組件間通信'      }
                    ]
                },
                {
                    name: 'Advanced_VueAndWebComponents',
                    text: '高階指南 - Vue 與 Web 組件',
                    list: [
                        { href: '/example/custom-element',                             text: '在 Vue 中使用自訂元素（不跳過組件解析）' },
                        { href: '/example/custom-element-with-options',                text: '在 Vue 中使用自訂元素（跳過組件解析）'   },
                        { href: '/example/custom-element-with-options-and-properties', text: '在 Vue 中使用自訂元素（傳遞 DOM 屬性）'  },
                        { href: '/example/custom-element-built-with-vue',              text: '使用 Vue 建構自訂元素'                   }
                    ]
                }
            ]
        };
    }
});

vueApp.component('sub-page-group', {
    props: [ 'group' ],
    template:
        '<h3>{{ group.text }}</h3>' +
            '<ul>' +
                '<sub-page-list v-for="subPage in group.list"' +
                              ' v-bind:href="subPage.href"' +
                              ' v-bind:text="subPage.text"' +
                '></sub-page-list>' +
            '</ul>'
});

vueApp.component('sub-page-list', {
    props: [ 'href', 'text' ],
    template: '<li><a v-bind:href="href" target="_blank">{{ text }}</a>'
});

const vueModel = vueApp.mount('#main-page');
