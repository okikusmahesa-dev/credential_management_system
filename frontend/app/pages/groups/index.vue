<script setup lang="ts">
definePageMeta({
  middleware: 'auth',
})

interface CredentialGroup {
  id: string
  name: string
  description?: string | null
  parentId?: string | null
  createdAt?: string
  updatedAt?: string
}

interface GroupForm {
  name: string
  description: string
  parentId?: string
}

const api = useApi()

const groups = ref<CredentialGroup[]>([])
const loading = ref(false)
const saving = ref(false)
const deleting = ref(false)

const search = ref('')

const modalOpen = ref(false)
const deleteModalOpen = ref(false)

const editingGroup = ref<CredentialGroup | null>(null)
const selectedGroup = ref<CredentialGroup | null>(null)

const form = reactive<GroupForm>({
  name: '',
  description: '',
})

const pageTitle = computed(() => {
  return editingGroup.value ? 'Edit Credential Group' : 'Add Credential Group'
})

const filteredGroups = computed(() => {
  const keyword = search.value.trim().toLowerCase()

  if (!keyword) {
    return groups.value
  }

  return groups.value.filter((group) => {
    return (
      group.name.toLowerCase().includes(keyword) ||
      (group.description ?? '').toLowerCase().includes(keyword)
    )
  })
})

const loadGroups = async () => {
  loading.value = true

  try {
    const response = await api.get<any>('/credential-groups', {
      query: {
        page: 1,
        limit: 100,
        search: search.value || undefined,
      },
    })

    if (Array.isArray(response)) {
      groups.value = response
    } else if (Array.isArray(response?.data)) {
      groups.value = response.data
    } else if (Array.isArray(response?.items)) {
      groups.value = response.items
    } else {
      groups.value = []
    }
  } catch (error: any) {
    console.error('Failed to load credential groups:', error)

    useToast().add({
      title: 'Failed to load groups',
      description:
        error?.data?.message ||
        error?.message ||
        'Unable to load credential groups.',
      color: 'error',
    })
  } finally {
    loading.value = false
  }
}

const resetForm = () => {
  form.name = ''
  form.description = ''
}

const openCreateModal = () => {
  editingGroup.value = null
  resetForm()
  modalOpen.value = true
}

const openEditModal = (group: CredentialGroup) => {
  editingGroup.value = group

  form.name = group.name
  form.description = group.description ?? ''
  form.parentId = group.parentId ?? undefined

  modalOpen.value = true
}

const closeModal = () => {
  modalOpen.value = false
  editingGroup.value = null
  resetForm()
}

const saveGroup = async () => {
  if (!form.name.trim()) {
    useToast().add({
      title: 'Validation',
      description: 'Group name is required.',
      color: 'warning',
    })

    return
  }

  saving.value = true

  try {
    const payload = {
      name: form.name.trim(),
      description: form.description.trim() || undefined,
      parentId: form.parentId || undefined,
    }

    if (editingGroup.value) {
      await api.patch(
        `/credential-groups/${editingGroup.value.id}`,
        payload
      )

      useToast().add({
        title: 'Updated',
        description: 'Credential group updated successfully.',
        color: 'success',
      })
    } else {
      await api.post('/credential-groups', payload)

      useToast().add({
        title: 'Created',
        description: 'Credential group created successfully.',
        color: 'success',
      })
    }

    closeModal()
    await loadGroups()
  } catch (error: any) {
    console.error('Failed to save credential group:', error)

    useToast().add({
      title: 'Save failed',
      description:
        error?.data?.message ||
        error?.message ||
        'Unable to save credential group.',
      color: 'error',
    })
  } finally {
    saving.value = false
  }
}

const openDeleteModal = (group: CredentialGroup) => {
  selectedGroup.value = group
  deleteModalOpen.value = true
}

const deleteGroup = async () => {
  if (!selectedGroup.value) {
    return
  }

  deleting.value = true

  try {
    await api.delete(
      `/credential-groups/${selectedGroup.value.id}`
    )

    useToast().add({
      title: 'Deleted',
      description: 'Credential group deleted successfully.',
      color: 'success',
    })

    deleteModalOpen.value = false
    selectedGroup.value = null

    await loadGroups()
  } catch (error: any) {
    console.error('Failed to delete credential group:', error)

    useToast().add({
      title: 'Delete failed',
      description:
        error?.data?.message ||
        error?.message ||
        'Unable to delete credential group.',
      color: 'error',
    })
  } finally {
    deleting.value = false
  }
}

