from rest_framework import serializers



class CustomerSummarySerializer(serializers.Serializer):

    total_customers = serializers.IntegerField()

    new_today = serializers.IntegerField()

    new_this_month = serializers.IntegerField()



class RecentCustomerSerializer(serializers.Serializer):

    id = serializers.IntegerField()

    email = serializers.EmailField()

    name = serializers.CharField()

    joined_at = serializers.DateTimeField()



class CustomerGrowthSerializer(serializers.Serializer):

    date = serializers.DateField()

    total = serializers.IntegerField()



class DashboardCustomersSerializer(serializers.Serializer):

    summary = CustomerSummarySerializer()

    recent_customers = RecentCustomerSerializer(
        many=True
    )

    growth = CustomerGrowthSerializer(
        many=True
    )