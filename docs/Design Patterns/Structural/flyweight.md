---
sidebar_position: 7
---

# Flyweight Design Pattern

The **Flyweight Pattern** is a **structural design pattern** that aims to minimize memory usage by sharing as much data as possible with similar objects. It is especially useful when dealing with a large number of objects that share common properties.

---

## 🔶 Real-world Analogy

Imagine a **text editor**. Each character you type is an object. Instead of creating a new object for every character, a flyweight pattern can share the character format (font, size, color) among multiple character objects and only store unique data (like position).

---

## ✅ Purpose

- Reduce memory consumption.
- Improve performance by sharing common data.

---

## 🔧 Structure

```text
Client --> FlyweightFactory --> Flyweight (shared) --> Intrinsic State
                                      |
                                      --> Extrinsic State (from Client)
```

---

## 🧱 Components

1. **Flyweight**: Interface or abstract class for shared objects.
2. **ConcreteFlyweight**: Implements the Flyweight interface and stores intrinsic state.
3. **FlyweightFactory**: Creates and manages Flyweight objects.
4. **Client**: Uses the Flyweight objects and supplies the extrinsic state.

---

## 🧑‍💻 Example in Python

### 🎯 Problem Statement

We want to render multiple trees in a forest. Each tree type (texture, color, height) is the same for many trees, but the position differs.

---

### ✅ Flyweight (Shared Object)

```python
class TreeType:
    def __init__(self, name, color, texture):
        self.name = name
        self.color = color
        self.texture = texture

    def draw(self, x, y):
        print(f"Drawing {self.name} tree of color {self.color} at ({x}, {y})")
```

---

### 🏭 Flyweight Factory

```python
class TreeFactory:
    _tree_types = {}

    @classmethod
    def get_tree_type(cls, name, color, texture):
        key = (name, color, texture)
        if key not in cls._tree_types:
            cls._tree_types[key] = TreeType(name, color, texture)
        return cls._tree_types[key]
```

---

### 🌳 Tree (Context Class)

```python
class Tree:
    def __init__(self, x, y, tree_type):
        self.x = x
        self.y = y
        self.tree_type = tree_type

    def draw(self):
        self.tree_type.draw(self.x, self.y)
```

---

### 🌲 Forest (Client)

```python
class Forest:
    def __init__(self):
        self.trees = []

    def plant_tree(self, x, y, name, color, texture):
        tree_type = TreeFactory.get_tree_type(name, color, texture)
        tree = Tree(x, y, tree_type)
        self.trees.append(tree)

    def draw(self):
        for tree in self.trees:
            tree.draw()
```

---

### 🧪 Usage

```python
forest = Forest()
forest.plant_tree(10, 20, "Oak", "Green", "Rough")
forest.plant_tree(15, 25, "Oak", "Green", "Rough")
forest.plant_tree(30, 40, "Pine", "Dark Green", "Smooth")

forest.draw()
```

---

## ✅ Benefits

- Great for memory optimization with large object sets.
- Improves application performance.

---

## 🚫 When NOT to Use

- If objects don't share intrinsic data.
- If objects are too complex or require unique state.

---

## 🧠 Summary

- Flyweight shares objects to reduce memory usage.
- Splits object data into **intrinsic** (shared) and **extrinsic** (unique) state.
- Best used in performance-critical applications with high object counts.

---

## 🧾 Related Patterns

- **Prototype**: Clones objects instead of sharing.
- **Singleton**: Ensures a single shared object globally.

---
