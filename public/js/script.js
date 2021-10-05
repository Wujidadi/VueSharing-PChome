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
                },
                {
                    name: 'Advanced_Reactivity',
                    text: '高階指南 - 響應性 - 響應性基礎',
                    list: [
                        { href: '/example/reactivity/ref',                               text: '獨立的響應式值 - ref' },
                        { href: '/example/reactivity/access-in-ref',                     text: '存取響應式物件'       },
                        { href: '/example/reactivity/destructuring-reactive-state',      text: '響應式狀態解構'       },
                        { href: '/example/reactivity/prevent-mutating-reactive-objects', text: '防止更改響應式物件'   }
                    ]
                },
                {
                    name: 'Advanced_ComputedAndWatch',
                    text: '高階指南 - 響應性 - 響應式計算和監聽',
                    list: [
                        { href: '/example/computed',                        text: '計算值'                          },
                        { href: '/example/watchEffect',                     text: 'watchEffect'                     },
                        { href: '/example/watchEffect/effect-flush-timing', text: 'watchEffect - effect 的刷新時機' },
                        { href: '/example/watch/single',                    text: 'watch - 監聽單個資料來源'        },
                        { href: '/example/watch/multiple',                  text: 'watch - 監聽多個資料來源'        }
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
