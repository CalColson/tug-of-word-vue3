import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import { shallowMount } from '@vue/test-utils'

import SiteHeader from '../SiteHeader.vue'

// global components
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueformToggle from '@vueform/toggle'

describe('SiteHeader', () => {

  interface SiteHeaderProps {
    isInitiallyDarkMode: boolean
  }
  function shallowMountSiteHeader(props: SiteHeaderProps) {
    return shallowMount(SiteHeader, {
      props: props,
      global: {
        components: { FontAwesomeIcon, VueformToggle }
      }
    })
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let wrapper = shallowMountSiteHeader({ isInitiallyDarkMode: false }) as any
  beforeEach(() => {
    wrapper = shallowMountSiteHeader({isInitiallyDarkMode: false})
  })
  afterEach(() => {
    wrapper.unmount()
  })

  it('should render properly', () => {
    // check for header links
    expect(wrapper.text()).toContain('tug of word')
    expect(wrapper.text()).toContain('play')
    expect(wrapper.text()).toContain('about')

    // check for children components
    wrapper.get('font-awesome-icon-stub[icon="far,sun"]')
    wrapper.get('vueform-toggle-stub')
    wrapper.get('font-awesome-icon-stub[icon="far,moon"]')
  })

  it('should set initial dark mode value correctly', async () => {
    expect(wrapper.vm.isDarkMode).toBe(false)
    wrapper.unmount()

    wrapper = shallowMountSiteHeader({isInitiallyDarkMode: true})

    expect(wrapper.vm.isDarkMode).toBe(true)
  })
})
