# NPM Set Up

---

## Step 1

- Initialise NPM

```bash
npm init -y
```

This command will create a file called package.json

---

## Step 2

- Install packages

```bash
npm install packageName
```

You can abbreviate install to i

Check package documentation for exact guide.

---

## Step 3

- Ignore your node modules and secret files.
- Create a .gitignore file
  -Include in it the names of folders you don't want pushed to GitHub

---

## Step 4

- Add a js file to start coding.
- Check the package documentation - they will often have a way to start interacting with it.

---

## Step 5

- If needed, turn your js file into a module
- Add `"type": "module"` in package.json

---

## Extra Step

- We can add a script to package.json to run our new app

"scripts": {
.....
"dev": "node app"
}
