<script setup lang="ts">
import TaskItem, { TaskState } from '@/components/TaskItem.vue'
import { useTaskStore } from '@/stores/tasks'
import { ref } from 'vue'

const store = useTaskStore()
const newTaskName = ref()

function newTask() {
  const name = newTaskName.value
  store.add({
    name,
    state: TaskState.TODO
  })
  newTaskName.value = ''
}
</script>

<template>
  <main>
    <div class="mx-4">
      <div class="h-72 container mx-auto">
        <div class="text-2xl my-4 flex flex-row justify-between items-center">
          <span class="text-2xl"> Tasks: </span>
          <div>
            <input
              class="text-sm py-1 px-2 bg-zinc-800 border-0 p-0 rounded"
              type="text"
              name="name"
              id="todo"
              v-model="newTaskName"
              placeholder="New task..."
            />
            <button
              class="ml-3 py-1 px-2 text-sm bg-emerald-900 rounded hover:bg-emerald-800"
              @click="newTask"
            >
              New +
            </button>
          </div>
        </div>
        <ul class="px-4">
          <TaskItem
            :set="(state: TaskState) => store.set(task, state)"
            :task="task"
            v-for="task in store.tasks"
            :key="task.name"
          />
        </ul>
      </div>
    </div>
  </main>
</template>
