import { describe, it, expect } from 'vitest'

import { shallowMount } from '@vue/test-utils'
import SiteHeader from '../SiteHeader.vue'

describe('SiteHeader', () => {
  it('should render properly', () => {
    const wrapper = shallowMount(SiteHeader, { props: { isInitiallyDarkMode: false } })

    // check for header links
    expect(wrapper.text()).toContain('tug of word')
    expect(wrapper.text()).toContain('play')
    expect(wrapper.text()).toContain('about')

    // foreign component existences are checked for in integration testing (cypress)

    wrapper.unmount()
  })

  // it('should start in correct light/dark mode', () => {
  //   let wrapper = mount(SiteHeader, { props: { isInitiallyDarkMode: false } })
  //   wrapper.unmount()
    
  //   wrapper = mount(SiteHeader, { props: { isInitiallyDarkMode: true } })
  //   wrapper.unmount()
  // })
})
