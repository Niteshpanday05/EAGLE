from uuid import uuid4


def generate_reference() -> str:
    return f"PAY-{uuid4().hex[:16].upper()}"