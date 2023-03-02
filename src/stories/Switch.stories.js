import { ref } from 'vue'
import Switches from '../components/switches/Switches.vue'

export default {
  title: 'Switch',
  component: Switches
}

const Template = () => ({
  components: { Switches },
  setup() {
    const enabled = ref(false)

    return { enabled }
  },
  template: `<Switches class="mr-2" v-model="enabled" />`
})

export const Default = Template.bind({})
