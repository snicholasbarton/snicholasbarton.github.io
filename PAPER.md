# The Architecture and Implementation of a Recursive Progressive Disclosure System in React

## Abstract

This paper presents a comprehensive analysis of the design and implementation of a "Fold" component system for a React-based Markdown (MDX) blog. The system enables authors to structure content with multiple levels of depth, utilizing the principle of progressive disclosure to manage information density. The implementation leverages advanced React patterns, including Context API for state propagation, recursive component composition, and lifecycle management via Hooks. This paper explores the theoretical background of the technologies used, details the architectural decisions made—specifically regarding state synchronization between a global controller and local components—and provides a line-by-line analysis of the resulting code. The final solution offers a robust, user-friendly interface for navigating complex, nested information hierarchies.

## 1. Introduction

In modern technical writing and documentation, the volume of information can often overwhelm the reader. "Progressive Disclosure" is an interaction design pattern that prioritizes attention by showing only the necessary information by default, while making secondary information available upon request. This reduces cognitive load and allows users to choose their own level of engagement with the content.

The challenge addressed in this project is the creation of a generalized, recursive "Fold" system for a blog built with MDX (Markdown + JSX). Unlike simple "accordion" components which typically operate as a flat list of expandable items, this system requires:
1.  **Infinite Nesting:** Folds must be able to contain other Folds, creating a tree structure of content.
2.  **Context-Aware Depth:** Visual indicators must reflect the nesting level (depth) of the content.
3.  **Global Orchestration:** A centralized controller must be able to manipulate the state of all folds simultaneously (e.g., "Expand all to Level 2").
4.  **State Consistency:** Collapsing a parent must seamlessly reset or hide the state of children to prevent confusing user experiences upon re-expansion.

This paper documents the solution to these requirements, providing a deep dive into the React ecosystem tools that made it possible.

## 2. Background: The React Paradigm

To understand the Fold architecture, one must first establish a solid understanding of the underlying framework: React. React is a declarative, efficient, and flexible JavaScript library for building user interfaces.

### 2.1 Components and Composition
At its core, React encourages breaking UI into independent, reusable pieces called components. Composition is the primary mechanism for code reuse, where components accept arbitrary children (via `props.children`). This is crucial for our Fold system, as the content of a fold is unknown and potentially complex (containing text, images, or other Folds).

### 2.2 React Hooks
Introduced in React 16.8, Hooks allow function components to "hook into" React state and lifecycle features. They replaced the older class-based component model, offering a more direct API for reusing stateful logic. The Fold implementation relies heavily on several key hooks:

#### 2.2.1 `useState`
`useState` is the most fundamental hook, allowing a component to remember information.
```javascript
const [isOpen, setIsOpen] = useState(false);
```
In the Fold component, this tracks whether an individual section is currently expanded or collapsed. Importantly, this state is local to the specific instance of the Fold.

#### 2.2.2 `useEffect`
`useEffect` enables performing side effects in function components. It serves the purpose of lifecycle methods like `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount`.
```javascript
useEffect(() => {
  if (globalLevel >= currentLevel) setIsOpen(true);
}, [globalLevel]);
```
Our system uses `useEffect` to synchronize the local state (`isOpen`) with the global command signal (`globalLevel`). It listens for changes in the global context and overrides the local preference when necessary.

#### 2.2.3 `useContext`
In a typical React application, data is passed top-down (parent to child) via props. However, this becomes cumbersome for global preferences (like our "Expand All" setting) that need to be accessible by many components at different nesting levels. `Context` provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.
```javascript
const { globalExpandLevel } = useContext(FoldGlobalContext);
```
This is the backbone of our Fold Controller architecture.

#### 2.2.4 `useCallback` and `useMemo`
These hooks are optimization tools. `useCallback` returns a memoized version of a callback function that only changes if one of the dependencies has changed. `useMemo` does the same for a computed value.
In our implementation, `registerDepth` is a callback passed down via context. Using `useCallback` ensures that the function reference remains stable, preventing unnecessary re-renders of consumer components.

