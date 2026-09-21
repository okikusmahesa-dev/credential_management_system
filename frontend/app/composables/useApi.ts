import { $fetch, useRuntimeConfig } from '#imports'

export const useApi = () => {
  const config = useRuntimeConfig()

  const request = async <T>(
    endpoint: string,
    options: any = {}
    ): Promise<T> => {
    const token = useCookie<string | null>('access_token')

    return await $fetch<T>(endpoint, {
        baseURL: config.public.apiBaseUrl,

        headers: {
        ...(token.value
            ? {
                Authorization: `Bearer ${token.value}`,
            }
            : {}),
        ...(options.headers || {}),
        },

        ...options,
        })
    }

  const get = <T>(endpoint: string, options: any = {}) => {
    return request<T>(endpoint, {
      method: 'GET',
      ...options,
    })
  }

  const post = <T>(
    endpoint: string,
    body?: unknown,
    options: any = {}
  ) => {
    return request<T>(endpoint, {
      method: 'POST',
      body,
      ...options,
    })
  }

  const put = <T>(
    endpoint: string,
    body?: unknown,
    options: any = {}
  ) => {
    return request<T>(endpoint, {
      method: 'PUT',
      body,
      ...options,
    })
  }

  const del = <T>(endpoint: string, options: any = {}) => {
    return request<T>(endpoint, {
      method: 'DELETE',
      ...options,
    })
  }

  const patch = <T>(
  endpoint: string,
  body?: unknown,
  options: any = {}
    ) => {
    return request<T>(endpoint, {
        method: 'PATCH',
        body,
        ...options,
    })
    }

  return {
    get,
    post,
    put,
    patch,
    delete: del,
  }
}