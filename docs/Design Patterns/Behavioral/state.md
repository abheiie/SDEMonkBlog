---
sidebar_position: 5
---

# State

The **State Pattern** is a **behavioral design pattern** that allows an object to alter its behavior when its internal state changes. The object will appear to change its class.

---

## 🔶 Real-world Analogy

Think of a **TV**. It has states like ON and OFF. Pressing the power button causes the TV to change its state, and the behavior (display, sound, etc.) changes accordingly.

---

## ✅ Purpose

- Encapsulate state-specific behavior.
- Change behavior at runtime depending on internal state.
- Eliminate large conditionals by delegating state-specific behavior to individual classes.

---

## 🔧 Structure

```text
+-------------+        +-------------------+
|   Context   |------->|     State         |
+-------------+        +-------------------+
| - state     |        | + handle()        |
| + request() |        +-------------------+
+-------------+               /|\
                              |
                +---------------------+
                | ConcreteStateA      |
                | ConcreteStateB      |
                +---------------------+
```

---

## 🧱 Components

1. **Context** – Maintains a reference to a State object.
2. **State** – Interface declaring behavior for state-specific logic.
3. **ConcreteStates** – Implement behavior associated with a particular state.

---

## 🧑‍💻 Example in Python

### 🎯 Problem: Simulate a TV with ON and OFF states

---

### 🔸 State Interface

```python
from abc import ABC, abstractmethod

class State(ABC):
    @abstractmethod
    def press_button(self, context):
        pass
```

---

### 🔸 Concrete States

```python
class OnState(State):
    def press_button(self, context):
        print("Turning TV OFF...")
        context.set_state(OffState())

class OffState(State):
    def press_button(self, context):
        print("Turning TV ON...")
        context.set_state(OnState())
```

---

### 🔸 Context

```python
class TVContext:
    def __init__(self):
        self.state: State = OffState()

    def set_state(self, state: State):
        self.state = state

    def press_button(self):
        self.state.press_button(self)
```

---

### 🧪 Usage

```python
tv = TVContext()

tv.press_button()  # Turning TV ON...
tv.press_button()  # Turning TV OFF...
tv.press_button()  # Turning TV ON...
```

---

## ✅ Benefits

- Avoids long conditionals.
- Makes state transitions explicit.
- Adds flexibility by encapsulating states.

---

## 🚫 When NOT to Use

- When the number of states is small and unlikely to change.
- When overhead of creating state classes is not justified.

---

## 🧠 Summary

- State pattern lets an object alter its behavior when its internal state changes.
- Each state is encapsulated in its own class.
- Great for systems with complex state-dependent logic.

---

## 🧾 Related Patterns

- **Strategy**: Chooses an algorithm; State chooses behavior based on state.
- **Command**: Encapsulates actions; State encapsulates behavior.

---
