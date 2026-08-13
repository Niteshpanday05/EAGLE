export interface NotificationItem {
  id: number;
  type: string;
  title: string;
  message: string;
  is_read: boolean;
  created_at: string;
}

export interface DashboardNotifications {
  total: number;
  unread: number;
  recent: NotificationItem[];
}