# eslint-config-hrundel

## Как установить

```bash
npm install --save-dev eslint@3.7.0 eslint-config-hrundel
```

## Как использовать

Для кода, исполняемого в Node.js в `package.json` добавляем:

```json
{
	"eslintConfig": {
		"extends": "hrundel/node"
	}
}
```

Для кода, исполняемого в браузере:

```json
{
	"eslintConfig": {
		"extends": "hrundel/browser"
	}
}
```

Для кода на ES6:

```json
{
	"eslintConfig": {
		"extends": "hrundel/es6"
	}
}
```
