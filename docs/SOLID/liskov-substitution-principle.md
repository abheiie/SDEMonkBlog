---
sidebar_position: 4
---

# Liskov Substitution Principle (LSP)

- **Subtypes must be substitutable for their base types without altering the correctness of the program.**

- In other words, if class `S` is a subclass of class `T`, then objects of type `T` should be replaceable with objects of type `S` without breaking the behavior of the program.

- To demonstrate the Liskov Substitution Principle (LSP) and how it improves object-oriented design, consider the following example using a `Bird` class:


❌ **Before Applying LSP:**

```python
# bird.py

class Bird:
    def fly(self):
        pass

class Sparrow(Bird):
    def fly(self):
        print("Sparrow flying")

class Ostrich(Bird):
    def fly(self):
        raise NotImplementedError("Ostriches can't fly!")
```

> 🔴 Problem: `Ostrich` is a subclass of `Bird` but cannot fulfill the expected behavior of `fly()` — violating LSP.


✅ **After Applying LSP:**

```python
# bird.py

class Bird:
    pass

class FlyingBird(Bird):
    def fly(self):
        pass
```

```python
# sparrow.py

class Sparrow(FlyingBird):
    def fly(self):
        print("Sparrow flying")
```

```python
# ostrich.py

class Ostrich(Bird):
    def run(self):
        print("Ostrich running")
```

```python
# main.py

def make_bird_fly(bird: FlyingBird):
    bird.fly()

birds = [Sparrow()]
for bird in birds:
    make_bird_fly(bird)
```

✅ **Now:**

- `Sparrow` is a **FlyingBird** and safely used where `FlyingBird` is expected.
- `Ostrich` no longer pretends to be a flying bird, so no unexpected behavior occurs.

This design makes the code:
- ✅ Respectful of behavioral expectations
- ✅ Easier to maintain and extend
- ✅ Aligned with true object hierarchy
