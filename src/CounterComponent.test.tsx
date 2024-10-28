import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import CounterComponent from './CounterComponent.vue'

describe('CounterComponent Test', () => {
    it('renders properly', () => {
        const wrapper = mount(CounterComponent, {
            props: {
                title: 'Hello World',
            },
        })
        expect(wrapper.find('.title').text()).toContain('Hello World')
    })

    it('updates on click', async () => {
        const wrapper = mount(CounterComponent)
        await wrapper.find('.button').trigger('click')
        await wrapper.find('.button').trigger('click')
        expect(wrapper.find('.count').text()).toContain('3')
    })

})
