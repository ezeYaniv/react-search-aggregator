# Search Engine Aggregator

## Introduction

[This React-based app](https://react-search-aggregator.vercel.app/) is a portfolio project designed to learn React hooks and functional components instead of relying on class-based React components. It correctly handles state and props, dynamically generates HTML elements, and updates state after each search engine Promise return.

---

## Under the Hood
### Technologies Applied & Skills Learned
* React & React Hooks
* Dynamically generating React components
* Working with functional components, including multi-level nesting
* Writing custom API calls

### Notable Features (what it does right)
- Manages state at the App level: individual components are stateless (more reusable)
- All input elements are controlled: one "source of truth"
- Lifecycle methods are handled with useEffect: watching the input field and checkboxes for changes, unmounting timer through useEffect's 'cleanup' return function
- Outside of React: using object & array methods to manipulate complex nested objects/arrays to minimize duplicate code

---

## Links
🔎 Test the app [here](https://react-search-aggregator.vercel.app/).

*Note: the YouTube API limits daily requests.*