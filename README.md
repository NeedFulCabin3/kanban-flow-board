# Kanban Flow Board

A plain-vanilla web application that brings interactive task organization directly to your browser. Built from scratch to showcase real-time DOM manipulation, custom event listeners, and drag-and-drop states without pulling in heavy UI frameworks or third-party packages.

---

## Overview

Managing daily tasks should be effortless, fast, and instant. `kanban-flow-board` gives you a clear visual layout divided into standard execution stages: **To Do**, **In Progress**, and **Done**.

You can draft new tasks on the fly, pick them up, and drag them across execution stages seamlessly. Under the hood, everything runs on standard HTML elements, customized styling, and vanilla JavaScript event handling.

---

## How It Works

1. **Task Creation**: Submitting text through the input field triggers a script that instantiates a new task element, binds drag handlers, and appends it directly to the To Do container.
2. **Drag & Drop Engine**: Drag events track the active element, lower its opacity while in flight, and highlight targeted drop targets.
3. **DOM Updates**: Releasing a card over any target container re-parents that node dynamically in real time.

---

## Key Features

* **Instant Task Generation**: Type a task, hit Enter or click Add Task, and your card appears instantly in the queue.
* **Custom Drag and Drop Mechanics**: Built with standard HTML Drag and Drop APIs for fluid movement.
* **Visual Drop Targets**: Columns highlight automatically when hovering cards over valid dropping zones.
* **Clean State Isolation**: CSS Variables organize visual themes across status headers and interactive UI elements.

---

## Tech Stack Breakdown

* **HTML5**: Defines structural semantic elements, task containers, and draggable attributes.
* **CSS3**: Handles layout flow via Flexbox, status indicators, and hover/drag animations.
* **JavaScript**: Manages dynamic DOM creation, keyboard event binding, and drag state lifecycles.

---

## Prerequisites & Web-Based Quick Start

You don't need local build tools, Node.js, or complex CLI scripts to work on this project.

### Web-Based Option (GitHub Codespaces)
1. Fork or open this repository on GitHub.
2. Click **Code** -> **Codespaces** -> **Create codespace on main**.
3. Right-click `index.html` and select **Open with Live Server** (or use any static file server extension).

### Local Setup
1. Clone the repository:
   ```bash
   git clone [https://github.com/YOUR-USERNAME/kanban-flow-board.git](https://github.com/YOUR-USERNAME/kanban-flow-board.git)
   ```
   a. Navigate to the directory:

    ```Bash
    cd kanban-flow-board
    ```
   b. Double-click index.html to open it directly in any modern browser.

## project Structure

```text
kanban-flow-board/
├── .github/
│   └── workflows/
│       └── validate-frontend.yml  # CI pipeline verifying code structure and syntax
├── index.html                      # Layout markup and column structure [cite: 1, 18]
├── style.css                       # Global styles, variables, and drag effects [cite: 89]
├── script.js                       # Drag-and-drop handlers and DOM logic [cite: 41, 45]
├── LICENSE                         # MIT License file
└── README.md                       # Documentation
```

## Roadmap

[ ] Add persistent state using browser localStorage.

[ ] Support double-click editing for existing task text.

[ ] Add a delete/archive drop zone for completed tasks.

[ ] Add mobile touch support using custom TouchEvent bindings.

```text "Simplicity is prerequisite for reliability." — Edsger W. Dijkstra ```
