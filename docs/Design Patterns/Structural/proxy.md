---
sidebar_position: 8
---

# Proxy Design Pattern

The **Proxy Pattern** is a **structural design pattern** that provides a surrogate or placeholder for another object to control access to it. It acts as an interface to something else, usually to add functionality like access control, lazy loading, logging, etc.

---

## 🔶 Real-world Analogy

Think of a **credit card** as a proxy for your bank account. Instead of directly accessing the bank account (real object), you use a credit card (proxy) which performs the transaction on your behalf and includes features like fraud detection.

---

## ✅ Purpose

- Control access to the real object.
- Add additional functionality like lazy loading, logging, security, etc.

---

## 🔧 Structure

```text
Client --> Proxy --> RealSubject
                 |
               Subject (interface)
```

---

## 🧱 Components

1. **Subject**: Common interface for RealSubject and Proxy.
2. **RealSubject**: The actual object that the proxy represents.
3. **Proxy**: Controls access to the RealSubject and may add extra functionality.

---

## 🧑‍💻 Example in Python

### 🎯 Problem Statement

Suppose we have an object that loads a large image. We want to delay this loading until absolutely necessary (lazy loading).

---

### ✅ Subject Interface

```python
from abc import ABC, abstractmethod

class Image(ABC):
    @abstractmethod
    def display(self):
        pass
```

---

### 🖼 Real Subject

```python
class RealImage(Image):
    def __init__(self, filename):
        self.filename = filename
        self.load_image_from_disk()

    def load_image_from_disk(self):
        print(f"Loading {self.filename} from disk...")

    def display(self):
        print(f"Displaying {self.filename}")
```

---

### 🪞 Proxy

```python
class ProxyImage(Image):
    def __init__(self, filename):
        self.filename = filename
        self.real_image = None

    def display(self):
        if not self.real_image:
            self.real_image = RealImage(self.filename)
        self.real_image.display()
```

---

### 🧪 Usage

```python
image = ProxyImage("test_image.jpg")

# Image will be loaded only when display is called
print("First call:")
image.display()

print("\nSecond call:")
image.display()
```

---

## ✅ Benefits

- Adds additional functionality without changing RealSubject.
- Useful for access control, lazy initialization, caching, etc.

---

## 🚫 When NOT to Use

- When you don’t need to control access or add extra behavior.
- If the real object is lightweight and doesn’t need indirection.

---

## 🧠 Summary

- Proxy controls access to a real object.
- Often used for **lazy loading**, **access control**, **logging**, **caching**, and more.
- Follows the same interface as the real object to ensure transparency.

---

## 🧾 Related Patterns

- **Decorator**: Adds behavior dynamically but does not control access.
- **Adapter**: Converts interface, while Proxy provides access control.
- **Flyweight**: Shares objects to reduce memory, Proxy controls access to one.

---
