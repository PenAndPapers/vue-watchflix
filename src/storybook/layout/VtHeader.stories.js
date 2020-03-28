import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { withKnobs } from '@storybook/addon-knobs'

import VtHeader from '@layout/VtHeader'

storiesOf('Layout', module)
  .addDecorator(withKnobs)
  .add('VtHeader', () => ({
    components: { VtHeader },
    template: `<VtHeader />`,
    methods: { action: action('clicked') }
  }))
