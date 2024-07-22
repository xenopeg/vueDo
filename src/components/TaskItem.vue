<script lang="ts">
export enum TaskState {
  TODO = 'TODO',
  DOING = 'DOING',
  DONE = 'DONE',
  CANCELLED = 'CANCELLED'
}

export type TaskDetails = {
  name: string
  state: TaskState
}

function stateBg(state: TaskState) {
  switch (state) {
    case TaskState.TODO:
      return 'bg-yellow-600/20 hover:border-yellow-600/40'
    case TaskState.DOING:
      return 'bg-sky-600/20 hover:border-sky-600/40'
    case TaskState.DONE:
      return 'bg-emerald-600/20 hover:border-emerald-600/40'
    case TaskState.CANCELLED:
      return 'bg-red-600/20 hover:border-red-600/40'
    default:
      return ''
  }
}

function stateLabel(state: TaskState) {
  switch (state) {
    case TaskState.TODO:
      return 'ToDo'
    case TaskState.DOING:
      return 'Doing'
    case TaskState.DONE:
      return 'Done'
    case TaskState.CANCELLED:
      return 'Cancelled'
    default:
      return '????'
  }
}
</script>

<script setup lang="ts">
import { XCircleIcon, CheckCircleIcon, ClockIcon, PlayCircleIcon } from '@heroicons/vue/16/solid'
defineProps<{
  task: TaskDetails
  set: (state: TaskState) => void
}>()
</script>

<template>
  <li
    class="group px-2 py-0.5 rounded-md mb-2 box-border border-2 border-solid border-transparent flex flex-row justify-between items-center"
    :class="stateBg(task.state)"
  >
    <div>
      <span>{{ task.name }}</span>
      <span class="ml-4 text-xs text-zinc-600">({{ stateLabel(task.state) }})</span>
    </div>
    <div class="flex flex-row justify-between items-center">
      <button
        @click="set(TaskState.DONE)"
        :class="{
          '!w-0': task.state !== TaskState.DONE,
          '!text-zinc-500': task.state === TaskState.DONE
        }"
        class="overflow-hidden w-5 transition-width duration-75 group-hover:!w-5 text-emerald-600"
      >
        <CheckCircleIcon class="mr-1 size-4" />
      </button>
      <button
        @click="set(TaskState.CANCELLED)"
        :class="{
          '!w-0': task.state !== TaskState.CANCELLED,
          '!text-zinc-500': task.state === TaskState.CANCELLED
        }"
        class="overflow-hidden w-5 transition-width duration-75 group-hover:!w-5 text-red-600/80"
      >
        <XCircleIcon class="mr-1 size-4" />
      </button>
      <button
        @click="set(TaskState.TODO)"
        :class="{
          '!w-0': task.state !== TaskState.TODO,
          '!text-zinc-500': task.state === TaskState.TODO
        }"
        class="overflow-hidden w-5 transition-width duration-75 group-hover:!w-5 text-yellow-600"
      >
        <ClockIcon class="mr-1 size-4" />
      </button>
      <button
        @click="set(TaskState.DOING)"
        :class="{
          '!w-0': task.state !== TaskState.DOING,
          '!text-zinc-500': task.state === TaskState.DOING
        }"
        class="overflow-hidden w-5 transition-width duration-75 group-hover:!w-5 text-sky-600"
      >
        <PlayCircleIcon class="mr-1 size-4" />
      </button>
    </div>
  </li>
  <template />
</template>
