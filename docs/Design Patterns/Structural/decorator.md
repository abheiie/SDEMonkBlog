---
sidebar_position: 5
---

# Decorator Design Pattern

The **Decorator Pattern** is a **structural design pattern** that allows behavior to be added to individual objects, dynamically, without affecting the behavior of other objects from the same class.

---

## Motivation

Imagine building a pizza ordering system. A base pizza can have multiple optional toppings (cheese, olives, mushrooms, etc.). Instead of creating subclasses for every possible combination (e.g., CheesePizzaWithOlivesAndMushrooms), you can use the **Decorator Pattern** to dynamically add toppings.

---

## Benefits

- Adds responsibilities to objects dynamically.
- Promotes composition over inheritance.
- Flexible alternative to subclassing.
- Follows the Open/Closed Principle.

---

## Structure

```
    Component
       |
   ConcreteComponent
       |
   Decorator (has a Component)
       |
   ConcreteDecorators
```

- **Component**: Interface for objects that can have responsibilities added.
- **ConcreteComponent**: The base object being wrapped.
- **Decorator**: Has a reference to a Component and implements the Component interface.
- **ConcreteDecorator**: Adds responsibilities to the component.

---

## Example in Python - Pizza and Toppings

### Component Interface

```python
from abc import ABC, abstractmethod

class Pizza(ABC):
    @abstractmethod
    def cost(self):
        pass

    @abstractmethod
    def description(self):
        pass
```

### Base Concrete Component

```python
class Margherita(Pizza):
    def cost(self):
        return 200

    def description(self):
        return "Margherita"
```

### Base Decorator

```python
class ToppingDecorator(Pizza):
    def __init__(self, pizza: Pizza):
        self.pizza = pizza
```

### Concrete Decorators

```python
class Cheese(ToppingDecorator):
    def cost(self):
        return self.pizza.cost() + 50

    def description(self):
        return self.pizza.description() + ", Cheese"

class Olives(ToppingDecorator):
    def cost(self):
        return self.pizza.cost() + 30

    def description(self):
        return self.pizza.description() + ", Olives"
```

### Client Code

```python
pizza = Margherita()
print(pizza.description(), "=> ₹", pizza.cost())

pizza_with_cheese = Cheese(pizza)
print(pizza_with_cheese.description(), "=> ₹", pizza_with_cheese.cost())

pizza_with_cheese_and_olives = Olives(pizza_with_cheese)
print(pizza_with_cheese_and_olives.description(), "=> ₹", pizza_with_cheese_and_olives.cost())
```

---

## Summary

- Use the **Decorator Pattern** to add functionality to objects at runtime.
- Ideal when you need a flexible way to combine behaviors.
- Helps avoid an explosion of subclasses by using composition.
