/// <reference types="node" />
declare class AES256GCM {
    encryptAsync(data: Buffer, key: Buffer): Promise<Buffer>;
    encryptSync(data: Buffer, key: Buffer): Buffer;
    private _encrypt;
    decrypt(data: Buffer, key: Buffer): Buffer;
    createKey(): Buffer;
    private _randomBytesAsync;
    private _randomBytesSync;
}
declare const _default: AES256GCM;
export default _default;
