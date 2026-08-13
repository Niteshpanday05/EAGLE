export const API = {
  AUTH: {
    LOGIN: "/auth/login/",
    REGISTER: "/auth/register/",
    REFRESH: "/auth/token/refresh/",
    PROFILE: "/auth/profile/",
  },

  PRODUCTS: {
    LIST: "/products/",
    DETAIL: (slug: string) => `/products/${slug}/`,
  },

  CART: {
    LIST: "/cart/",
    ADD: "/cart/add/",
    UPDATE: "/cart/update/",
    REMOVE: "/cart/remove/",
  },

  ORDERS: {
    LIST: "/orders/",
    DETAIL: (id: number) => `/orders/${id}/`,
  },

  PAYMENTS: {
    CREATE: "/payments/create/",
    VERIFY: "/payments/verify/",
  },
};