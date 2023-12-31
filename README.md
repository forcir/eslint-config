<p align="center"></p>
<div align="center">
    <picture>
        <source media="(prefers-color-scheme: dark)" srcset="https://cdn.forcir.com/oss/forcir-eslint-config/assets/images/logos/dark.png" height="64">
        <source media="(prefers-color-scheme: light)" srcset="https://cdn.forcir.com/oss/forcir-eslint-config/assets/images/logos/light.png" height="64">
        <img alt="Forcir ESLint Config Logo" src="https://cdn.forcir.com/oss/forcir-eslint-config/assets/images/logos/light.png" height="64">
    </picture>
</div>
<p align="center"><strong>Shared configuration for a consistent experience using JavaScript.</strong></p>
<p align="center"></p>

## Install

```bash
pnpm add -DE eslint @forcir/eslint-config
```

```bash
yarn add -DE eslint @forcir/eslint-config
```

```bash
npm install -DE eslint @forcir/eslint-config
```

## Basic Usage

### package.json

```jsonc
{
    // ...
    "eslintConfig": {
        "extends": "@forcir/eslint-config"
    },
    // ...
    "scripts" {
        // ...
        "lint": "eslint \"**/*.{cjs,cts,js,jsx,mjs,mts,ts,tsx}\"",
        "lint:fix": "eslint --fix \"**/*.{cjs,cts,js,jsx,mjs,mts,ts,tsx}\"",
        // ...
    }
}
```
