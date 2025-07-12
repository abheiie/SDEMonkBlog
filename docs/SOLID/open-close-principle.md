---
sidebar_position: 3
---

# Open-Closed Principle (OCP)

- **Software entities (classes, modules, functions, etc.) should be open for extension but closed for modification.**

- This means you should be able to add new functionality without changing the existing code. OCP helps make your code more maintainable and robust in the face of new requirements.

- To demonstrate the Open-Closed Principle (OCP) and how it improves object-oriented design, consider the following `UserManager` class that prints user data in a specific format:


❌ **Before Applying OCP:**

```python
# user_manager.py

class UserManager:
    def __init__(self, users):
        self.users = users

    def print_users(self, format="text"):
        if format == "text":
            for user in self.users:
                print(f"{user['name']} - {user['email']}")
        elif format == "json":
            import json
            print(json.dumps(self.users, indent=2))
```

> 🔴 Problem: Every time we want to add a new format (e.g., XML, CSV), we must modify the `print_users` method — violating OCP.


✅ **After Applying OCP:**

```python
# user_printer.py

from abc import ABC, abstractmethod

class UserPrinter(ABC):
    @abstractmethod
    def print_users(self, users):
        raise NotImplementedError("Subclasses must implement the print method")
```

```python
# text_user_printer.py

class TextUserPrinter(UserPrinter):
    def print_users(self, users):
        for user in users:
            print(f"{user['name']} - {user['email']}")
```

```python
# json_user_printer.py

import json

class JsonUserPrinter(UserPrinter):
    def print_users(self, users):
        print(json.dumps(users, indent=2))
```

```python
# main.py

users = [
    {"name": "Alice", "email": "alice@example.com"},
    {"name": "Bob", "email": "bob@example.com"}
]

printer = JsonUserPrinter()
printer.print_users(users)
```

✅ **Now:**

- We can **add new output formats** (e.g., XML, CSV) by simply creating new printer classes.
- No need to modify the existing `UserManager` or printer classes.

This approach makes the code:
- ✅ Easier to **extend**
- ✅ Less prone to **bugs** when updating
- ✅ More **modular** and **flexible**
