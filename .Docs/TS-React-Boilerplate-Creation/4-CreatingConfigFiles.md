
# Creating and Configuring all necessary Config Files

Author: [Michael Albert](https://github.com/mta63089) 💻

---

Before we can start building our project, we need to set up all the necessary configuration files. In this page, we'll guide you through creating and configuring three important files: tsconfig.json, eslint, and prettier.  

## 👨‍💻 ***Create a tsconfig.json file***  

The tsconfig.json file tells TypeScript how to build your project. To create it, follow these steps:  

In the root directory of your project, create a new file named `tsconfig.json`  

Add the following contents to the file:  

```jsonc
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "es6"],
    "sourceMap": true,
    "jsx": "react",
    "module": "commonjs",
    "moduleResolution": "node",
    "esModuleInterop": true,
    "strict": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  }
}
```  

### 👉 ***Explanation of settings***  

---

This config file sets up TypeScript for your project with the following options  

- **target**: The output language level.  
  
- **lib**: The list of library files to be included in the compilation.  
- **module**: The module system used by the project.  
- **moduleResolution**: The algorithm to resolve module names.  
- **jsx**: Specifies how JSX should be handled.  
- **baseUrl**: The base directory to resolve non-relative module names.  
- **paths**: A mapping of module names to their corresponding locations.  
- **strict**: Enables all strict type checking options.  
- **noImplicitAny**: Disallows implicit any types.  
- **strictNullChecks**: Enables strict null checks.  
- **strictFunctionTypes**: Enables strict checking of function types.  
- **strictPropertyInitialization**: Enables strict checking of property initialization in classes.  
- **noImplicitThis**: Disallows the use of this keyword outside of classes.  
- **alwaysStrict**: Requires the "use strict" directive in every file.  
- **noUnusedLocals**: Disallows unused local variables.  
- **noUnusedParameters**: Disallows unused parameters.  
- **noImplicitReturns**: Disallows non-void functions without a return statement.  
- **noFallthroughCasesInSwitch**: Disallows fallthrough cases in switch statements.  
- **noUncheckedIndexedAccess**: Disallows indexed access with undefined or null.  
- **experimentalDecorators**: Enables support for experimental decorators.  
- **emitDecoratorMetadata**: Enables emitting design-type metadata for decorated declarations in source files.  
- *Additionally, the include property is used to specify the directory where TypeScript should search for source files.*

---

## 👨‍💻 ***Create a `.eslintrc.json` file***

ESLint is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code. To create a `.eslintrc.json` file, follow these steps:

In the root directory of your project, create a new file named `.eslintrc.json`.

Add the following contents to the file:

```json
{
  "extends": [
    "airbnb-typescript/base",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:jest/recommended",
    "plugin:testing-library/react",
    "plugin:prettier/recommended",
    "prettier/react"
  ],
  "plugins": [
    "@typescript-eslint",
    "import",
    "jsx-a11y",
    "prettier",
    "react",
    "react-hooks",
    "jest",
    "testing-library"
  ],
  "env": {
    "browser": true,
    "node": true,
    "jest/globals": true
  },
  "parserOptions": {
    "project": "./tsconfig.json"
  },
  "rules": {
    "import/prefer-default-export": "off",
    "react/jsx-props-no-spreading": "off"
  }
}
```

This config file sets up ESLint for your project.

In the root of your project, create a .prettierrc file with the following contents:

json
Copy code
{
"trailingComma": "es5",
"tabWidth": 2,
"semi": true,
"singleQuote": true,
"printWidth": 120
}

This config file sets up Prettier for your project.

Now that you have created and configured all the necessary config files, you are ready to start building your project with confidence and consistency. By using TypeScript, ESLint, and Prettier, you can ensure that your code is not only bug-free and easy to maintain but also adheres to best practices and industry standards.

🎉 Congratulations on completing this important step in setting up your project! 🎉
