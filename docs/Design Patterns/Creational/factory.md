---
sidebar_position: 3
---

# Factory Method

The **Factory Method** is a **creational design pattern** that provides an interface for creating objects in a superclass, but allows subclasses to **alter the type of objects that will be created** — without exposing the concrete class to the client.

---

## Why Use It?

- Solves the problem of **creating product objects** without specifying their **exact class**.
- Helps in **decoupling the object creation** from the client code.
- Makes your code more **flexible** and **open for extension** but **closed for modification** (Open/Closed Principle).

---

## ♟️ Chess Example: Knight Upgrade

Let’s say we have a `Knight` class in our chess game.

If we upgrade it to `KnightV2`, the traditional way would **force the client to update its code** to use the new class.  
But with the **Factory Pattern**, you can make this change **internally**, without touching the client code!

✅ This means:  
> The client just asks the factory for a `Knight`, and the factory gives the appropriate version — `Knight` or `KnightV2`.

---

``` Python title="character_type.py"
from enum import Enum, auto

class CharacterType(Enum):
    KNIGHT = auto()
    KNIGHT_V2 = auto()
```


``` Python title="character_factory_abstract.py"
from abc import ABC, abstractmethod


class CharacterFactoryAbstract(ABC):
    @abstractmethod
    def create_character(self):
        pass
```

``` Python title="character_abstract.py"
from abc import ABC, abstractmethod


class CharacterAbstract(ABC):
    @abstractmethod
    def attack(self):
        pass
```

``` Python title="knight.py"

class Knight(CharacterAbstract):

    def attack(self):
        print("attack with sword")


class KnightV2(CharacterAbstract):
    def attack(self):
        print("attack with sword++")
```

``` Python title="knight_factory.py"

class KnightFactory(CharacterFactoryAbstract):
    def create_character(self, version):
        if version == CharacterType.KNIGHT:
            return Knight()
        elif version == CharacterType.KNIGHT_V2:
            return KnightV2()
        else:
            raise ValueError("Unknown version")

```

``` Python title="main.py"


factory = KnightFactory()
knight = factory.create_character(CharacterType.KNIGHT)
knight.attack()

knight_v2 = factory.create_character(CharacterType.KNIGHT_V2)
knight_v2.attack()
```