## 3. Architecture of the Fold System

The system is composed of three primary entities: the **Context Layer**, the **Controller**, and the **Fold Component**.

### 3.1 The Context Layer (`FoldContext.tsx`)
The architecture uses two distinct contexts to separate concerns:
1.  **`FoldGlobalContext`**: Manages the "macroscopic" state of the page. It holds:
    *   `globalExpandLevel`: The target depth requested by the user (e.g., "Show me everything up to Level 2").
    *   `maxDepthDetected`: A dynamic counter that tracks the deepest nesting level currently present on the page.
    *   `registerDepth`: A function that individual Folds call to report their existence and depth.
2.  **`FoldDepthContext`**: Manages the "microscopic" context of nesting. It holds a single integer: `depth`. This context is nested recursively. A Fold at depth 0 wraps its children in a `FoldDepthProvider` with value 1. A Fold at depth 1 wraps its children with value 2, and so on. This allows any Fold component to know exactly how deep it is in the tree without manual prop drilling.

### 3.2 The Controller (`FoldController.tsx`)
The Controller is the user interface for the global context. It is a sticky header that remains visible as the user reads.
*   **Dynamic UI:** It subscribes to `maxDepthDetected`. If the page only has 2 levels of folds, the controller only renders buttons "L1" and "L2". If the user expands a section and reveals a 3rd level, the "L3" button dynamically appears.
*   **Sticky Behavior:** It uses the `IntersectionObserver` API (via a React `useEffect` hook) to detect when it hits the top of the viewport, applying a "stuck" class that adds a backdrop blur and shadow, ensuring legibility over scrolling content.

### 3.3 The Fold Component (`Fold.tsx`)
The Fold is the worker unit. Its logic is a hybrid of local autonomy and global obedience.
*   **Initialization:** Upon mounting, it reads its depth from `FoldDepthContext`. It registers this depth with the global context (potentially updating the `maxDepthDetected`).
*   **State Logic:** It maintains a local `isOpen` state. However, a `useEffect` hook monitors the `globalExpandLevel`. If the global level meets or exceeds the Fold's depth, it forces the Fold open.
*   **Progressive Mounting (The "Unmount on Collapse" Pattern):**
    A critical architectural decision was how to handle the children of a collapsed fold.
    Option A: Hide them with CSS (`display: none`).
    Option B: Don't render them at all (unmount).

    We chose **Option B**.
    ```javascript
    {!isOpen ? <CollapsedView /> : <ExpandedView>{children}</ExpandedView>}
    ```
    This choice has profound implications:
    1.  **State Reset:** When a user collapses a parent, the children unmount. Any local state within those children (e.g., a sub-fold that was manually toggled open) is destroyed. When the parent is re-expanded, the children re-mount with their default initial state. This satisfies the requirement: "Collapsing parents should collapse all children."
    2.  **Performance:** The DOM remains lightweight. The browser doesn't have to manage thousands of hidden nodes for a massive document.
    3.  **Dynamic Discovery:** Since children don't mount until the parent opens, the `registerDepth` calls for deep levels don't happen until they are revealed. This creates a "discovery" effect in the Controller: buttons for deeper levels appear progressively as the user explores.

### 3.4 Comparison with Standard UI Patterns

It is instructive to contrast the **Fold** system with the traditional **Accordion** pattern to highlight the architectural differences required by our "infinite nesting" goal.

| Feature | Standard Accordion | Recursive Fold System |
| :--- | :--- | :--- |
| **Topology** | **Flat List:** Items are typically siblings (e.g., a list of FAQs). | **Tree:** Items can contain other items of the same type (e.g., a comment thread or deep outline). |
| **State Scope** | **Sibling-Aware:** Often implements "mutex" logic (opening Item A closes Item B). | **Parent-Child & Global:** Independent at the sibling level, but strictly hierarchical (parent controls child) and globally influenced. |
| **Lifecycle** | **Persistent:** Content is usually just hidden (`display: none`) to preserve form data or scroll position. | **Transient:** Content is often **unmounted** on collapse to ensure deeply nested states are reset, preventing a confusing "cluttered" state upon re-expansion. |
| **Visuals** | **Panel/Header:** Distinct blocks with headers. | **Inline/Rail:** Integrated into flow content with subtle vertical rails indicating depth, preserving the reading flow of the document. |

