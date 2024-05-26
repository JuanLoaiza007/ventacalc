// [AppState.jsx]
import { create } from 'zustand'

export const AppState = create((set) => ({
  appName: 'Ventacalc',
  appVersion: '1.1.0-alpha',
  setAppName: (appName) => set({ appName }),
  setAppVersion: (appVersion) => set({ appVersion })
}))
