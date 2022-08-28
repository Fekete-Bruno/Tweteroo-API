import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

const  tweetsHARDCODE = [
    {username: "patrick",tweet: "Number 1"},
    {username: "spongebob",tweet: "Number 2"},
    {username: "spongebob",tweet: "Number 3"},
    {username: "patrick",tweet: "Number 4"},
    {username: "spongebob",tweet: "Number 5"},
    {username: "spongebob",tweet: "Number 6"},
    {username: "patrick",tweet: "Number 7"},
    {username: "spongebob",tweet: "Number 8"},
    {username: "spongebob",tweet: "Number 9"},
    {username: "patrick",tweet: "Number 10"},
    {username: "spongebob",tweet: "Number 11"},
    {username: "spongebob",tweet: "Number 12"},
    {username: "patrick",tweet: "Number 13"},
    {username: "spongebob",tweet: "Number 14"},
    {username: "spongebob",tweet: "Number 15"},
    {username: "patrick",tweet: "Number 16"},
    {username: "spongebob",tweet: "Number 17"},
    {username: "spongebob",tweet: "Number 18"},
    {username: "patrick",tweet: "Number 19"},
    {username: "spongebob",tweet: "Number 20"},
    {username: "spongebob",tweet: "Number 21"},
    {username: "patrick",tweet: "Number 22"},
    {username: "spongebob",tweet: "Number 23"},
    {username: "spongebob",tweet: "Number 24"},
];

const usersHARDCODE= [
    {username:"patrick",avatar:"http://logos-download.com/wp-content/uploads/2016/09/Patrick_Star_picture_logo.png"},
    {username: 'spongebob', avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info" }
];

function addAvatar (element){
    return({...element,
        avatar:(usersHARDCODE.find(el=>el.username===element.username)).avatar
    });
}

app.get('/tweets',(req,res)=>{
    const page = parseInt(req.query.page);
    if(!page || page<1){
        return res.status(400).send("Informe uma página válida!");
    }
    const ten = 10;
    const allTweets = [...tweetsHARDCODE];
    const recentTweets = allTweets.reverse().filter((e,index)=>{return(((page*ten)-ten)<=index && index<page*ten)}).map((tweet)=>addAvatar(tweet));
    res.send(recentTweets);
});

app.get('/tweets/:username',(req,res)=>{
    const username = req.params.username;
    const allTweets = [...tweetsHARDCODE];
    const userTweets = allTweets.reverse().filter((e)=>{return(e.username===username)}).map((tweet)=>addAvatar(tweet));
    res.send(userTweets);
});

app.post('/sign-up',(req,res)=>{
    const { username, avatar } =  req.body;
    if(!username || !avatar){
        return res.status(400).send("Todos os campos são obrigatórios!");
    }

    usersHARDCODE.push({username,avatar});
    res.status(201).send("OK");
});

app.post('/tweets',(req,res)=>{
    const username = req.headers.user;
    const { tweet } =  req.body;
    if(!username || !tweet){
        return res.status(400).send("Todos os campos são obrigatórios!");
    }

    tweetsHARDCODE.push({username,tweet});
    res.status(201).send("OK");
});

app.listen(5000,()=>console.log('Listening on port 5000'));