const formatDate = (value?: string) => {
  if (!value) {
    return '-'
  }

  return new Date(value).toLocaleString('en-US', {
    dateStyle: 'medium',
    timeStyle: 'short',
  })
}

onMounted(() => {
  loadGroups()
})
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <div class="mx-auto max-w-7xl px-6 py-8">
      <div class="mb-6 flex items-center justify-between">
        <div>
          <h1 class="text-2xl font-bold">
            Credential Groups
          </h1>

          <p class="mt-1 text-sm text-gray-500">
            Manage your credential groups.
          </p>
        </div>

        <UButton
          icon="i-lucide-plus"
          @click="openCreateModal"
        >
          Add Group
        </UButton>
      </div>

      <UCard>
        <div class="mb-5 flex items-center justify-between gap-4">
          <UInput
            v-model="search"
            icon="i-lucide-search"
            placeholder="Search groups..."
            class="w-full max-w-sm"
            @update:model-value="loadGroups"
          />

          <UButton
            icon="i-lucide-refresh-cw"
            variant="outline"
            :loading="loading"
            @click="loadGroups"
          >
            Refresh
          </UButton>
        </div>

        <div class="overflow-x-auto">
          <table class="w-full text-left text-sm">
            <thead class="border-b border-gray-200">
              <tr>
                <th class="px-4 py-3 font-semibold">
                  Name
                </th>

                <th class="px-4 py-3 font-semibold">
                  Description
                </th>

                <th class="px-4 py-3 font-semibold">
                  Created
                </th>

                <th class="px-4 py-3 text-right font-semibold">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              <tr
                v-for="group in filteredGroups"
                :key="group.id"
                class="border-b border-gray-100"
              >
                <td class="px-4 py-3 font-medium">
                  {{ group.name }}
                </td>

                <td class="px-4 py-3 text-gray-500">
                  {{ group.description || '-' }}
                </td>

                <td class="px-4 py-3 text-gray-500">
                  {{ formatDate(group.createdAt) }}
                </td>

                <td class="px-4 py-3">
                  <div class="flex justify-end gap-2">
                    <UButton
                      icon="i-lucide-pencil"
                      size="sm"
                      variant="ghost"
                      @click="openEditModal(group)"
                    />

                    <UButton
                      icon="i-lucide-trash-2"
                      size="sm"
                      color="error"
                      variant="ghost"
                      @click="openDeleteModal(group)"
                    />
                  </div>
                </td>
              </tr>

              <tr v-if="!loading && filteredGroups.length === 0">
                <td
                  colspan="4"
                  class="px-4 py-10 text-center text-gray-500"
                >
                  No credential groups found.
                </td>
              </tr>

              <tr v-if="loading">
                <td
                  colspan="4"
                  class="px-4 py-10 text-center text-gray-500"
                >
                  Loading...
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </UCard>
    </div>

    <!-- Create / Edit Modal -->
    <UModal v-model:open="modalOpen">
      <template #header>
        <div>
          <h2 class="text-lg font-semibold">
            {{ pageTitle }}
          </h2>

          <p class="text-sm text-gray-500">
            Configure your credential group.
          </p>
        </div>
      </template>

      <template #body>
        <form
          class="space-y-5"
          @submit.prevent="saveGroup"
        >
          <UFormField
            label="Name"
            required
          >
            <UInput
              v-model="form.name"
              placeholder="e.g. Production Servers"
              class="w-full"
            />
          </UFormField>

          <UFormField label="Description">
            <UTextarea
              v-model="form.description"
              placeholder="Group description..."
              class="w-full"
              :rows="4"
            />
          </UFormField>

          <div class="flex justify-end gap-3">
            <UButton
              type="button"
              variant="outline"
              @click="closeModal"
            >
              Cancel
            </UButton>

            <UButton
              type="submit"
              :loading="saving"
            >
              {{ editingGroup ? 'Update' : 'Create' }}
            </UButton>
          </div>
        </form>
      </template>
    </UModal>

    <!-- Delete Modal -->
    <UModal v-model:open="deleteModalOpen">
      <template #header>
        <h2 class="text-lg font-semibold">
          Delete Credential Group
        </h2>
      </template>

      <template #body>
        <p class="text-sm text-gray-600">
          Are you sure you want to delete
          <strong>{{ selectedGroup?.name }}</strong>?
        </p>

        <div class="mt-6 flex justify-end gap-3">
          <UButton
            variant="outline"
            @click="deleteModalOpen = false"
          >
            Cancel
          </UButton>

          <UButton
            color="error"
            :loading="deleting"
            @click="deleteGroup"
          >
            Delete
          </UButton>
        </div>
      </template>
    </UModal>
  </div>
</template>