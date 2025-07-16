---
sidebar_position: 2
---

# Adapter (Wrapper)

The **Adapter Pattern** is a **structural design pattern** that allows incompatible interfaces to work together. It acts as a **bridge** between two objects by wrapping an existing class and exposing a standard interface.

---

## Motivation

Sometimes, you want to integrate a class into your system, but its interface is **not compatible** with what the system expects. Instead of modifying the class (which may not be possible), you can write an **adapter** that translates the existing interface to the expected one.

---

## Benefits

- **Compatibility**: Connects classes with mismatched interfaces.
- **Reusability**: Use existing classes without altering them.
- **Flexibility**: Extend functionality by creating multiple adapters.
- **Decoupling**: Client code works with a common interface, not specific implementations.

---

## Structure
Client --> Target Interface --> Adapter --> Adaptee


- **Target Interface**: The expected interface (e.g., `PaymentGateway`)
- **Adaptee**: The existing class with a different interface (e.g., `BankA`, `BankB`)
- **Adapter**: Wraps the Adaptee and converts the interface to match the Target

---

## Example in Python

### Common Interface

```Python
class PaymentGateway:
    def process_payment(self, amount):
        pass
```

**Incompatible Classes**

```Python 
class BankA:
    def send_money(self, amount):
        print(f"BankA: Sending ₹{amount}")

class BankB:
    def make_transaction(self, value):
        print(f"BankB: Transacting ₹{value}")
```

### Adapter Implementation

```Python
class BankAAdapter(PaymentGateway):
    def __init__(self, bank_a):
        self.bank_a = bank_a

    def process_payment(self, amount):
        self.bank_a.send_money(amount)


class BankBAdapter(PaymentGateway):
    def __init__(self, bank_b):
        self.bank_b = bank_b

    def process_payment(self, amount):
        self.bank_b.make_transaction(amount)
```

***Client Code (Unified Usage)***
```Python
bank_a = BankA()
bank_b = BankB()

adapter_a = BankAAdapter(bank_a)
adapter_b = BankBAdapter(bank_b)

adapter_a.process_payment(1000)
adapter_b.process_payment(2000)
```






