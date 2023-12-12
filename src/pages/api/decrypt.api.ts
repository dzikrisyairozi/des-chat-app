// pages/api/decrypt.js
import CryptoJS from 'crypto-js';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function handler(req: any, res: any) {
  if (req.method === 'POST') {
    try {
      const { cipherText, key } = req.body;
      const bytes = CryptoJS.DES.decrypt(cipherText, key);
      const decryptedText = bytes.toString(CryptoJS.enc.Utf8);

      if (!decryptedText) {
        throw new Error('Failed to decrypt message. The key may be incorrect.');
      }

      res.status(200).json({ decryptedText });
    } catch (error) {
      res.status(500).json({ error: 'Decryption failed' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
