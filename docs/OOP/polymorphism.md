---
sidebar_position: 5
---

# Polymorphism

## What is Polymorphism?

**Polymorphism** means “many forms”. It allows objects of different classes to be treated as objects of a common superclass.  
It enables the **same interface** to behave differently depending on the underlying object.

---

## Why use Polymorphism?

- Enables **flexible and reusable** code  
- Allows **method overriding** for specific behaviors  
- Promotes **interface-based design**  
- Makes it easier to **extend** functionality

---

## Real-world Example:

Different animals make different sounds, but all respond to the `make_sound()` call.

```Python
class Animal:
    def make_sound(self):
        pass

class Dog(Animal):
    def make_sound(self):
        print("Woof!")

class Cat(Animal):
    def make_sound(self):
        print("Meow!")

def animal_sound(animal: Animal):
    animal.make_sound()

animal_sound(Dog())  # Woof!
animal_sound(Cat())  # Meow!
```
✅ One function handles multiple object types. That’s polymorphism!


## Types of Polymorphism in Python:

### 1️⃣ Compile-Time Polymorphism (Method Overloading) ❌
Python does not support true method overloading (like Java/C++), but you can use default or variable-length arguments.

```Python
class Math:
    def add(self, a, b=0, c=0):
        return a + b + c

m = Math()
print(m.add(2))       # 2
print(m.add(2, 3))    # 5
print(m.add(2, 3, 4)) # 9
```
### 2️⃣ Run-Time Polymorphism (Method Overriding) ✅
Subclasses override the parent class method to provide specific behavior.

```Python
class Shape:
    def area(self):
        pass

class Circle(Shape):
    def area(self):
        return 3.14 * 5 * 5

class Square(Shape):
    def area(self):
        return 4 * 4

shapes = [Circle(), Square()]
for shape in shapes:
    print(shape.area())
```
## ✅ Summary:

Polymorphism allows the **same interface** to be reused for **different underlying forms**.

---


### Encourages:

- ✅ **Cleaner** and **extensible** code  
- ✅ Better use of **abstraction**  
- ✅ Flexible systems with **fewer changes needed**

---

### Polymorphism helps you:

- **Replace/extend logic** without changing the existing code  
- Rely on **contracts/interfaces** rather than concrete types




