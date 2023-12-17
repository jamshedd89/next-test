export default function getById(req, res) {
  res.statusCode = 200;
  //res.setHeader('Content-Type', 'aplication/json');

  res.json({ yourId: req.query.id })
}
