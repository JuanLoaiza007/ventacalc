// [PricesState.jsx]
import { create } from 'zustand'

export const PricesState = create((set) => ({
  costoPaqueteQueso: 4500,
  costoPaqueteSencillo: 2500,
  costoPorLibraDeMasa: 1500
}))
