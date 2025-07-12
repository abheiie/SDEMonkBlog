---
sidebar_position: 2
---

# Encapsulation

## What is Encapsulation?

**Encapsulation** is the process of **bundling data (attributes)** and the **methods that operate on that data** into a single unit — typically a class.  
It also involves **restricting direct access** to some components, usually by making attributes private or protected.

---

## Why use Encapsulation?

- Hides internal implementation details  
- Prevents unintended data modification  
- Makes code easier to change and refactor  
- Improves maintainability and reliability

---

## ❌ Before Applying Encapsulation:

```python
# user.py

class User:
    def __init__(self, name, age):
        self.name = name
        self.age = age

user = User("Alice", 30)
user.age = -5  # Invalid! But there's no protection.
```

🔴 **Problem:**
 age can be set to an invalid value directly. No control or validation is enforced.

## ✅ After Applying Encapsulation:
```Python
# user.py

class User:
    def __init__(self, name, age):
        self.name = name
        self.__age = age  # Private attribute

    def get_age(self):
        return self.__age

    def set_age(self, age):
        if age > 0:
            self.__age = age
        else:
            print("Invalid age")

user = User("Alice", 30)
user.set_age(-5)  # Validation blocks the update
print(user.get_age())  # Outputs: 30
```

✅ Now:
- Data is protected from invalid modifications.
Access is controlled via getter/setter methods.
Internal logic is encapsulated inside the class.

Encapsulation leads to:
- ✅ Safer code
- ✅ Easier debugging
- ✅ More flexible interfaces
