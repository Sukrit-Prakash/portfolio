import manager from '../../nlpManager';

export default async function handler(req, res) {
  const { query } = req.body;

  if (!query) {
    return res.status(400).json({ error: 'No query provided' });
  }

  const response = await manager.process('en', query);
  res.json({ response: response.answer || 'Sorry, I did not understand that.' });
}

