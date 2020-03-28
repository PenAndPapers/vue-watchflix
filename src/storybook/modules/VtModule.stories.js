import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { withKnobs } from '@storybook/addon-knobs'

import VtModule from '@module/VtModule'

storiesOf('Module', module)
  .addDecorator(withKnobs)
  .add('VtModule', () => ({
    components: { VtModule },
    template: `<VtModule />`,
    methods: { action: action('clicked') }
  }))
