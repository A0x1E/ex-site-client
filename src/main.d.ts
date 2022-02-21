declare module '*.vue' {
  import Vue from 'vue'
  const component: ReturnType<typeof Vue.defineComponent>
  export default component
}
