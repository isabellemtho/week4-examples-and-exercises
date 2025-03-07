# week4-examples-and-exercises

Please note that it is generally not good practice to name files starting with a number like `1-basics.js`, this is just for convenient ordering in your file system of the examples. 

## How to navigate between directories (folders) and run JavaScript files

Before attempting to run JavaScript files, please make sure you have followed the instructions on the [Setting up Node.js](https://www.notion.so/h4i/Setting-up-Node-js-1aa197abf07b80efac54cc4543745142?pvs=25) guide on Notion.

Furthermore, please note that the JavaScript examples are stored in the `examples` and `exercises` directories, so trying to run a JavaScript file straight up by typing into the terminal `node <filename>.js` will not work.

### Entering a directory (e.g. `examples`)

If you are not in the `examples` directory, you will need to navigate to it using the Terminal and the `cd` (`c`hange `d`irectory) command.

```bash
# Note: ONLY TYPE THE STUFF TO THE RIGHT OF THE >
..\week4-examples-and-exercises> cd examples
..\week4-examples-and-exercises\examples> 
```

### Switching between `examples` and `exercises` 

Suppose you are in the `examples` directory and want to navigate into the `exercises` directory. You can use `cd ..` to first go to the parent directory of `examples` and then `cd` into `exercises` as you would normally.

```bash
# Note: ONLY TYPE THE STUFF TO THE RIGHT OF THE >
..\week4-examples-and-exercises\examples> cd ..
..\week4-examples-and-exercises> cd exercises
..\week4-examples-and-exercises\exercises>
```

### Running a JavaScript File

Let's say that you are in the `examples` directory and want to run `1-basics.js`. You can run `1-basics.js` as follows:
```bash
# Note: ONLY TYPE THE STUFF TO THE RIGHT OF THE >
..\week4-examples-and-exercises\examples> node 1-basics.js
```

If this doesn't work, you may be in the wrong directory or have not yet set up Node.js. You can also use `TAB` to autocomplete when typing in the file name.