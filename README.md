## AES-256-GCM

A typed package for nodejs to simplify aes-256-gcm encryption and decryption.

### Install

`npm install 2cxxlife/aes-256-gcm`  
or  
`yarn add 2cxxlife/aes-256-gcm`

### Usage

```ts
// commonjs
// const AES256GCM = require("@2cxxlife/aes-256-gcm").default;
import AES256GCM from "@2cxxlife/aes-256-gcm";

const SECRET_KEY = AES256GCM.createKey(); // or supply your own 32 byte key buffer

/**
 * In a real scenario you may create a key once and save it in a file
 * const SECRET_KEY_BASE64 = AES256GCM.createKey().toString("base64");
 * saveToFile(SECRET_KEY_BASE64);
 *
 * And later load it back from the file
 * const SECRET_KEY_BASE64 = loadFromFile();
 * const SECRET_KEY = Buffer.from(SECRET_KEY_BASE64, "base64");
 */

const text = "My secret text";
const buffer = Buffer.from(text, "utf8");

const encrypted_buffer = AES256GCM.encryptSync(buffer, SECRET_KEY);

const decrypted_buffer = AES256GCM.decrypt(encrypted_buffer, SECRET_KEY);

console.log(decrypted_buffer.toString("utf8")); // "My secret text"
```

### Methods

#### AES256GCM.createKey()

Returns a `Buffer` object with random 32 bytes.

#### AES256GCM.encryptAsync(data: `Buffer`, key: `Buffer`)

Returns a `Promise` which resolves to a `Buffer` object with the encrypted content.

#### AES256GCM.encryptSync(data: `Buffer`, key: `Buffer`)

Returns a `Buffer` object with the encrypted content.

#### AES256GCM.decrypt(data: `Buffer`, key: `Buffer`)

Returns a `Buffer` object with the decrypted content.
