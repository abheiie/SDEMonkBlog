---
sidebar_position: 5
---

# Interface Segregation Principle (ISP)

- **Clients should not be forced to depend on interfaces they do not use.**

- This means a class should not be required to implement methods it doesn’t need. ISP encourages splitting large interfaces into more specific ones.

- To demonstrate the Interface Segregation Principle (ISP), consider the following example with a `Worker` interface:


❌ **Before Applying ISP:**

```python
# worker.py

class Worker:
    def work(self):
        pass

    def eat(self):
        pass

class HumanWorker(Worker):
    def work(self):
        print("Working...")

    def eat(self):
        print("Eating lunch...")

class RobotWorker(Worker):
    def work(self):
        print("Working...")

    def eat(self):
        raise NotImplementedError("Robots don't eat")
```

> 🔴 Problem: `RobotWorker` is forced to implement the `eat` method even though it doesn’t make sense for robots.


✅ **After Applying ISP:**

```python
# interfaces.py

class Workable:
    def work(self):
        pass

class Eatable:
    def eat(self):
        pass
```

```python
# workers.py

class HumanWorker(Workable, Eatable):
    def work(self):
        print("Working...")

    def eat(self):
        print("Eating lunch...")

class RobotWorker(Workable):
    def work(self):
        print("Working...")
```

✅ **Now:**

- `HumanWorker` implements both `Workable` and `Eatable`.
- `RobotWorker` only implements `Workable`, not forced to define irrelevant behavior.

This design makes the code:
- ✅ Cleaner and more meaningful
- ✅ Easier to maintain and extend
- ✅ More aligned with real-world roles
