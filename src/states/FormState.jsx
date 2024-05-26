import { create } from 'zustand'

export const FormState = create((set) => ({
  paquetesQueso: 0,
  paquetesSencillos: 0,
  masa: 0,
  medidaMasa: 'Libras',
  setPaquetesQueso: (paquetesQueso) => set({ paquetesQueso }),
  setPaquetesSencillos: (paquetesSencillos) => set({ paquetesSencillos }),
  setMasa: (masa) => set({ masa }),
  setMedidaMasa: (medidaMasa) => set({ medidaMasa }),
  resetAll: () => set({ paquetesQueso: 0, paquetesSencillos: 0, masa: 0, medidaMasa: 'Libras' })
}))
