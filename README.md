# fix-imports-litelement

Fix imports from lit-element.js library, when you don't use polymer-cli or other "magics" server.

If you see 'Uncaught TypeError: Failed to resolve module specifier "lit-html". Relative references must start with either "/", "./", or "../".' you can use fix-imports-litelement to fix them.

# Install

```
npm install -g fix-imports-litelement

```

# Use

```
cd my-webcomponent-folder
fix-imports-litelement

```

If your libraries needed to fix "/", "./", or "../" it shows something like:

```
lit-element
-----------------
fixed lit-element.js

lit-html
-----------------
nothing to do

```

If your libraries were good it shows something like:

```
lit-element 
----------------
nothing to do

lit-html 
----------------
nothing to do

```