"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = require("crypto");
class AES256GCM {
    async encryptAsync(data, key) {
        const iv = await this._randomBytesAsync(12);
        return this._encrypt(data, key, iv);
    }
    encryptSync(data, key) {
        const iv = this._randomBytesSync(12);
        return this._encrypt(data, key, iv);
    }
    _encrypt(data, key, iv) {
        if (key.length !== 32)
            throw new Error("Invalid key buffer size, should be equal to 32 bytes.");
        const cipher = crypto_1.createCipheriv("aes-256-gcm", key, iv);
        const chunks = [cipher.update(data), cipher.final()];
        return Buffer.concat([iv, cipher.getAuthTag(), chunks[0], chunks[1]]);
    }
    decrypt(data, key) {
        const iv = data.slice(0, 12);
        const authTag = data.slice(12, 28);
        const encrypted = data.slice(28);
        const decipher = crypto_1.createDecipheriv("aes-256-gcm", key, iv);
        const chunks = [];
        chunks.push(decipher.update(encrypted));
        decipher.setAuthTag(authTag);
        chunks.push(decipher.final());
        return Buffer.concat(chunks);
    }
    createKey() {
        return this._randomBytesSync(32);
    }
    async _randomBytesAsync(byteCount) {
        return new Promise((resolve, reject) => {
            crypto_1.randomBytes(byteCount, (error, buffer) => {
                if (error === null)
                    resolve(buffer);
                else
                    reject("Failed to generate random bytes.");
            });
        });
    }
    _randomBytesSync(byteCount) {
        return crypto_1.randomBytes(byteCount);
    }
}
exports.default = new AES256GCM();
