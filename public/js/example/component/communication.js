const app = Vue.createApp({});

const bus = mitt();

app.component('father-component', {
    template:
        '<div class="father-component">' +
            '<div class="father-component-body" v-on:click="printCounter">' +
                '<div>這裡是父組件</div>' +
                '<div>這裡會接收子組件（哥哥組件）回傳的訊息：{{ message }}</div>' +
            '</div>' +
            '<son-component v-bind:mnum="counter" v-on:son-dispatch="fatherReceiveSon" ref="son"></son-component>' +
            '<daughter-component></daughter-component>' +
        '</div>',
    data() {
        return {
            counter: 0,
            message: ''
        };
    },
    methods: {
        printCounter() {
            this.counter++;
        },
        fatherReceiveSon(arg) {
            this.message = arg;
        }
    },
    mounted() {
        this.message = this.$refs.son.smsg;
    },
});

app.component('son-component', {
    template:
        '<div class="son-component">' +
            '<div>這裡是子組件（哥哥組件）</div>' +
            '<div>父組件的點擊計數：{{ mnum }}</div>' +
            '<div>這裡的值會傳回父組件：<input type="text" v-model="smsg"></div>' +
            '<div>妹妹組件傳回來的訊息：{{ dmsg }}</div>' +
        '</div>',
    props: [ 'mnum' ],
    data() {
        return {
            smsg: 'Brother',
            dmsg: ''
        };
    },
    watch: {
        smsg(newSmsg, oldSmsg) {
            this.$emit('sonDispatch', newSmsg);
        }
    },
    mounted() {
        bus.on('daughterDispatch', arg => {
            this.dmsg = arg;
        });
    },
});

app.component('daughter-component', {
    template:
        '<div class="daughter-component">' +
            '<div>這裡是女兒組件（妹妹組件）</div>' +
            '<div>這裡的值會傳給子組件（哥哥組件）：<input type="text" v-model="dmsg"></div>' +
        '</div>',
    data() {
        return {
            dmsg: 'Sister'
        }
    },
    watch: {
        dmsg(newDmsg, oldDmsg) {
            bus.emit('daughterDispatch', newDmsg);
        }
    },
    mounted() {
        bus.emit('daughterDispatch', this.dmsg);
    }
});

const vm = app.mount('#app');
