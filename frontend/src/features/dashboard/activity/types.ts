export interface ActivityLog {
  id: number;
  user: string;
  action: string;
  model: string;
  object_id: string;
  description: string;
  created_at: string;
}

export interface DashboardActivity {
  recent_activity: ActivityLog[];
}