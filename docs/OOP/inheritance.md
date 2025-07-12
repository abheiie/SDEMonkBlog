---
sidebar_position: 4
---

# Inheritance

## What is Inheritance?

**Inheritance** is an OOP concept where a class (child/subclass) can **inherit attributes and methods** from another class (parent/superclass).  
It promotes **code reuse** and establishes a **"is-a" relationship** between classes.

---

## Why use Inheritance?

- Reduces code duplication  
- Establishes a clear hierarchy  
- Promotes reusability and extensibility  
- Helps model real-world relationships

---

## Basic Example:

```python
# animal.py

class Animal:
    def speak(self):
        print("Animal speaks")

class Dog(Animal):
    def speak(self):
        print("Dog barks")

dog = Dog()
dog.speak()  # Outputs: Dog barks
```

## Types of Inheritance in Python

**1️⃣ Single Inheritance**
A subclass inherits from one superclass.

```python
class Parent:
    def show(self):
        print("Parent method")

class Child(Parent):
    def display(self):
        print("Child method")

c = Child()
c.show()
c.display()
```

**2️⃣ Multiple Inheritance**
A subclass inherits from more than one parent class.

```python
class Father:
    def skill(self):
        print("Gardening")

class Mother:
    def talent(self):
        print("Painting")

class Child(Father, Mother):
    pass

c = Child()
c.skill()
c.talent()
```

**3️⃣ Multilevel Inheritance**
A class inherits from a class which itself inherits from another class.

``` Python
class Grandparent:
    def legacy(self):
        print("Family legacy")

class Parent(Grandparent):
    def value(self):
        print("Parental values")

class Child(Parent):
    def dream(self):
        print("Child's dream")

c = Child()
c.legacy()
c.value()
c.dream()
```

**4️⃣ Hierarchical Inheritance**
Multiple classes inherit from a single parent class.

```python
class Parent:
    def show(self):
        print("Parent class")

class ChildA(Parent):
    def featureA(self):
        print("Feature A")

class ChildB(Parent):
    def featureB(self):
        print("Feature B")

a = ChildA()
a.show()
a.featureA()

b = ChildB()
b.show()
b.featureB()
```

**5️⃣ Hybrid Inheritance**
Combination of more than one type of inheritance.

```Python
class A:
    def methodA(self):
        print("Method from A")

class B(A):
    def methodB(self):
        print("Method from B")

class C:
    def methodC(self):
        print("Method from C")

class D(B, C):
    def methodD(self):
        print("Method from D")

d = D()
d.methodA()
d.methodB()
d.methodC()
d.methodD()
```


## ✅ Summary:

- Use inheritance to **reuse and extend** functionality.
- ⚠️ Be cautious of **diamond problems** in multiple inheritance.
- 💡 Prefer **composition over inheritance** when relationships don’t clearly follow an “is-a” pattern.

Inheritance helps create:
- ✅ **Structured and organized** code  
- ✅ **Better code reuse** and **extensibility**  
- ✅ **Clear relationships** between classes

