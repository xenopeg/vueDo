import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import HelloWorld, { TaskState } from '../TaskItem.vue'

describe('TaskItem', () => {
  it('renders name', () => {
    const wrapper = mount(HelloWorld, {
      props: { set: () => undefined, task: { name: 'Task name', state: TaskState.DONE } }
    })
    expect(wrapper.text()).toContain('Task name')
  })
  it('renders label', () => {
    const wrapper = mount(HelloWorld, {
      props: { set: () => undefined, task: { name: 'Task name', state: TaskState.DONE } }
    })
    expect(wrapper.text()).toContain('Done')
  })
})
