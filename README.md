# 🚀 react-native-toasti

A simple, customizable, and lightweight Toast library for React Native.
Show beautiful toast messages like **success**, **error**, and **info** with minimal setup.

---

## ✨ Features

- ✅ Easy to use API
- 🎨 Customizable UI
- ⚡ Lightweight & fast
- 📍 Multiple positions (top / bottom)
- ⏱ Auto dismiss support
- 🔥 Built with React Hooks

---

## 📦 Installation

### Using npm

```bash
npm install @npm_akash/react-native-toasti
```

---

## ⚙️ Setup

Wrap your root component with `ToastProvider`:

```js
import React from "react";
import { ToastProvider } from "@npm_akash/react-native-toasti";
import Home from "./Home";

export default function App() {
  return (
    <ToastProvider>
      <Home />
    </ToastProvider>
  );
}
```

---

## 🪝 Usage

Use the `useToast` hook in any component:

```js
import React from "react";
import { View, Button } from "react-native";
import { useToast } from "@npm_akash/react-native-toasti";

const Home = () => {
  const { show } = useToast();

  return (
    <View>
      <Button
        title="Success Toast"
        onPress={() => show("Saved successfully!", "success")}
      />

      <Button
        title="Error Toast"
        onPress={() => show("Something went wrong!", "error")}
      />

      <Button title="Info Toast" onPress={() => show("This is info", "info")} />
    </View>
  );
};

export default Home;
```

---

## 🧩 API

### `useToast()`

Returns:

```js
const { show } = useToast();
```

---

### `show(message, type)`

| Param   | Type   | Default | Description            |
| ------- | ------ | ------- | ---------------------- |
| message | string | —       | Toast message          |
| type    | string | info    | success / error / info |

---

## 🎨 Customization

You can modify styles inside `Toast.js`:

```js
success: { backgroundColor: 'green' },
error: { backgroundColor: 'red' },
info: { backgroundColor: 'blue' },
```

---

## 🚀 Roadmap

- [ ] Animations (fade / slide)
- [ ] Queue system
- [ ] TypeScript support
- [ ] Custom components
- [ ] Global toast (without hook)

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repo
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

---

## 📄 License

MIT License

---

## 💡 Author

Made with ❤️ by @npm_akash

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub!
