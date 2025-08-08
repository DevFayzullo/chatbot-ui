# Project Development Notes — ChatBot UI

## 1. Project Overview

ChatBot UI is a static chatbot interface built with **React** and **Tailwind CSS**.  
It allows the user to interact with predefined responses through clickable buttons or by typing a message into an input box.

The main purpose of the project was:

- To create a clean, responsive, and professional chat interface.
- To prepare a functional yet simple project suitable for a frontend developer portfolio.
- To deploy it as a live project using GitHub Pages.

---

## 2. Project Timeline

### **Step 1 — Initial Setup**

- Started with a fresh **Vite + React** project.
- Installed and configured **Tailwind CSS** for styling.
- Removed default `App.css` styles to fully rely on Tailwind.

### **Step 2 — Core Components**

Created the following main components:

- `ChatWindow.jsx` → Displays all messages from user and bot.
- `ButtonGroup.jsx` → Shows predefined response buttons.
- `InputBox.jsx` → Allows the user to type custom messages.

### **Step 3 — Styling**

- Implemented a **premium, modern look** with rounded cards, shadows, and spacing.
- Added responsive design to fit both desktop and mobile.
- Introduced **Dark Mode** (later removed toggle icon to keep UI minimal).

---

## 3. Challenges Faced & Solutions

### **Challenge 1 — Tailwind CSS configuration**

**Problem:** Tailwind CSS was not applying styles after installation.  
**Solution:** Reconfigured `tailwind.config.js` and ensured all `content` paths were correct. Cleaned `node_modules` and reinstalled dependencies.

---

### **Challenge 2 — Dark/Light Mode behavior**

**Problem:** Light Mode background remained dark due to incorrect class application.  
**Solution:** Applied `dark` class to the `<html>` root element using React state and `useEffect` to properly toggle themes.

---

### **Challenge 3 — Message alignment**

**Problem:** Messages were sticking to the left side instead of aligning left/right for bot/user.  
**Solution:** Used Tailwind utility classes `self-start` and `self-end` for alignment in `ChatWindow.jsx`.

---

### **Challenge 4 — Scroll to latest message**

**Problem:** New messages were not visible unless manually scrolled.  
**Solution:** Used `useRef` and `useEffect` to auto-scroll the chat container to the bottom when messages change.

---

### **Challenge 5 — Deployment issues with Vite on GitHub Pages**

**Problem:** GitHub Pages could not find the correct asset paths.  
**Solution:** Updated `vite.config.js` with the correct `base` URL (matching the repository name) and added `"homepage"` to `package.json`.

---

## 4. Current Features

- Predefined responses via clickable buttons.
- Text input for custom user messages.
- Static (non-AI) bot replies.
- Responsive and mobile-friendly design.
- GitHub Pages deployment for live demo.

---

## 5. Future Improvements

- Connect to OpenAI API for real AI-generated responses.
- Add local storage to save chat history.
- Add language switcher (English / Uzbek).
- Include avatars for bot and user messages.
- Implement “Clear Chat” button.

---

## 6. Deployment

The project was successfully deployed via **GitHub Pages** using the `gh-pages` npm package.  
**Live Demo:** [https://DevFayzullo.github.io/chatbot-ui](https://DevFayzullo.github.io/chatbot-ui)

---

**Author:** DevFayzullo
