// [PricesState.jsx]
import { create } from 'zustand'

export const PricesState = create((set) => ({
  costoPaqueteQueso: 5000,
  costoPaqueteSencillo: 3000,
  costoPorLibraDeMasa: 1500
}))
