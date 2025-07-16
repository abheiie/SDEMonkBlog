
---
sidebar_position: 4
---

# Command

The **Command Pattern** is a **behavioral design pattern** that turns a request into a standalone object containing all the information about the request. This lets you parameterize clients with queues, requests, and operations, and support undoable operations.

---

## 🔶 Real-world Analogy

Think of a **TV remote control**. You press buttons (commands) like ON, OFF, Volume Up. The remote sends the command to the TV. You don’t need to know how the TV processes it — the remote encapsulates it.

---

## ✅ Purpose

- Encapsulate a request as an object.
- Parameterize clients with different requests.
- Support operations like **undo**, **redo**, **logging**, or **queueing**.

---

## 🔧 Structure

```text
+-----------+        +------------+       +-------------+
|  Client   |------->|  Invoker   |------>|  Command    |
+-----------+        +------------+       +-------------+
                                         /     |
                             +----------+      +----------+
                             |                             |
                     +---------------+          +----------------+
                     | ConcreteCommand|          |  Receiver       |
                     +---------------+          +----------------+


**Components**
1. Command: Interface declaring execute() method.
2. ConcreteCommand: Implements the execute() method and calls the receiver.
3. Receiver: Knows how to perform the operation.
4. Invoker: Stores command and executes it.
5. Client: Creates command and sets receiver.


🧑‍💻 Example in Python
🎯 Problem: Create a remote control that can turn on/off a light


**Command Interface**
                                
```Python
from abc import ABC, abstractmethod

class Command(ABC):
    @abstractmethod
    def execute(self):
        pass
```

🔸 Receiver
python
```Python
class Light:
    def turn_on(self):
        print("Light is ON")

    def turn_off(self):
        print("Light is OFF")
```


🔸 Concrete Commands
```Python
class LightOnCommand(Command):
    def __init__(self, light: Light):
        self.light = light

    def execute(self):
        self.light.turn_on()


class LightOffCommand(Command):
    def __init__(self, light: Light):
        self.light = light

    def execute(self):
        self.light.turn_off()
```

🔸 Invoker
```Python
class RemoteControl:
    def __init__(self):
        self.command: Command = None

    def set_command(self, command: Command):
        self.command = command

    def press_button(self):
        if self.command:
            self.command.execute()
```


🧪 Usage
```Python
light = Light()
light_on = LightOnCommand(light)
light_off = LightOffCommand(light)

remote = RemoteControl()

remote.set_command(light_on)
remote.press_button()  # Light is ON

remote.set_command(light_off)
remote.press_button()  # Light is OFF
```


✅ Benefits
Decouples sender and receiver.
Adds flexibility in executing, queuing, or logging operations.
Supports undo/redo.

🚫 When NOT to Use
If the overhead of creating many command classes isn't justified.
For simple operations where direct calls are more appropriate.

🧠 Summary
Use the Command pattern to encapsulate actions and decouple execution from invocation.
Great for building macro, transaction, and undo/redo systems.

🧾 Related Patterns
Strategy: Chooses from interchangeable behaviors.
Memento: Stores internal state for undo.
Observer: Notifies interested parties of changes.

