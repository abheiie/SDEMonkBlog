---
sidebar_position: 3
---

# Abstraction

## ✅ What is Abstraction?

**Abstraction** means exposing only the **essential features** of an object while hiding the **unnecessary implementation details**.

It lets you focus on **what** an object does rather than **how** it does it — using interfaces or abstract classes.

---

## ✅ Why use Abstraction?

- Provides a clear and simplified interface  
- Hides complexity from the user  
- Enables interchangeable components  
- Improves modularity and flexibility  
- Makes the system easier to extend and refactor

---

## ❌ Before Applying Abstraction:

```python
# payment.py

class PaymentProcessor:
    def pay_with_credit_card(self, amount):
        print(f"Processing credit card payment of ${amount}")

    def pay_with_paypal(self, amount):
        print(f"Processing PayPal payment of ${amount}")

```



🔴 **Problem:**
 Code is tightly coupled to specific payment methods. Adding a new method requires modifying the class.

## ✅ After Applying Abstraction:

```Python
# payment_method.py

from abc import ABC, abstractmethod

class PaymentMethod(ABC):
    @abstractmethod
    def pay(self, amount):
        pass
```

```Python
# credit_card.py

class CreditCardPayment(PaymentMethod):
    def pay(self, amount):
        print(f"Paid ${amount} using Credit Card")
```

```Python
# paypal.py

class PayPalPayment(PaymentMethod):
    def pay(self, amount):
        print(f"Paid ${amount} using PayPal")

```

```Python
# main.py

def checkout(payment_method: PaymentMethod, amount):
    payment_method.pay(amount)

checkout(CreditCardPayment(), 100)
checkout(PayPalPayment(), 50)

```

✅ Now:
- You can add new payment methods without changing the existing code.

The system is modular and extendable.

Users of PaymentMethod only care about the pay() method, not the internal details.

Abstraction makes your code:

- ✅ Simpler to use

- ✅ Easier to maintain

- ✅ Ready for change
