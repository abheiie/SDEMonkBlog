---
sidebar_position: 1
---

# Overview

Creational design patterns deal with **object creation mechanisms**, trying to create objects in a manner suitable to the situation. They help make a system **independent of how its objects are created, composed, and represented**.

These patterns abstract the instantiation process, making it more flexible and reusable.

---

## Purpose

- Reduce complexity in object creation
- Promote loose coupling
- Increase flexibility and reusability
- Hide instantiation logic

---

## List of Creational Design Patterns

### 1. **Singleton Pattern**
> Ensures a class has **only one instance**, and provides a global point of access to it.

- Useful for: Logging, configuration, database connections
- Key concepts: Private constructor, static instance, thread safety

---

### 2. **Factory Method Pattern**
> Defines an interface for creating objects, but lets subclasses alter the type of objects that will be created.

- Useful for: Delegating object creation to subclasses
- Key concepts: Inheritance, interface-based creation
---

### 3. **Abstract Factory Pattern**
> Provides an interface for creating **families of related objects** without specifying their concrete classes.

- Useful for: UI components across platforms (Windows/Mac/Linux)
- Key concepts: Factory of factories, product families
---

### 4. **Builder Pattern**
> Separates the construction of a complex object from its representation so that the same construction process can create different representations.

- Useful for: Building objects with many optional parameters
- Key concepts: Step-by-step construction, fluent interface
---

### 5. **Prototype Pattern**
> Creates new objects by copying an existing object (clone), rather than creating from scratch.

- Useful for: Performance-intensive object creation
- Key concepts: Cloning, deep vs. shallow copy
---

## Summary Table

| Pattern            | Intent                                         | Example Use Case                     |
|--------------------|------------------------------------------------|--------------------------------------|
| Singleton          | Single instance with global access             | Logger, Config Manager               |
| Factory Method     | Delegate instantiation to subclasses           | Notification service (Email/SMS)     |
| Abstract Factory   | Create related objects without specifying class| UI toolkit for multiple OS           |
| Builder            | Step-by-step construction of complex objects   | Building a customizable Meal         |
| Prototype          | Create new objects by copying an existing object| Object pools, caching                 |
