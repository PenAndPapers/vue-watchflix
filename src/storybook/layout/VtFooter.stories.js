import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { withKnobs } from '@storybook/addon-knobs'

import VtFooter from '@layout/VtFooter'

storiesOf('Layout', module)
  .addDecorator(withKnobs)
  .add('VtFooter', () => ({
    components: { VtFooter },
    template: `<VtFooter />`,
    methods: { action: action('clicked') }
  }))
