---
sidebar_position: 5
---

# Builder

The **Builder Pattern** is a **creational design pattern** that helps construct **complex objects step-by-step**. It separates the construction of an object from its representation, allowing the same construction process to create different representations.

---

## Why Use It?

- Useful when a class has **too many optional parameters**.
- Enables **step-by-step object creation**.
- Allows for **data validation before building** the object.
- Makes the construction process **more readable and maintainable**.

---

## 💻 Example: Building a Computer

Let’s say we’re building different types of computers — like **Gaming** and **Office** PCs.  
Instead of passing all configuration at once, we use builder classes to **set properties one by one**, validate them, and build the final object.

---

```python title="computer_builder_abstract.py"
from abc import ABC, abstractmethod

class ComputerBuilderAbstract(ABC):
    @abstractmethod
    def set_gpu(self, gpu): pass

    @abstractmethod
    def set_cpu(self, cpu): pass

    @abstractmethod
    def set_disk(self, disk): pass

    @abstractmethod
    def set_ram(self, ram): pass

    @abstractmethod
    def validate(self): pass

    @abstractmethod
    def build(self): pass
```

```Python title="computer.py"
class Computer:
    def __init__(self, cpu, ram, disk, gpu):
        self.cpu = cpu
        self.ram = ram
        self.disk = disk
        self.gpu = gpu

    def __str__(self):
        return f"Computer(cpu={self.cpu}, ram={self.ram}, disk={self.disk}, gpu={self.gpu})"
```


```Python title="gaming_computer_builder.py"
class GamingComputerBuilder(ComputerBuilderAbstract):
    def __init__(self):
        self.cpu = None
        self.ram = None
        self.disk = None
        self.gpu = None

    def set_gpu(self, gpu='NVIDIA'):
        if gpu is None:
            raise Exception("No GPU specified")
        self.gpu = gpu
        return self

    def set_cpu(self, cpu='1 core'):
        self.cpu = cpu
        return self

    def set_disk(self, disk='256 SSD'):
        if disk == "HDD":
            raise Exception("No ssd specified")
        self.disk = disk
        return self

    def set_ram(self, ram=10):
        self.ram = ram
        return self

    def validate(self):
        if self.ram < 8:
            raise Exception("less ram")

    def build(self):
        self.validate()
        return Computer(self.cpu, self.ram, self.disk, self.gpu)
```

```Python title="office_computer_builder.py"

class OfficeComputerBuilder(ComputerBuilderAbstract):
    def __init__(self):
        self.cpu = None
        self.ram = None
        self.disk = None
        self.gpu = None

    def set_gpu(self, gpu=None):
        self.gpu = gpu
        return self

    def set_cpu(self, cpu=1):
        self.cpu = cpu
        return self

    def set_disk(self, disk='256 HDD'):
        self.disk = disk
        return self

    def set_ram(self, ram=6):
        self.ram = ram
        return self

    def validate(self):
        if self.ram > 16:
            raise Exception("Too much RAM for an office PC")

    def build(self):
        self.validate()
        return Computer(self.cpu, self.ram, self.disk, self.gpu)
```

```Python title="main.py"

if __name__ == '__main__':
    gaming_computer: Computer = GamingComputerBuilder()\
        .set_cpu("Intel i9")\
        .set_ram(32)\
        .set_disk("1TB SSD")\
        .set_gpu("RTX 3090")\
        .build()

    office_computer: Computer = OfficeComputerBuilder()\
        .set_cpu("Intel i5")\
        .set_ram(16)\
        .set_disk("512GB SSD")\
        .set_gpu("Integrated Graphics")\
        .build()

    print("Gaming Computer -", gaming_computer)
    print("Office Computer -", office_computer)

```