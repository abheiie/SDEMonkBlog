---
sidebar_position: 6
---

# Facade Design Pattern

The **Facade Pattern** is a **structural design pattern** that provides a simplified interface to a complex subsystem. It hides the complexities of the system and provides a simpler interface to the client.

---

## 🔶 Real-world Analogy

Think of a **restaurant waiter** as a facade. You (the customer) interact only with the waiter, not with the chef, kitchen staff, or the billing system. The waiter takes your order, passes it to the kitchen, brings the food, and manages the bill.

---

## ✅ Purpose

- To **decouple** a client from complex subsystem classes.
- To **simplify** usage of a large body of code.

---

## 🔧 Structure

```text
Client ---> Facade ---> Subsystems (ClassA, ClassB, ClassC)
```

---

## 🧱 Components

1. **Facade**: Knows which subsystem classes are responsible for a request and delegates the task.
2. **Subsystem classes**: Perform the actual work.
3. **Client**: Uses the facade instead of calling subsystem classes directly.

---

## 🧑‍💻 Example in Python

### 🎯 Problem Statement

Suppose you are creating a **Home Theater System**. It consists of multiple subsystems like DVD Player, Projector, Lights, etc. The client should not need to know how to operate all of them.

### ✅ Subsystem Classes

```python
class DVDPlayer:
    def on(self):
        print("DVD Player is ON")

    def play(self, movie):
        print(f"Playing movie: {movie}")

    def off(self):
        print("DVD Player is OFF")

class Projector:
    def on(self):
        print("Projector is ON")

    def set_wide_screen_mode(self):
        print("Projector in widescreen mode")

    def off(self):
        print("Projector is OFF")

class Lights:
    def dim(self):
        print("Lights dimmed")

    def on(self):
        print("Lights are ON")
```

---

### 🎯 Facade Class

```python
class HomeTheaterFacade:
    def __init__(self, dvd: DVDPlayer, projector: Projector, lights: Lights):
        self.dvd = dvd
        self.projector = projector
        self.lights = lights

    def watch_movie(self, movie):
        print("Get ready to watch a movie...")
        self.lights.dim()
        self.projector.on()
        self.projector.set_wide_screen_mode()
        self.dvd.on()
        self.dvd.play(movie)

    def end_movie(self):
        print("Shutting movie theater down...")
        self.dvd.off()
        self.projector.off()
        self.lights.on()
```

---

### 🧪 Client Code

```python
# Client
dvd = DVDPlayer()
projector = Projector()
lights = Lights()

home_theater = HomeTheaterFacade(dvd, projector, lights)

home_theater.watch_movie("Inception")
print("\n--- After movie ---\n")
home_theater.end_movie()
```

---

## ✅ Benefits

- Simplifies the usage of complex subsystems.
- Reduces dependencies for the client.
- Promotes loose coupling.

---

## 🚫 When NOT to Use

- If you need full control over all subsystem operations.
- When you don’t want to hide any complexity from the client.

---

## 🧠 Summary

- Facade provides a **unified, high-level interface**.
- Hides subsystem complexity.
- Makes the client interface cleaner and easier to use.

---

## 🧾 Related Patterns

- **Mediator**: Controls communication between classes, but differs as it involves bidirectional communication.
- **Adapter**: Converts one interface to another, while Facade simplifies.

---
