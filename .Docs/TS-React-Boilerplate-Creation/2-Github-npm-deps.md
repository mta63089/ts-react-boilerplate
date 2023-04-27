# Setting up GitHub Project, NPM and Required Dependencies

Author: [Michael Albert](https://github.com/mta63089) 💻  

---

## 🔰 Getting Started
  
In this page, we will guide you step-by-step to set up a GitHub project with NPM and all the required dependencies for a TypeScript React project.
  
---

## 💻 Create a GitHub repository  
  
---

1. First, you need to create a new repository on [GitHub](https://github.com/). If you don't have a GitHub account yet, go ahead and [sign up](https://github.com/join) for one.  

2. Once you're logged in, click on the **+** icon in the top-right corner of the page, and select **New repository**.
  
3. On the new repository page, give your repository a name and a brief description. You can also choose to make the repository public or private.

4. Once you're done, click on the **Create repository** button.

---

## 👨⚡👨 Clone the repository

---

1. Now that you have created the repository, you need to clone it to your local machine. To do that, go to the repository page and click on the **Code** button. You can choose to clone the repository using HTTPS or SSH.

**2.** Copy the link to the clipboard for the http option. This guide is not going to go into ssh at all.
  
**3.** Open your terminal and navigate to the directory where you want to store your project.

**4.** Run the following command to clone the repository:

**5.** Make sure you choose a suitable location (which is what the first portion of this will do). Usually you start out in the ``c:\Users\<yourWindowsUserName>`` after installing and opening git back

```bash
cd 
git clone https://github.com/<your-username>/<your-repo-name>.git
```  
  
Navigate into the repository folder.

```bash
cd <your-repo-name>
```

---

## 📦 Initialize the project with NPM

---

To initialize your project with NPM, run the following command in your terminal:

```bash
npm init -y
This will create a package.json file in your project root directory.
```

Update the package.json file to include the following fields:

```json
{
  "name": "<your-repo-name>",
  "version": "1.0.0",
  "description": "<your-project-description>",
  "main": "index.js",
  "repository": {
    "type": "git",
    "url": "git+https://github.com/<your-username>/<your-repo-name>.git"
  },
  "author": "<your-name>",
  "license": "MIT"
}
```

Replace `<your-repo-name>` , `<your-project-description>` , `<your-username>`, and `<your-name>` with your own values. And dont include the arrow brackets.

---

## 📚 Install the required dependencies

---

To install the required dependencies, run the following command in your terminal and make sure to be in the root directory:

```bash
npm install @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint eslint-config-airbnb-typescript eslint-config-prettier eslint-config-react eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-testing-library prettier --save-dev
This will install all the necessary dependencies for TypeScript, ESLint, Prettier, and React.
```

Verify that the dependencies were installed by checking your package.json file.

That's it! You now have completed some easy steps to get your repo set up locally!  