The Fold system's complexity arises specifically from the **Tree Topology** and **Transient Lifecycle**. In a flat accordion, state is O(N) where N is the number of items. In a recursive fold system, the state tree mirrors the DOM tree, and the "Unmount on Collapse" strategy is a vital optimization to prune this state tree dynamically.

## 4. Implementation Analysis

Let us examine the specific code implementation to see how these theories manifest.

### 4.1 The Context Provider
The `FoldProvider` component serves as the root of the system.
```typescript
export const FoldProvider = ({ children }: { children: React.ReactNode }) => {
  const [globalExpandLevel, setGlobalExpandLevel] = useState<number>(0);
  const [maxDepthDetected, setMaxDepthDetected] = useState<number>(0);

  const registerDepth = useCallback((depth: number) => {
    setMaxDepthDetected(prev => Math.max(prev, depth));
  }, []);

  // ... construction of value object ...

  return (
    <FoldGlobalContext.Provider value={value}>
      <FoldDepthContext.Provider value={0}>
        {children}
      </FoldDepthContext.Provider>
    </FoldGlobalContext.Provider>
  );
};
```
Note the use of `useCallback` for `registerDepth`. Since this function is passed down to potentially hundreds of components, referential stability is vital to avoid unnecessary re-renders.

### 4.2 The Fold Logic
The `Fold` component is where the recursive magic happens.
```typescript
export const Fold = ({ children }: FoldProps) => {
  const depth = useFoldDepth();
  const { globalExpandLevel, registerDepth } = useFoldGlobal();
  const currentLevel = depth + 1;

  // Effect 1: Registration
  useEffect(() => {
    registerDepth(currentLevel);
  }, [currentLevel, registerDepth]);

  // Effect 2: Synchronization
  useEffect(() => {
    if (globalExpandLevel >= currentLevel) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [globalExpandLevel, currentLevel]);

  // ...
```
The separation of effects is clean. One handles the "upstream" communication (telling the global context "I exist"), and the other handles "downstream" communication (listening to "You should be open").

### 4.3 Recursive Rendering
The rendering logic demonstrates the recursive structure:
```typescript
<div className={styles.content}>
   <FoldDepthProvider depth={depth + 1}>
      {children}
   </FoldDepthProvider>
</div>
```
By wrapping `children` in a `FoldDepthProvider` with `depth + 1`, we ensure that any `Fold` components located inside `children` will read their depth as `current + 1`, enabling the infinite nesting capability without any explicit configuration by the author.

## 5. Styling and Visual Design

The visual implementation uses CSS Modules combined with Tailwind CSS. This hybrid approach offers the best of both worlds: the scoping safety of modules and the utility-first speed of Tailwind.

### 5.1 The Collapsed State
The requirements called for "conspicuous but not jarring."
```css
.collapsedContainer {
  @apply relative flex items-center justify-center py-2 cursor-pointer;
}
.collapsedLine {
  @apply absolute left-0 right-0 h-[1px] bg-gray-200;
}
```
A thin 1px line provides the structure. A centered "+" button breaks the line, creating a clear affordance (a "call to action") without dominating the visual hierarchy.

### 5.2 The Expanded State
The expanded state must indicate depth.
```css
.leftRail {
  @apply flex-shrink-0 w-1 rounded-full cursor-pointer mr-4 bg-gray-200;
}
```
A 4-pixel wide "rail" on the left side of the content creates the visual indentation. Because `Fold` components nest, a Level 3 fold will be inside the content area of a Level 2 fold, which is inside a Level 1 fold. This results in three parallel rails appearing on the left side of the Level 3 content—a distinct and intuitive visual cue for depth, similar to threaded comments on platforms like Reddit.

