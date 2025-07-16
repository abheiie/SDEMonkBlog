---
sidebar_position: 4
---

# Composite Design Pattern

The **Composite Pattern** is a **structural design pattern** used to treat individual objects and compositions of objects uniformly. It allows you to compose objects into tree structures to represent part-whole hierarchies.

---

## Motivation

Imagine building a UI system with buttons, panels, and windows. A `Panel` can contain multiple elements like `Button` or even other `Panel`s. You need to treat all UI components uniformly, whether it's a single element or a group.

**Composite Pattern** allows you to work with both single objects and groups of objects using the same interface.

---

## Benefits

- **Uniformity**: Treat individual and composite objects uniformly.
- **Extensibility**: Easy to add new components.
- **Tree Structure**: Ideal for part-whole hierarchies (like files and folders).
- **Simplifies Client Code**: Client doesn't need to differentiate between leaf and composite nodes.

---

## 🔨 Structure

```
          Component
          /      \
      Leaf     Composite
                   |
              [Component...]
```

- **Component**: Common interface for all objects in the hierarchy.
- **Leaf**: Represents leaf nodes (no children).
- **Composite**: Represents nodes that can have children.

---

## Example in Python

### Component Interface

```python
from abc import ABC, abstractmethod

class Graphic(ABC):
    @abstractmethod
    def draw(self):
        pass
```

### Leaf Objects

```python
class Line(Graphic):
    def draw(self):
        print("Drawing a Line")

class Circle(Graphic):
    def draw(self):
        print("Drawing a Circle")
```

### Composite Object

```python
class Picture(Graphic):
    def __init__(self):
        self.children = []

    def add(self, graphic: Graphic):
        self.children.append(graphic)

    def draw(self):
        for child in self.children:
            child.draw()
```

### Client Code

```python
line1 = Line()
circle1 = Circle()

picture = Picture()
picture.add(line1)
picture.add(circle1)

picture.draw()
```

---

## Summary

- Use the **Composite Pattern** when you need to represent **part-whole hierarchies**.
- It allows the **client code to treat both individual objects and compositions uniformly**.
- Widely used in GUI systems, file systems, and XML/HTML parsers.

---
