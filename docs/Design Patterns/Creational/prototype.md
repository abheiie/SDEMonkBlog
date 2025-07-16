---
sidebar_position: 5
---

# Prototype

The **Prototype Pattern** is a **creational design pattern** used to **create clones** of existing objects without relying on their classes.  
It is particularly useful when object creation is **costly**, and you want to avoid repeating the process.

---

## Why Use It?

- Useful when the cost of creating an object is **more expensive** than copying it.
- Avoids the overhead of creating a new instance from scratch.
- Supports the creation of **complex or performance-heavy objects**.
- Great when objects have **many similar configurations**.

---

## 🔫 PUBG Game Example: Bullets

In a shooting game like **PUBG**, bullets are fired frequently.  
Instead of creating a new bullet object every time, you can **clone a prototype bullet** and change only the dynamic properties — like position and direction.

---

## 🧱 Structure

- `Bullet` is the prototype class with a `clone()` method.
- `BulletPrototypeManager` manages different bullet types (e.g., AKM, M416).
- New bullets are created by cloning a base template and modifying position or direction.

---

```python title="bullet.py"
import copy

class Bullet:
    def __init__(self, weapon_type, damage, speed, coordinates):
        self.weapon_type = weapon_type
        self.damage = damage
        self.speed = speed
        self.coordinates = coordinates  # (x, y, z)

    def clone(self):
        return copy.deepcopy(self)

    def set_coordinates(self, coordinates):
        self.coordinates = coordinates

    def __str__(self):
        return f"Bullet({self.weapon_type}, Damage: {self.damage}, Speed: {self.speed}, Coordinates: {self.coordinates})"
```

---

```python title="bullet_prototype_manager.py"
class BulletPrototypeManager:
    def __init__(self):
        self._prototypes = {}

    def register_prototype(self, name, bullet_prototype):
        self._prototypes[name] = bullet_prototype

    def unregister_prototype(self, name):
        if name in self._prototypes:
            del self._prototypes[name]

    def clone(self, name, new_coordinates):
        bullet = self._prototypes.get(name)
        if not bullet:
            raise ValueError(f"No prototype registered under name '{name}'")
        cloned = bullet.clone()
        cloned.set_coordinates(new_coordinates)
        return cloned
```

---

```python title="main.py"
from bullet import Bullet
from bullet_prototype_manager import BulletPrototypeManager

if __name__ == "__main__":
    manager = BulletPrototypeManager()

    # Register base bullets
    akm_bullet = Bullet("AKM", damage=50, speed=900, coordinates=(0, 0, 0))
    m416_bullet = Bullet("M416", damage=43, speed=880, coordinates=(0, 0, 0))

    manager.register_prototype("AKM", akm_bullet)
    manager.register_prototype("M416", m416_bullet)

    # Fire bullets (clone with new coordinates)
    fired1 = manager.clone("AKM", (10, 5, 2))
    fired2 = manager.clone("AKM", (12, 6, 2))
    fired3 = manager.clone("M416", (8, 3, 1))

    print(fired1)
    print(fired2)
    print(fired3)
```

---

## ✅ Output

```
Bullet(AKM, Damage: 50, Speed: 900, Coordinates: (10, 5, 2))
Bullet(AKM, Damage: 50, Speed: 900, Coordinates: (12, 6, 2))
Bullet(M416, Damage: 43, Speed: 880, Coordinates: (8, 3, 1))
```

---

## 💡 Summary

- Prototype Pattern avoids expensive object creation.
- Ideal for high-frequency object usage like game entities (bullets, particles, enemies).
- Ensures performance optimization and consistent object configuration.
