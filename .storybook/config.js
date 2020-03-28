import { configure } from '@storybook/vue'
import '../src/tailwind/style.css'

configure(require.context('../src/storybook', true, /\.stories\.js$/), module)