# Portfolio React

React + TypeScript + Vite portfolio website.

## 🚀 Деплой на GitHub Pages

### Шаг 1: Подготовка изменений
```bash
# Добавьте все изменения
git add .

# Закоммитьте изменения
git commit -m "Your commit message"

# Запушьте на GitHub
git push origin main
```

### Шаг 2: Сборка проекта
```bash
npm run build
```

### Шаг 3: Деплой
```bash
npx gh-pages -d dist -b gh-pages
```

**Или используйте одну команду для сборки и деплоя:**
```bash
npm run deploy
```

### ⚠️ Важно
- **НЕ используйте** скрипт `deploy.ps1` - он может удалить ваши файлы
- **Всегда оставайтесь** на ветке `main` при деплое
- Команда `npx gh-pages` автоматически создаёт/обновляет ветку `gh-pages`
- Вы остаётесь на ветке `main`, переключение веток не требуется

## 🛠 Development

### Install dependencies
```bash
npm install
```

### Run development server
```bash
npm run dev
```

### Build for production
```bash
npm run build
```

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
