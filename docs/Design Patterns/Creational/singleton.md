---
sidebar_position: 2
---

# Singleton

The **Singleton Pattern** ensures that a class has **only one instance** and provides a **global point of access** to it.

This is useful when exactly **one object is needed to coordinate actions** across a system — for example, in logging, configuration settings, caching, etc.

---

## Key Characteristics

- Ensures a **single instance**.
- Provides a **global access point**.
- **Thread-safe** in multi-threaded environments (with locking mechanism).

---

## Python Implementation (Thread-safe)

```python title="singleton.py"
import threading

class Singleton:
    __instance = None
    __lock = threading.Lock()

    def __new__(cls, *args, **kwargs):
        if cls.__instance is None:
            with cls.__lock:  # Thread-safe instantiation
                if cls.__instance is None:
                    cls.__instance = super().__new__(cls)
        return cls.__instance
```

```Python title="main.py"

if __name__ == "__main__":
    instance1 = Singleton()
    print("Instance 1:", instance1)

    instance2 = Singleton()
    print("Instance 2:", instance2)

    print("Are both instances the same?", instance1 is instance2)
```