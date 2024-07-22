import { defineStore } from 'pinia'
import type { TaskDetails } from '@/components/TaskItem.vue'
import { TaskState } from '@/components/TaskItem.vue'

interface ITaskState {
  tasks: TaskDetails[]
}

export const useTaskStore = defineStore('tasks', {
  state: (): ITaskState => {
    return {
      tasks: [
        {
          name: 'Do thing',
          state: TaskState.TODO
        },
        {
          name: 'Doing thing',
          state: TaskState.DOING
        },
        {
          name: 'Did thing',
          state: TaskState.DONE
        },
        {
          name: 'Forget thing',
          state: TaskState.CANCELLED
        }
      ]
    }
  },

  actions: {
    add(todo: TaskDetails) {
      this.tasks.unshift(todo)
    },
    set(todo: TaskDetails, state: TaskState) {
      todo.state = state
    }
  }
})
