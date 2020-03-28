import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { withKnobs } from '@storybook/addon-knobs'

import VtCard from '@common/VtCard'

storiesOf('Common', module)
  .addDecorator(withKnobs)
  .add('VtCard', () => ({
    components: { VtCard },
    template: `<VtCard />`,
    methods: { action: action('clicked') }
  }))
