<script setup lang="ts">
import { ref } from 'vue'
import SelectLang from './SelectLang.vue';

interface Task {
  task: string
  isCompleted: boolean
}

const task = ref('')
const collectionTasks = ref<Task[]>([])

const createTask = () => {

  if(task.value.trim().length === 0) return

  collectionTasks.value.push({
    task: task.value,
    isCompleted: false
  })

  task.value = ''
}

const handleToggleComplete = (id:number) => {
  collectionTasks.value.map( (task, i) => {
    if(i === id) task.isCompleted = !task.isCompleted
    return task
  })
}
</script>

<template>
  <div
    class="fixed top-0 left-0 z-[-2] w-screen min-h-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"
  />
  <div class="flex items-center flex-col gap-2 p-5">
    <nav
      class="flex justify-end items-center gap-5 bg-black/50 backdrop-blur-md fixed top-0 left-0 w-full p-7 px-10"
    >
      <span>{{ $t('label_select_idiom') }}</span
      ><SelectLang />
    </nav>

    <h1 class="text-6xl font-black mt-28 mb-10 text-wrap">
      {{ $t('title_page') }}
    </h1>

    <main class="max-w-2xl ">
      <form
        @submit.prevent="createTask"
        class="flex items-center gap-5"
      >
        <input
          type="text"
          :placeholder="$t('placeholder_task_input')"
          autofocus
          v-model="task"
          class="p-3 px-4 text-xl rounded-lg flex-1 min-w-[420px]"
        />
        <button class="bg-blue-500 p-3 px-4 rounded-md hover:bg-blue-600">
          {{ $t('button_add_task') }}
        </button>
      </form>

      <section
        class="bg-[#272932] p-5 rounded-md my-10"
        v-show="collectionTasks.length !== 0"
      >
        <h2
          class="mt-2 mb-5 text-3xl font-bold text-white/50 border-b pb-3 border-white/50"
        >
          {{ $t('title_section_list_tasks') }}
        </h2>
        <div
          v-for="(item, index) in collectionTasks"
          :key="index"
          class="flex items-center gap-5"
        >
          <span
            :class="['p-2 text-xl cursor-pointer', item.isCompleted && 'line-through']"
            @click="handleToggleComplete(index)"
          >
            👉 {{ item.task }}</span
          >

          <span
            v-show="item.isCompleted"
            class="p-2 rounded-lg bg-green-500/20 text-green-300 border-green-500 border text-xs"
          >
            Completed
          </span>
        </div>
      </section>
    </main>
  </div>
</template>
