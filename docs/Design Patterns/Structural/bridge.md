---
sidebar_position: 3
---

# Bridge

The **Bridge Pattern** is a **structural design pattern** that decouples an abstraction from its implementation so that the two can vary independently. It helps you avoid a permanent binding between an abstraction and its implementation.

---

## Motivation

When you have classes that can be categorized in two independent dimensions (e.g., **Shape** and **Color**, or **Remote** and **Device**), you might end up with **combinatorial explosion** if you try to create a subclass for every combination.

**Bridge Pattern** allows you to separate these dimensions and let them grow independently.

---

## Benefits

- **Decouples Abstraction from Implementation**
- **Reduces Class Explosion**
- **Improves Code Maintainability and Scalability**
- **Increases Flexibility and Extensibility**

---

## Structure

```
          Abstraction
               |
     ---------------------
     |                   |
RefinedAbstraction   Implementor (interface)
                           |
                 -------------------
                 |                 |
       ConcreteImplementorA  ConcreteImplementorB
```

- **Abstraction**: Defines the high-level interface and holds a reference to the implementor.
- **Implementor**: Interface for the implementation class.
- **RefinedAbstraction**: Extends the abstraction interface.
- **ConcreteImplementor**: Concrete implementation of the implementor interface.

---

## Example in Python

Imagine you have different types of remotes (basic, advanced) and different types of devices (TV, Radio).

### Implementor Interface

```python
from abc import ABC, abstractmethod

class Device(ABC):
    @abstractmethod
    def turn_on(self):
        pass

    @abstractmethod
    def turn_off(self):
        pass
```

### Concrete Devices

```python
class TV(Device):
    def turn_on(self):
        print("TV is turned on")

    def turn_off(self):
        print("TV is turned off")


class Radio(Device):
    def turn_on(self):
        print("Radio is turned on")

    def turn_off(self):
        print("Radio is turned off")
```

### Abstraction

```python
class RemoteControl:
    def __init__(self, device: Device):
        self.device = device

    def turn_on_device(self):
        self.device.turn_on()

    def turn_off_device(self):
        self.device.turn_off()
```

### 🧑‍💻 Client Code

```python
tv = TV()
radio = Radio()

tv_remote = RemoteControl(tv)
radio_remote = RemoteControl(radio)

tv_remote.turn_on_device()
tv_remote.turn_off_device()

radio_remote.turn_on_device()
radio_remote.turn_off_device()
```

---

## Summary

- Use the **Bridge Pattern** when you want to avoid a **multiplication of subclasses** due to multiple dimensions of variation.
- It **follows the principle of composition over inheritance**.
- It’s highly useful when your class has different variants (Abstractions) and each variant can work with multiple backends (Implementors).

---
