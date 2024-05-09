import { Router } from 'express';
const router = Router();

const messages = [
  {
    text: 'Hello there!',
    user: 'Obi-Wan Kenobi',
    added: new Date('2005-05-20'),
  },
  {
    text: 'General Kenobi!',
    user: 'General Grievous',
    added: new Date('2005-05-20'),
  },
  {
    text: 'Wow! This message board is great!',
    user: 'Roger',
    added: new Date('2024-05-09'),
  },
];

router.get('/', (req, res, next) => {
  res.render('index', { title: 'Message Board', messages: messages });
});

router.get('/new', (req, res, next) => {
  res.render('form', { title: 'New Message' });
});

export default router;
