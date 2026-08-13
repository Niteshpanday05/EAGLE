export interface InventorySummary {
  total_products: number;
  total_stock: number;
  out_of_stock: number;
  low_stock: number;
  inventory_value: string;
}

export interface LowStockProduct {
  id: string;
  name: string;
  stock: number;
  price: string;
}

export interface OutOfStockProduct {
  id: string;
  name: string;
  brand: string;
}

export interface HighestStockProduct {
  id: string;
  name: string;
  stock: number;
}

export interface DashboardInventory {
  summary: InventorySummary;
  low_stock_products: LowStockProduct[];
  out_of_stock_products: OutOfStockProduct[];
  highest_stock_products: HighestStockProduct[];
}