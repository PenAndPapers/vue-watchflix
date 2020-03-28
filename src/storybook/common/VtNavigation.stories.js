import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { withKnobs } from '@storybook/addon-knobs'

import VtNavigation from '@common/VtNavigation'

storiesOf('Common', module)
  .addDecorator(withKnobs)
  .add('VtNavigation', () => ({
    components: { VtNavigation },
    template: `<VtNavigation />`,
    methods: { action: action('clicked') }
  }))
