class RegisterService:

    @staticmethod
    def register(**validated_data):
        user = User.objects.create_user(**validated_data)

        EmailVerificationService.send(user)

        tokens = TokenService.generate_tokens(user)

        return {
            "user": user,
            "tokens": tokens,
        }