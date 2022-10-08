import { getPlaiceholder } from 'plaiceholder';
import nc from 'next-connect';
import type { NextApiRequest, NextApiResponse } from 'next';

const handler = nc<NextApiRequest, NextApiResponse>({
  onError(error, req, res) {
    res.status(400).json({ result: false, message: 'Sorry!' });
  },
  onNoMatch(req, res) {
    res.status(404).json({ result: false, message: 'Not Mached Method!' });
  },
});

handler.post(async (req, res) => {
  try {
    const { imgUrl } = req.body;
    const { base64 } = await getPlaiceholder(imgUrl);
    res.status(200).json(base64);
  } catch (err) {
    console.log(err);
  }
});

export default handler;
