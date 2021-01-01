import { createCipheriv, createDecipheriv, randomBytes } from "crypto";

class AES256GCM {
  async encryptAsync(data: Buffer, key: Buffer): Promise<Buffer> {
    const iv = await this._randomBytesAsync(12);
    return this._encrypt(data, key, iv);
  }

  encryptSync(data: Buffer, key: Buffer): Buffer {
    const iv = this._randomBytesSync(12);
    return this._encrypt(data, key, iv);
  }

  private _encrypt(data: Buffer, key: Buffer, iv: Buffer): Buffer {
    const cipher = createCipheriv("aes-256-gcm", key, iv);
    const chunks: [Buffer, Buffer] = [cipher.update(data), cipher.final()];
    return Buffer.concat([iv, cipher.getAuthTag(), chunks[0], chunks[1]]);
  }

  decrypt(data: Buffer, key: Buffer): Buffer {
    const iv = data.slice(0, 12);
    const authTag = data.slice(12, 28);
    const encrypted = data.slice(28);
    const decipher = createDecipheriv("aes-256-gcm", key, iv);
    const chunks: Buffer[] = [];
    chunks.push(decipher.update(encrypted));
    decipher.setAuthTag(authTag);
    chunks.push(decipher.final());
    return Buffer.concat(chunks);
  }

  createKey(): Buffer {
    return this._randomBytesSync(32);
  }

  private async _randomBytesAsync(byteCount: number): Promise<Buffer> {
    return new Promise((resolve, reject) => {
      randomBytes(byteCount, (error, buffer) => {
        if (error === null) resolve(buffer);
        else reject(error);
      });
    });
  }

  private _randomBytesSync(byteCount: number): Buffer {
    return randomBytes(byteCount);
  }
}

export default new AES256GCM();
