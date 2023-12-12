// pages/api/encrypt.js
import CryptoJS from 'crypto-js';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function handler(req: any, res: any) {
  if (req.method === 'POST') {
    try {
      const { message, key } = req.body;
      const encryptedMessage = CryptoJS.DES.encrypt(message, key).toString();
      res.status(200).json({ encryptedMessage });
    } catch (error) {
      res.status(500).json({ error: 'Encryption failed' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
