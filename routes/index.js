import { Router } from 'express';
const router = Router();

const messages = [
  {
    text: 'Hello there!',
    user: 'Obi-Wan Kenobi',
    added: new Date('2005-05-19'),
  },
  {
    text: 'General Kenobi!',
    user: 'General Grievous',
    added: new Date('2005-05-19'),
  },
  {
    text: 'Wow! This message board is great!',
    user: 'Roger',
    added: new Date(Date.now()),
  },
];

router.get('/', (req, res, next) => {
  res.render('index', { title: 'Message Board', messages: messages });
});

export default router;
