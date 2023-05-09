import { createApp } from "vue";
import App from "./App.vue";
import UI from "./components/UI/index";
import Mycomponents from "./components";
// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
const app = createApp(App);

const vuetify = createVuetify({
  components,
  directives,
});
UI.forEach((UIComponent) => {
  app.component(UIComponent.name, UIComponent);
});

Mycomponents.forEach((component) => {
  app.component(component.name, component);
});

app.use(vuetify).mount("#app");
