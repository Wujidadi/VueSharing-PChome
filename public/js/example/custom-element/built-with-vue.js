const vueApp = Vue.createApp({
    data() {
        return {
            myEl: null,
            tick: 0
        }
    },
    methods: {
        init() {
            this.myEl = document.querySelector('#my-el');
            // console.log(this.myEl);
            this.tick = Math.floor((new Date().getTime() - this.getMidnight()) / 1000);
            // console.log(this.tick);
        },
        getMidnight() {
            const now = new Date(),
                  year = now.getFullYear(),
                  month = now.getMonth() + 1,
                  day = now.getDate(),
                  midnight = new Date(`${year}-${month}-${day} 00:00:00`).getTime();
            return midnight;
        },
        overridePropertyCounter() {
            this.myEl.counter = this.tick;
        },
        showCustomElementProperties() {
            console.log('%c自訂元素的屬性：', 'color: gold; font-size: 11pt;')
            console.log('%cel-name: ' + this.myEl.elName,  'color: lime; font-size: 9pt;');
            console.log('%cdomain: '  + this.myEl.domain,  'color: lime; font-size: 9pt;');
            console.log('%ccounter: ' + this.myEl.counter, 'color: lime; font-size: 9pt;');
            console.log('%ccounter (attribute): ' + this.myEl.getAttribute('counter'), 'color: dodgerblue; font-size: 9pt;');
        }
    },
    mounted() {
        this.$nextTick(() => {
            this.init();
            this.overridePropertyCounter();
            this.showCustomElementProperties();
        });
    }
});

vueApp.config.compilerOptions.isCustomElement = tag => tag = 'my-vue-el';

const myVueEl = Vue.defineCustomElement({
    template: '<div>這是一個自訂元素</div>',
    props: [ 'elName', 'domain', 'counter' ],
    // props: {
    //     'elName':  String,
    //     'domain':  String,
    //     'counter': Number
    // },
    styles: [
        'div { display: block; width: 60vw; padding: 1em; margin-top: 8px; background-color: brown; color: lemonchiffon; box-shadow: 3px 3px 5px 6px #555; }'
    ],
    data() {
        return {
            myEl: null,
            tick: 0
        }
    },
    methods: {
        init() {
            this.myEl = document.querySelector('#my-el');
            // console.log(this.myEl);
            this.tick = Math.floor((new Date().getTime() - this.getMidnight()) / 1000);
            // console.log(this.tick);
        },
        getMidnight() {
            const now = new Date(),
                  year = now.getFullYear(),
                  month = now.getMonth() + 1,
                  day = now.getDate(),
                  midnight = new Date(`${year}-${month}-${day} 00:00:00`).getTime();
            return midnight;
        },
        overridePropertyCounter() {
            this.myEl.counter = this.tick;
        },
        showCustomElementProperties() {
            console.log('%c自訂元素的屬性：', 'color: gold; font-size: 11pt;')
            console.log('%cel-name: ' + this.myEl.elName,  'color: lime; font-size: 9pt;');
            console.log('%cdomain: '  + this.myEl.domain,  'color: lime; font-size: 9pt;');
            console.log('%ccounter: ' + this.myEl.counter, 'color: lime; font-size: 9pt;');
            console.log('%ccounter (attribute): ' + this.myEl.getAttribute('counter'), 'color: dodgerblue; font-size: 9pt;');
        }
    },
    mounted() {
        // this.$nextTick(() => {
        //     this.init();
        //     this.overridePropertyCounter();
        //     this.showCustomElementProperties();
        // });
    }
});

customElements.define('my-vue-el', myVueEl);

const vueModel = vueApp.mount('#app');
