# [permission-check](https://www.npmjs.com/package/permission-check)

## Start

```shell
npm install permission-check
```

## Base

Based on the [express-jwt](https://www.npmjs.com/package/express-jwt), use token message in **[express-jwt](https://www.npmjs.com/package/express-jwt)**.

## Usage

```js
const pcheck = require("permission-check");
```

#### pcheck(object, name)

* **object:**

    Permission Object. `Default: {}`

    ```js
    {
        // key:[values]
        '/role':[/* permission string */]
    }
    ```

* **name:**

    Name in the jwt token. `Default: 'permission'`

    ```js
    // eg: jwt token
    {
        gender: 0,
        age: 32,
        permission: [...],
        ...
    }
    // name = permission
    ```
