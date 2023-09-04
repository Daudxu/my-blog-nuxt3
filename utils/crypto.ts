import * as CryptoJS from 'crypto-js';

// 密钥，需要确保它的安全性
const SECRET_KEY = 'your-secret-key'; // 替换为实际的密钥

// 加密函数
export function encrypt(text: string): string {
  const ciphertext = CryptoJS.AES.encrypt(text, SECRET_KEY).toString();
  return ciphertext;
}

// 解密函数
export function decrypt(ciphertext: string): string {
  const bytes = CryptoJS.AES.decrypt(ciphertext, SECRET_KEY);
  const originalText = bytes.toString(CryptoJS.enc.Utf8);
  return originalText;
}