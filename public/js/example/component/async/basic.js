const { createApp, defineAsyncComponent } = Vue;

const app = createApp({});

const AsyncComp = defineAsyncComponent(
  () =>
    new Promise((resolve, reject) => {
      resolve({
        template: '<div>I am async!</div>'
      })
    })
);

app.component('async-example', AsyncComp);

const vm = app.mount('#app');
