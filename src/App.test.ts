import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import App from './App.vue';

describe('App component', () => {
    it('renders correctly', () => {
      const wrapper = mount(App);
      expect(wrapper.text()).toContain('hello world');
    });
  });