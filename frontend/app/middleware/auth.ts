export default defineNuxtRouteMiddleware(() => {
  const accessToken = useCookie<string | null>('access_token')

  if (!accessToken.value) {
    return navigateTo('/login')
  }
})