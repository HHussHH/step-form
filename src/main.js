import { createApp } from "vue";
import App from "./App.vue";
import UI from "./components/UI/index";
import components from "./components";
const app = createApp(App);

UI.forEach((UIComponent) => {
  app.component(UIComponent.name, UIComponent);
});

components.forEach((component) => {
  app.component(component.name, component);
});

app.mount("#app");
