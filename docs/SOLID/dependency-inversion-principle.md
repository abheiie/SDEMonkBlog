---
sidebar_position: 6
---

# Dependency Inversion Principle (DIP)

- **High-level modules should not depend on low-level modules. Both should depend on abstractions.**  
- **Abstractions should not depend on details. Details should depend on abstractions.**

- This principle helps reduce the coupling between high-level logic and low-level implementations, making code more flexible and easier to maintain.

- To demonstrate the Dependency Inversion Principle (DIP), consider the following example where a high-level `Notification` class depends on a low-level `EmailService`:

❌ **Before Applying DIP:**

```python
# email_service.py

class EmailService:
    def send_email(self, message):
        print(f"Sending email: {message}")
```


```Python
# notification.py

class Notification:
    def __init__(self):
        self.email_service = EmailService()

    def send(self, message):
        self.email_service.send_email(message)
```

🔴 **Problem:**
Notification is tightly coupled to EmailService. Replacing it with another service (like SMS) requires modifying Notification.


✅ **After Applying DIP:**

```python
from abc import ABC, abstractmethod

# message_service.py

class MessageService(ABC):
    @abstractmethod
    def send(self, message):
        pass

# email_service.py

class EmailService(MessageService):
    def send(self, message):
        print(f"Sending email: {message}")

# sms_service.py

class SMSService(MessageService):
    def send(self, message):
        print(f"Sending SMS: {message}")
```

```Python
# notification.py

class Notification:
    def __init__(self, message_service: MessageService):
        self.message_service = message_service

    def send(self, message):
        self.message_service.send(message)
```

```python
# main.py

# main.py

notification = Notification(EmailService())
notification.send("Hello via Email")

notification = Notification(SMSService())
notification.send("Hello via SMS")
```