### 5.3 Sticky Interactions
The Controller uses `position: sticky`. However, standard CSS cannot detect *when* an element is stuck to apply different styles (like a shadow). We implemented a "Sentinel" pattern:
1.  A invisible 1px `div` is placed immediately above the sticky element in the DOM.
2.  An `IntersectionObserver` watches this sentinel.
3.  When the sentinel scrolls out of the viewport (at the top), we know the sticky element has "landed."
4.  React state `isStuck` is toggled, applying the `.stuck` class which adds `backdrop-blur` and `shadow-sm`.

## 6. Challenges and Solutions

### 6.1 The "Expand All" Paradox
A naive implementation of "Expand All" might iterate through a list of all known components and set their state. However, in our "Unmount on Collapse" architecture, deep components *do not exist* until their parents are expanded.
Our solution was the propagation of the `globalExpandLevel` integer.
1.  User clicks "Expand All" (sets level to 100).
2.  Root folds (Level 1) see `100 >= 1`, so they open.
3.  Their children mount.
4.  Children (Level 2) see `100 >= 2`, so they open immediately.
5.  Their children mount.
6.  And so on.
This "waterfall" expansion works perfectly with the React lifecycle, ensuring that even deeply nested, currently-unmounted content is correctly revealed without complex pre-parsing of the document tree.

### 6.2 Hydration and MDX
MDX compiles Markdown into React components at build time. This means our `Fold` component is just a standard React component in the eyes of the compiler. This seamless integration allows us to mix standard Markdown (headers, paragraphs) inside the `children` prop of our Folds, maintaining the easy authoring experience while adding complex interactivity.

## 7. Future Work

While the current system is robust, several enhancements could be considered for future iterations:
1.  **Animation:** Currently, the unmounting/mounting is instantaneous. Adding `framer-motion` with `AnimatePresence` could allow for smooth height transitions (sliding open/closed). This was omitted in v1 to prioritize simplicity and robust state management.
2.  **Deep Linking:** The ability to share a URL that automatically opens specific folds to reveal a target section. This would require synchronizing the fold state with the URL hash or query parameters.
3.  **Keyboard Navigation:** While buttons are accessible, full keyboard support for traversing the fold hierarchy (e.g., Left/Right arrows to collapse/expand) would enhance accessibility for power users.

## 8. Conclusion

The Fold component system demonstrates the power of React's compositional model. By combining Context for global state distribution, Hooks for lifecycle management, and recursive component structures, we achieved a complex UI pattern—infinite, controllable nesting—with a surprisingly concise codebase.

The architecture respects the principle of least privilege: components only know what they need to know (their own depth). The complexity of orchestration is offloaded to the React framework itself, leveraging the natural propagation of context and the component lifecycle. The result is a tool that empowers the author to write "deep" content without overwhelming the reader, effectively solving the problem of information density in technical writing.

The solution stands as a testament to the utility of "thinking in React": modeling the problem not as a series of imperative DOM manipulations, but as a declarative state tree where the UI is a pure function of that state.

---

## Appendix A: Key Code Patterns

### The Recursive Depth Provider Pattern
```typescript
// Component receives generic children
// But wraps them to increment context for whoever is inside
<FoldDepthProvider depth={currentDepth + 1}>
  {children}
</FoldDepthProvider>
```

### The Unmount-Reset Pattern
```typescript
// By conditionally rendering the ExpandedView, we ensure
// that when isOpen becomes false, the entire subtree is destroyed.
// This guarantees a clean slate on next open.
{!isOpen ? <CollapsedView /> : <ExpandedView />}
```

### The Sentinel Sticky Pattern
```typescript
// Detecting when sticky takes effect
const observer = new IntersectionObserver(
  ([entry]) => setIsStuck(!entry.isIntersecting),
  { threshold: 1, rootMargin: '-1px 0px 0px 0px' }
);
```
