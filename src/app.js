import express from 'express';

const app = express();
const  tweetsHARDCODE = [
    {username: "patrick",tweet: "I'm Hungry"},
    {username: "spongebob",tweet: "Let's make some krabby patties!!"},
    {username: "spongebob",tweet: "I'm READY!!!"},
    {username: "patrick",tweet: "I'm Hungry"},
    {username: "spongebob",tweet: "Let's make some krabby patties!!"},
    {username: "spongebob",tweet: "I'm READY!!!"},
    {username: "patrick",tweet: "I'm Hungry"},
    {username: "spongebob",tweet: "Let's make some krabby patties!!"},
    {username: "spongebob",tweet: "I'm READY!!!"},
    {username: "patrick",tweet: "I'm Hungry"},
    {username: "spongebob",tweet: "Let's make some krabby patties!!"},
    {username: "spongebob",tweet: "I'm READY!!!"},
];
const usersHARDCODE= [
    {username:"patrick",avatar:"http://logos-download.com/wp-content/uploads/2016/09/Patrick_Star_picture_logo.png"},
    {username: 'spongebob', avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info" }
];

app.get('/tweets',(req,res)=>{
    const recentTweets = tweetsHARDCODE.filter((e,index)=>{return(index<10)});
    recentTweets.map((element)=>element.avatar=usersHARDCODE.find(el=>el.username===element.username).avatar);
    res.send(recentTweets);
});

app.listen(5000,()=>console.log('Listening on port 5000'));