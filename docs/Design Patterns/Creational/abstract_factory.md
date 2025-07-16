---
sidebar_position: 4
---

# Abstract Factory

The **Abstract Factory Pattern** is a **creational design pattern** that provides an interface for creating families of related or dependent objects **without specifying their concrete classes**.

---

## Why Use It?

- Helps maintain **consistency among products**.
- Hides the details of object creation from the client.
- Facilitates **adding new product families** without modifying existing code.
- Supports the **Open/Closed Principle**.

---

## 🧩 Example: Gaming & Office Computer Factories

Let’s say we’re assembling **Gaming** and **Office** computers.  
Each computer needs a **CPU**, **GPU**, **RAM**, and **Disk**.

---

```python title="cpu.py"
from abc import ABC, abstractmethod

class CPU(ABC):
    @abstractmethod
    def get_specs(self):
        pass
```

```python title="gpu.py"
from abc import ABC, abstractmethod

class GPU(ABC):
    @abstractmethod
    def get_specs(self):
        pass
```

```python title="ram.py"
from abc import ABC, abstractmethod

class RAM(ABC):
    @abstractmethod
    def get_specs(self):
        pass
```

```python title="disk.py"
from abc import ABC, abstractmethod

class Disk(ABC):
    @abstractmethod
    def get_specs(self):
        pass
```

```python title="gaming_components.py"

class GamingCPU(CPU):
    def get_specs(self):
        return "Intel i9"

class GamingGPU(GPU):
    def get_specs(self):
        return "RTX 3090"

class GamingRAM(RAM):
    def get_specs(self):
        return "32GB"

class GamingDisk(Disk):
    def get_specs(self):
        return "1TB SSD"
```

```python title="office_components.py"

class OfficeCPU(CPU):
    def get_specs(self):
        return "Intel i5"

class OfficeGPU(GPU):
    def get_specs(self):
        return "Integrated Graphics"

class OfficeRAM(RAM):
    def get_specs(self):
        return "16GB"

class OfficeDisk(Disk):
    def get_specs(self):
        return "512GB SSD"
```

```python title="computer_factory.py"
from abc import ABC, abstractmethod

class ComputerComponentFactory(ABC):
    @abstractmethod
    def create_cpu(self) -> CPU: pass

    @abstractmethod
    def create_gpu(self) -> GPU: pass

    @abstractmethod
    def create_ram(self) -> RAM: pass

    @abstractmethod
    def create_disk(self) -> Disk: pass
```

```python title="factories/gaming_factory.py"

class GamingComputerFactory(ComputerComponentFactory):
    def create_cpu(self):
        return GamingCPU()

    def create_gpu(self):
        return GamingGPU()

    def create_ram(self):
        return GamingRAM()

    def create_disk(self):
        return GamingDisk()
```

```python title="factories/office_factory.py"

class OfficeComputerFactory(ComputerComponentFactory):
    def create_cpu(self):
        return OfficeCPU()

    def create_gpu(self):
        return OfficeGPU()

    def create_ram(self):
        return OfficeRAM()

    def create_disk(self):
        return OfficeDisk()
```

```python title="computer.py"
class Computer:
    def __init__(self, cpu, gpu, ram, disk):
        self.cpu = cpu
        self.gpu = gpu
        self.ram = ram
        self.disk = disk

    def show_config(self):
        return f"""
        CPU:  {self.cpu.get_specs()}
        GPU:  {self.gpu.get_specs()}
        RAM:  {self.ram.get_specs()}
        Disk: {self.disk.get_specs()}
        """
```

```python title="main.py"

def build_computer(factory):
    cpu = factory.create_cpu()
    gpu = factory.create_gpu()
    ram = factory.create_ram()
    disk = factory.create_disk()
    return Computer(cpu, gpu, ram, disk)

if __name__ == "__main__":
    gaming_factory = GamingComputerFactory()
    office_factory = OfficeComputerFactory()

    gaming_pc = build_computer(gaming_factory)
    office_pc = build_computer(office_factory)

    print("🎮 Gaming PC Configuration")
    print(gaming_pc.show_config())

    print("\n💼 Office PC Configuration")
    print(office_pc.show_config())
```
