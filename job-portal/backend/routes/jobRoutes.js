const router = require('express').Router();
const Job = require('../models/Job');

router.post('/add', async (req, res) => {
  const job = new Job(req.body);
  await job.save();
  res.json('Job Added');
});

router.get('/', async (req, res) => {
  const jobs = await Job.find();
  res.json(jobs);
});

module.exports = router;
