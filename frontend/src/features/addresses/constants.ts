export const ADDRESS_ENDPOINTS = {
  LIST: "/addresses/",
  DETAIL: (id: number) => `/addresses/${id}/`,
  DEFAULT: (id: number) => `/addresses/${id}/default/`,
} as const;