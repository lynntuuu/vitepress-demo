import './style.css'
import Layout from './Layout.vue'

import MyPDF from './components/MyPDF.vue'
import type { App } from 'vue'

export default {
  Layout,
  enhanceApp({ app }: { app: App }) {
    app.component('MyPDF', MyPDF)
  },
}
