<script setup lang="ts">
definePageMeta({
  middleware: 'auth',
})

const { logout } = useAuth()
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <header class="border-b bg-white">
      <div class="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <h1 class="text-xl font-bold">
          Credential Manager
        </h1>

        <UButton
          color="error"
          variant="soft"
          @click="logout"
        >
          Logout
        </UButton>
      </div>
    </header>

    <main class="mx-auto max-w-7xl px-6 py-8">
      <h2 class="text-2xl font-semibold">
        Dashboard
      </h2>

      <p class="mt-2 text-gray-500">
        Welcome to Credential Manager.
      </p>
    </main>
  </div>
</template>