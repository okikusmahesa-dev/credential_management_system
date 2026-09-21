<script setup lang="ts">
definePageMeta({
  layout: false,
})

const router = useRouter()
const { login, isAuthenticated } = useAuth()

const username = ref('')
const password = ref('')
const loading = ref(false)
const errorMessage = ref('')

interface ApiError {
  data?: { message?: string }
  message?: string
}

const handleLogin = async () => {
  errorMessage.value = ''

  if (!username.value || !password.value) {
    errorMessage.value = 'Username dan password wajib diisi.'
    return
  }

  loading.value = true

  try {
    await login({
      username: username.value,
      password: password.value,
    })

    await router.push('/')
  } catch (error: unknown) {
    const apiError = error as ApiError
    errorMessage.value =
      apiError.data?.message ||
      apiError.message ||
      'Username atau password tidak valid.'
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  if (isAuthenticated.value) {
    router.push('/')
  }
})
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100 px-4">
    <UCard class="w-full max-w-md">
      <template #header>
        <div class="text-center">
          <h1 class="text-2xl font-bold">
            Credential Manager
          </h1>

          <p class="mt-1 text-sm text-gray-500">
            Sign in to your account
          </p>
        </div>
      </template>

      <form class="space-y-5" @submit.prevent="handleLogin">
        <UFormField label="Username">
          <UInput
            v-model="username"
            placeholder="Enter username"
            class="w-full"
            autocomplete="username"
          />
        </UFormField>

        <UFormField label="Password">
          <UInput
            v-model="password"
            type="password"
            placeholder="Enter password"
            class="w-full"
            autocomplete="current-password"
          />
        </UFormField>

        <UAlert
          v-if="errorMessage"
          color="error"
          variant="soft"
          title="Login failed"
          :description="errorMessage"
        />

        <UButton
          type="submit"
          block
          :loading="loading"
        >
          Login
        </UButton>
      </form>
    </UCard>
  </div>
</template>