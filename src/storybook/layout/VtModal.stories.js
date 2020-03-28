import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { withKnobs } from '@storybook/addon-knobs'

import VtModal from '@layout/VtModal'

storiesOf('Layout', module)
  .addDecorator(withKnobs)
  .add('VtModal', () => ({
    components: { VtModal },
    template: `<VtModal />`,
    methods: { action: action('clicked') }
  }))
