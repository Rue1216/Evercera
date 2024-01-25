export function isGlobalThemeDark() {
  const isSystemPerferDark =
    !('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches
  const isLocalStorageDark = localStorage.theme === 'dark'
  return isLocalStorageDark || isSystemPerferDark
}

export function getCurrentGlobalTheme() {
  const defaultTheme = 'light'
  return localStorage.theme || defaultTheme
}

export function toggleGlobalTheme(currentTheme) {
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark'
  setGlobalTheme(newTheme, currentTheme)
}

export function setGlobalTheme(newTheme, oldTheme) {
  localStorage.theme = newTheme
  const HTMLElement = document.documentElement
  if (oldTheme) {
    HTMLElement.classList.remove(oldTheme)
  }
  HTMLElement.classList.add(newTheme)
}
