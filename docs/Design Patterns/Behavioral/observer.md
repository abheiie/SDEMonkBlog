---
sidebar_position: 2
---

# Observer

The **Observer Pattern** is a **behavioral design pattern** where an object (the **Subject**) maintains a list of dependents (called **Observers**) and notifies them of state changes, usually by calling one of their methods.

---

## 🔶 Real-world Analogy

Imagine a **weather station**. It tracks changes in temperature and humidity. Devices like displays and delivery platforms (e.g., Zomato) subscribe to it. When the weather changes, they get notified and act accordingly.

---

## ✅ Purpose

- Define a one-to-many dependency between objects.
- When one object changes state, all its dependents are automatically updated.

---

## 🔧 Structure

```text
+-------------------+        +------------------+
|     Subject       |<-------|    Observer      |
+-------------------+        +------------------+
| + register()      |        | + update()       |
| + unregister()    |        +------------------+
| + notify()        |
+-------------------+
         |
         v
Notifies all registered observers
```

## Components
1. Subject – Maintains a list of observers and notifies them.
2. Observer – Defines the interface to receive updates.
3. ConcreteSubject – Holds the state and implements the notification logic.
4. ConcreteObserver – Implements the update() method to react to changes.

# Example in Python

**Observer Interface**

```Python
from abc import ABC, abstractmethod

class Observer(ABC):
    @abstractmethod
    def update(self, temp: int, humidity: int):
        pass

    def registerSubject(self, subject: Subject):
        subject.register(self)

    def unregisterSubject(self, subject: Subject):
        subject.unregister(self)

```

**Concrete Observers**
```Python

class Display(Observer):
    def update(self, temp, humidity):
        print(f"Temp: {temp}, Humidity: {humidity} from display")

class Zomato(Observer):
    def update(self, temp, hum):
        if hum > 20:
            print("Zomato updated price of delivery..")
        else:
            print("Zomato already increased delivery price due to humidity..")

        if temp > 30:
            print("Zomato updated price of delivery..")
```


**Subject Class**
```Python
from typing import List

class Subject:
    def __init__(self):
        self.observers: list[Observer] = []

    def register(self, observer):
        self.observers.append(observer)

    def unregister(self, observer):
        self.observers.remove(observer)

    def notify(self, temp, hum):
        for observer in self.observers:
            observer.update(temp, hum)
```
🔸 Concrete Subject: WeatherStation

```Python
from subjects.subject import Subject

class WeatherStation(Subject):
    def __init__(self):
        super().__init__()
        self.temp = 0
        self.humidity = 0

    def updateWeather(self, temp, hum):
        self.temp = temp
        self.humidity = hum
        self.notify(temp, hum)
```

Client Code

```Python
station = WeatherStation()

display = Display()
zomato = Zomato()

display.registerSubject(station)
zomato.registerSubject(station)

station.updateWeather(32, 25)

# Output:
# Temp: 32, Humidity: 25 from display
# Zomato updated price of delivery..
# Zomato updated price of delivery..
```


**Benefits**
1. Promotes loose coupling between subject and observers.
2. Makes it easy to add or remove observers.
3. Ideal for event-driven or reactive systems.

🚫 When Not to Use
1. When you have too many observers — can lead to performance issues.
2. When the order of notification matters but isn’t guaranteed.

Summary
1. Observer Pattern is useful for broadcasting state changes.
2. Widely used in GUIs, logging, event systems, pub-sub architectures.

🧾 Related Patterns
1. Mediator: Controls complex communication between objects.
2. Publish-Subscribe: Observer with more decoupling using event buses.
