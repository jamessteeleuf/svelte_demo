import App from './App.svelte';

const app = new App({
  target: document.getElementById('svelte-root'),
  props: {
    name: 'world'
  }
})

window.app = app;

export default app;
