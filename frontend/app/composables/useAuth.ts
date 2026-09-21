import { useApi } from './useApi'

interface LoginPayload {
  username: string
  password: string
}

interface LoginResponse {
  accessToken: string
}

export const useAuth = () => {
  const api = useApi()

  const accessToken = useCookie<string | null>('access_token', {
    sameSite: 'lax',
  })

  const isAuthenticated = computed(() => !!accessToken.value)

  const login = async (payload: LoginPayload) => {
    const response = await api.post<LoginResponse>(
      '/auth/login',
      payload
    )

    accessToken.value = response.accessToken

    return response
  }

  const logout = () => {
    accessToken.value = null
    navigateTo('/login')
  }

  return {
    accessToken,
    isAuthenticated,
    login,
    logout,
  }
}