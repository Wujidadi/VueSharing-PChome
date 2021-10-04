const vueApp = Vue.createApp({
    data() {
        return {
            hashira: [
                { title: '岩柱', name: '悲鳴嶼行冥', status: 'alive' },
                { title: '風柱', name: '不死川実弥', status: 'alive' },
                { title: '水柱', name: '冨岡義勇',   status: 'alive' },
                { title: '花柱', name: '胡蝶カナエ', status: 'dead'  },
                { title: '音柱', name: '宇髄天元',   status: 'alive' },
                { title: '炎柱', name: '煉獄杏寿郎', status: 'alive' },
                { title: '蛇柱', name: '伊黒小芭内', status: 'alive' },
                { title: '虫柱', name: '胡蝶しのぶ', status: 'alive' },
                { title: '恋柱', name: '甘露寺蜜璃', status: 'alive' },
                { title: '霞柱', name: '時透無一郎', status: 'alive' },
            ]
        };
    }
});

vueApp.component('kisatsutai-hashira', {
    props: [ 'hashira' ],
    template:
       `<div v-bind:class="getHashiraClass(hashira)">
            <span class="hashira-title">{{ hashira.title }}</span>
            <span class="hashira-name">{{ hashira.name }}</span>
        </div>`,
    methods: {
        getHashiraClass(data) {
            return {
                hashira: true,
                dead: (data.status == 'dead') ? true : false
            };
        }
    }
});

const vueModel = vueApp.mount('#app');
