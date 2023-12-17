// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function echo(req, res) {
  res.statusCode = 200;
  //res.setHeader('Content-Type', 'aplication/json');

  res.end(JSON.stringify({
    message: req.query.message ?? 'Base message'
  }))
}
