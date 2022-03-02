import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import SiteHeader from '../SiteHeader.vue'

describe('SiteHeader', () => {
  it('should render properly', () => {
    const wrapper = mount(SiteHeader, { props: { isInitiallyDarkMode: false } })

    // check for header links
    expect(wrapper.text()).toContain('tug of word')
    expect(wrapper.text()).toContain('play')
    expect(wrapper.text()).toContain('about')

    // check for existence of fa-icons and vueform toggle
    const foreignComponents = wrapper.findAllComponents('*')
    expect(foreignComponents[0].attributes().class).toContain('fa-sun')
    expect(foreignComponents[1].attributes().class).toContain('toggle-container')
    expect(foreignComponents[2].attributes().class).toContain('fa-moon')

    wrapper.unmount()
  })

  it('should start in correct light/dark mode', () => {
    let wrapper = mount(SiteHeader, { props: { isInitiallyDarkMode: false } })
    expect(wrapper.get('.toggle-container .toggle').classes()).toContain('toggle-off')
    wrapper.unmount()
    
    wrapper = mount(SiteHeader, { props: { isInitiallyDarkMode: true } })
    expect(wrapper.get('.toggle-container .toggle').classes()).toContain('toggle-on')
    wrapper.unmount()
  })
})
