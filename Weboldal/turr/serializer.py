import re
from django.core.exceptions import ValidationError
from django.utils.translation import ugettext as _

class CustomRegisterSerializer(RegisterSerializer):

    def validate(self, data):
        user = User(**data)
        password = data.get('password')
        try:
            if not re.findall('[A-Z]', password):
               raise serializers.ValidationError("The password must contain at least 1 uppercase letter, A-Z.")
        except Exception as e:
            raise serializers.ValidationError("The password must contain at least 1 uppercase letter, A-Z.")