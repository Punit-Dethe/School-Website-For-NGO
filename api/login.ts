import { serialize } from 'cookie';

export default function handler(req, res) {
  const { password } = JSON.parse(req.body ?? '{}');
  if (password === process.env.ADMIN_PASSWORD) {
    const cookie = serialize('admin', 'true', { httpOnly:true, sameSite:'lax', path:'/' });
    res.setHeader('Set-Cookie', cookie);
    return res.status(200).json({ ok: true });
  }
  res.status(401).json({ ok:false });
}
