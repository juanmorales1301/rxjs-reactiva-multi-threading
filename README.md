
# Multi-Threading y Programación Reactiva en Node.js

Este proyecto incluye ejemplos de **Multi-threading** y **Programación Reactiva** en **Node.js** utilizando **worker_threads** y **RxJS**.

---

## ¿Qué es Multi-threading?

El **multi-threading** es una técnica de programación que permite ejecutar múltiples hilos (**threads**) de manera concurrente dentro de un proceso. Cada hilo puede realizar tareas independientes, lo que ayuda a aprovechar al máximo el CPU y a mejorar el rendimiento en operaciones pesadas.

### Características:
- Permite la ejecución simultánea de tareas.
- Reduce tiempos de espera en operaciones costosas.
- Ideal para cálculos pesados y tareas en paralelo.

En **Node.js**, los hilos se implementan mediante el módulo **`worker_threads`**, que permite ejecutar scripts en hilos secundarios sin bloquear el hilo principal.

---

## ¿Qué es la Programación Reactiva?

La **Programación Reactiva** es un paradigma de programación que se centra en **flujos de datos asíncronos y en tiempo real**. Utiliza **observables** para emitir datos y **suscriptores** que reaccionan a esos datos. La librería más popular para implementar este enfoque es **RxJS** (Reactive Extensions for JavaScript).

### Características:
- Manejo eficiente de eventos asíncronos.
- Uso de **observables**, **suscripciones** y **operadores** para transformar datos.
- Ideal para operaciones de entrada/salida, eventos y flujos continuos.

---

## Librerías y módulos utilizados

### 1. **worker_threads** (nativo en Node.js)
El módulo **`worker_threads`** permite crear hilos secundarios en Node.js, donde cada hilo ejecuta tareas de forma independiente.

- **Ventajas**:
  - No bloquea el hilo principal.
  - Permite la comunicación entre hilos con mensajes.
  - Ideal para cálculos pesados y tareas en paralelo.

- **Uso básico**:
  - Crear un Worker: `new Worker('archivo.js', { workerData: data });`
  - Comunicar entre hilos con `parentPort.postMessage` y `on('message')`.

### 2. **RxJS**
**RxJS** (Reactive Extensions for JavaScript) es una librería para manejar programación reactiva, flujos de datos asíncronos y eventos.

- **Conceptos Clave**:
  - **Observables**: Representan un flujo de datos.
  - **Operadores**: Transforman y filtran los datos (e.g., `map`, `filter`, `take`).
  - **Suscripciones**: Los observadores reaccionan a los datos emitidos.

- **Uso básico**:
  ```javascript
  const { fromEvent } = require('rxjs');
  const { map, filter } = require('rxjs/operators');

  const observable = fromEvent(process.stdin, 'data');
  observable
    .pipe(map(data => data.toString().trim()), filter(data => data.length > 0))
    .subscribe(console.log);
  ```

---

## Ejemplos del proyecto

El proyecto contiene varios ejemplos para entender **multi-threading** y **programación reactiva**:

1. **Cálculo en hilos paralelos**: Utiliza **`worker_threads`** para sumar números en paralelo.
2. **Tareas independientes**: Ejecuta varias tareas con tiempos variables y maneja fallos usando **`Promise.allSettled`**.
3. **Comunicación bidireccional**: Hilo principal y Worker intercambian mensajes.
4. **Errores controlados**: Ejemplo de manejo de errores en Workers.
5. **Programación Reactiva**: Utiliza **RxJS** para trabajar con eventos y transformaciones de datos.

---

## Cómo ejecutar

1. **Instalar dependencias**:
   ```bash
   npm install rxjs
   ```

2. **Ejecutar ejemplos**:
   - Para tareas con hilos:
     ```bash
     node main_sum.js
     ```
   - Para tareas paralelas:
     ```bash
     node main_task.js
     ```
   - Para comunicación bidireccional:
     ```bash
     node main_bidirectional.js
     ```
   - Para manejo de errores:
     ```bash
     node main_error.js
     ```

---

## Conclusión

- **Multi-threading** permite realizar tareas intensivas en paralelo utilizando **`worker_threads`**.
- **Programación Reactiva** con **RxJS** facilita el manejo de flujos asíncronos y eventos de manera eficiente.

Estas herramientas juntas proporcionan un enfoque poderoso y eficiente para aplicaciones Node.js con alto rendimiento y escalabilidad.

---

## Autor
Creado por Juan Carlos Morales.
