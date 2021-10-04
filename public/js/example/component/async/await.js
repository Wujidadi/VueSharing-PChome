const { createApp, defineAsyncComponent } = Vue;

const app = createApp({});

const loadingComponent = {
    template: '<div>Loading...</div>'
};

const errorComponent = {
    template: '<div style="color: red">Error!</div>'
};

const asyncComp = defineAsyncComponent({
    loader: async () => {
        let res = await axios.get('/sample/tpl');
        return {
            template: res.data
        };
    },
    delay: 200,
    timeout: 3000,
    loadingComponent: loadingComponent,
    errorComponent: errorComponent
});

app.component('async-example', asyncComp);

const vm = app.mount('#app');
