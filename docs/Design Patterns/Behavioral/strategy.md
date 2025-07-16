---
sidebar_position: 3
---

# Strategy

The **Strategy Pattern** is a **behavioral design pattern** that enables selecting an algorithm's behavior at runtime. It defines a family of algorithms, encapsulates each one, and makes them interchangeable.

---

## 🔶 Real-world Analogy

Think of a **navigation app** (like Google Maps). You can choose different strategies to reach a destination—by car, walking, or bicycle. The strategy can be changed at runtime based on user preference.

---

## ✅ Purpose

- Define a family of algorithms.
- Encapsulate each one and make them interchangeable.
- Allow the algorithm to vary independently from clients that use it.

---

## 🔧 Structure

```text
+----------------------+       +----------------------+
|      Context         |-----> |      Strategy        |
+----------------------+       +----------------------+
| - strategy: Strategy |       | + execute()          |
| + setStrategy()      |       +----------------------+
| + executeStrategy()  |              /|\\
+----------------------+               |
                                        --> ConcreteStrategyA
                                        --> ConcreteStrategyB
```

**Components**
1. Strategy – Interface common to all supported algorithms.
2. ConcreteStrategy – Implement different variations of the algorithm.
3. Context – Maintains a reference to a Strategy object and delegates it.

🧑‍💻 Example in Python
🔸 Strategy Interface
python
Copy
Edit
```python
from abc import ABC, abstractmethod

class PaymentStrategy(ABC):
    @abstractmethod
    def pay(self, amount: float):
        pass
```

🔸 Concrete Strategies
```python
class CreditCardPayment(PaymentStrategy):
    def pay(self, amount: float):
        print(f"Paid {amount} using Credit Card.")

class PayPalPayment(PaymentStrategy):
    def pay(self, amount: float):
        print(f"Paid {amount} using PayPal.")

class UpiPayment(PaymentStrategy):
    def pay(self, amount: float):
        print(f"Paid {amount} using UPI.")
```

**Context**
```python
class ShoppingCart:
    def __init__(self):
        self.strategy: PaymentStrategy = None

    def set_payment_strategy(self, strategy: PaymentStrategy):
        self.strategy = strategy

    def checkout(self, amount: float):
        if not self.strategy:
            raise Exception("No payment strategy set")
        self.strategy.pay(amount)
```

**Client Code**
```python
cart = ShoppingCart()

cart.set_payment_strategy(CreditCardPayment())
cart.checkout(100)

cart.set_payment_strategy(PayPalPayment())
cart.checkout(250)
```


**Benefits**
1. Enables switching algorithms at runtime.
2. Promotes the Open/Closed Principle.
3. Avoids multiple conditionals in the client code.

🚫 When NOT to Use
1. When there's only one fixed algorithm.
2. If strategy objects will never be switched at runtime.

🧠 Summary
1. Strategy Pattern allows runtime algorithm selection.
2. Makes code cleaner, extensible, and maintainable.
3. Often used in behavior customization.

🧾 Related Patterns
1. State: Similar structure, but used for different behavioral state transitions.
2. Command: Encapsulates a request as an object.
