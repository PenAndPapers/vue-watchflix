import Vue from 'vue'

const elements = () => {
  // The code below loads all elements in a global context
  const requireComponent = require.context('./', true, /[A-Z]\w+\.(vue|js)$/)

  requireComponent.keys().forEach(fileName => {
    // Get component config
    const componentConfig = requireComponent(fileName)
    // Get PascalCase name of component
    const componentName = fileName
      .split('/')
      .pop()
      .replace(/\.\w+$/, '')

    // Register component globally
    Vue.component(componentName, componentConfig.default || componentConfig)
  })
}

export default elements
