# React Fiber Architecture (Deep Dive)

## 🚀 Introduction

React Fiber is a **reimplementation of React's core reconciliation algorithm**.

### 🎯 Goals of Fiber

- Incremental rendering (break work into chunks)
- Pause, resume, or abort work
- Assign priority to updates
- Improve animations & UI responsiveness
- Enable concurrency features

---

## 🧠 Core Idea

React wants to make UI updates:

```
Fast + Interruptible + Prioritized
```

---

## 🔁 What is Reconciliation?

### 📌 Definition

Reconciliation is the process of:

> Comparing old Virtual DOM with new Virtual DOM to update only necessary parts.

---

### 🔹 Flow

```
State change
   ↓
New Virtual DOM
   ↓
Diff with old Virtual DOM
   ↓
Generate minimal updates
   ↓
Apply to Real DOM
```

---

### 🔹 Important Rules

1. Different types → replace entire tree

```jsx
<div /> → <span />
```

2. Same type → update only props

```jsx
<div class="a" /> → <div class="b" />
```

3. Lists → keys required

```jsx
{
  items.map((item) => <li key={item.id}>{item}</li>);
}
```

---

## ⚙️ Reconciliation vs Rendering

| Phase          | Work                              |
| -------------- | --------------------------------- |
| Reconciliation | Calculate changes                 |
| Rendering      | Apply changes (DOM, Native, etc.) |

👉 React DOM and React Native use same reconciliation but different renderers.

---

## ⏱ Scheduling (Very Important 🔥)

### 📌 Definition

Scheduling decides:

> **When and what work should be done**

---

### 🔹 Key Concepts

- Not all updates need immediate execution
- Some updates are more important

Example:

| Update Type          | Priority |
| -------------------- | -------- |
| Button click         | High     |
| Data fetch           | Medium   |
| Background rendering | Low      |

---

### 🔹 React Approach

React uses **pull-based model**:

👉 Framework decides **when to run work**, not developer

---

## 🧩 What is a Fiber?

### 📌 Definition

> A Fiber is a **unit of work** and a **virtual stack frame**

---

### 🔹 Why Fiber?

Old React:

```
Recursive rendering → Blocking → UI freeze
```

Fiber:

```
Break work → Execute in chunks → Smooth UI
```

---

## 🧠 Analogy

```
Function call stack ❌ (not interruptible)
Fiber tree ✅ (controllable execution)
```

---

## 🌳 Fiber Tree Structure

```
App
 ├── Navbar
 ├── Sidebar
 └── Content
```

Each node = **Fiber**

---

## 🔧 Structure of a Fiber

A fiber is a JS object:

```js
{
  type,
  key,
  child,
  sibling,
  return,
  pendingProps,
  memoizedProps,
  alternate
}
```

---

### 🔹 Important Fields

### 1️⃣ type & key

- type = component type
- key = used for diffing

---

### 2️⃣ child & sibling

```jsx
function Parent() {
  return [<A />, <B />];
}
```

```
Parent
 └── A (child)
      └── B (sibling)
```

---

### 3️⃣ return (parent)

```text
Child → return → Parent
```

---

### 4️⃣ pendingProps vs memoizedProps

| Type          | Meaning        |
| ------------- | -------------- |
| pendingProps  | new props      |
| memoizedProps | previous props |

👉 If same → skip work (optimization)

---

### 5️⃣ alternate

Each component has:

```text
Current Fiber (UI)
Work-in-progress Fiber
```

👉 Double buffering system

---

## 🔁 Fiber Execution Phases

### 1️⃣ Render Phase (Async)

- Build fiber tree
- Can pause/resume
- Calculates changes

```
Interruptible ✅
```

---

### 2️⃣ Commit Phase (Sync)

- Apply changes to DOM

```
Not interruptible ❌
```

---

## 🔥 Full Flow

```
setState()
   ↓
New Virtual DOM
   ↓
Reconciliation
   ↓
Fiber scheduling
   ↓
Render phase
   ↓
Commit phase
   ↓
DOM update
```

---

## ⚡ Example

```jsx
function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}
```

### What happens internally:

1. setState triggered
2. New Virtual DOM created
3. Compared with old
4. Only `<h1>` changes
5. DOM updated efficiently

---

## 🧠 Why Fiber Matters

Without Fiber:

❌ Blocking UI
❌ No prioritization

With Fiber:

✅ Smooth animations
✅ Better UX
✅ Concurrent features

---

## ⭐ Interview Summary

### Virtual DOM

Lightweight JS representation of DOM

### Reconciliation

Diffing algorithm to update minimal DOM

### Fiber

Advanced engine enabling:

- Incremental rendering
- Scheduling
- Prioritization

---

## 🔥 Key Takeaways

- React does NOT update full DOM
- Uses diffing for efficiency
- Fiber breaks work into chunks
- Scheduling improves performance

---

## 🚀 Advanced Concepts (Powered by Fiber)

- Concurrent Rendering
- Suspense
- Time Slicing
- Transitions

---

## 💡 One Line Killer Explanation

> React Fiber is a reimplementation of React’s reconciliation algorithm that allows rendering work to be split, prioritized, and executed incrementally for better performance and responsiveness.
