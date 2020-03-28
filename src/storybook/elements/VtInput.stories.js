import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { withKnobs, text } from '@storybook/addon-knobs'

import VtInput from '@elements/VtInput'

storiesOf('Elements', module)
  .addDecorator(withKnobs)
  .add('VtInput', () => ({
    components: { VtInput },
    props: {
      type: {
        default: text('Type', 'text')
      },
      placeholder: {
        default: text('Placeholder', 'Firstname')
      }
    },
    template: `<VtInput 
      :type="type" 
      :placeholder="placeholder" 
    />`,
    methods: { action: action('clicked') }
  }))
