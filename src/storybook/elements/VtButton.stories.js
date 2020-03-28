import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { withKnobs, text } from '@storybook/addon-knobs'

import VtButton from '@elements/VtButton'

storiesOf('Elements', module)
  .addDecorator(withKnobs)
  .add('VtButton', () => ({
    components: { VtButton },
    props: {
      buttonText: {
        default: text('Button Text', 'VtButton')
      }
    },
    template: `
      <VtButton>
        {{buttonText}}
      </VtButton>
    `,
    methods: { action: action('clicked') }
  }))
