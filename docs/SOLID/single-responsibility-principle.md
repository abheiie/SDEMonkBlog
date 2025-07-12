---
sidebar_position: 2
---

# Single-Responsibility Principle (SRP)

- A class should have only one reason to change, meaning it should handle only one responsibility. If it does more, split those tasks into separate classes.

- To demonstrate the Single-Responsibility Principle (SRP) and how it improves object-oriented design, consider the following UserManager class:


❌ **Before Applying SRP:**

```python
# user_manager.py
import json
from pathlib import Path

class UserManager:
    def __init__(self, filepath):
        self.path = Path(filepath)

    def load_users(self):
        return json.loads(self.path.read_text())

    def save_users(self, users):
        self.path.write_text(json.dumps(users, indent=2))

    def send_email(self, user, message):
        print(f"Sending email to {user['email']}: {message}")
```


✅ **After Applying SRP:**


```Python
# user_storage.py

import json
from pathlib import Path

class UserStorage:
    def __init__(self, filepath):
        self.path = Path(filepath)

    def load_users(self):
        return json.loads(self.path.read_text())

    def save_users(self, users):
        self.path.write_text(json.dumps(users, indent=2))
```

```Python
# email_service.py

class EmailService:
    def send_email(self, user, message):
        print(f"Sending email to {user['email']}: {message}")

```




✅ **Now:**

- `UserStorage` only manages **file operations**.
- `EmailService` only handles **communication**.

This separation makes the code:
- ✅ Easier to **maintain**
- ✅ Easier to **test**
- ✅ Easier to **extend**
