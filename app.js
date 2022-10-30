const express = require('express');
const os = require('os');

const port = process.env.PORT || 8000;

const app = express();

// https://qr.ae/pvDK9G
const todos = [
    {
        task: 'Publish a book, a short story, or an article',
        completed: false
    },
    {
        task: 'Learn to play an instrument',
        completed: false
    },
    {
        task: 'Learn how to shoot a gun',
        completed: false
    },
    {
        task: 'Go scuba diving',
        completed: false
    },
    {
        task: 'Stop and help somone in distress',
        completed: false
    },
    {
        task: 'Go sailing',
        completed: false
    },
    {
        task: 'Go camping in the wilderness',
        completed: false
    },
    {
        task: 'Walk bare feet in the grass in summer',
        completed: false
    },
    {
        task: 'Climb a mountain',
        completed: false
    },
    {
        task: 'Raft down white waters',
        completed: false
    },
    {
        task: 'Learn how to cook',
        completed: false
    },
    {
        task: 'Go to an Oktoberfest',
        completed: false
    },
    {
        task: 'Get up to 50 pushups and then keep on going',
        completed: false
    },
    {
        task: 'Learn something new every day',
        completed: false
    },
    {
        task: 'Be kind...always',
        completed: false
    },
    {
        task: 'See a solar eclipse',
        completed: false
    },
    {
        task: 'Learn a foreign language',
        completed: false
    },
    {
        task: 'Support a local cause',
        completed: false
    },
    {
        task: 'Learn a martial art',
        completed: false
    },
    {
        task: 'Write some (good) answers in Quora',
        completed: false
    }
];

// This middleware will not allow the request to go beyond it
app.use(async(req, res, next) => {
    console.log("Middleware : Am the one who knocks !");
    next();
});

app.get('/todos', async(req, res) => {
    console.log(`Am sending response ${os.hostname()}`);
    
    res.json({
        status: 'API Works...',
        hostname: os.hostname(),
        todos
    });
});
  
app.listen(port, () => console.log(`Server on port ${port}`));