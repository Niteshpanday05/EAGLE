export interface BaseChartData {
    [key: string]: string | number;
}

export interface DashboardChartProps<T extends BaseChartData> {
    title: string;
    subtitle?: string;

    data: T[];

    xKey: keyof T;
    yKey: keyof T;

    color?: string;

    loading?: boolean;
}