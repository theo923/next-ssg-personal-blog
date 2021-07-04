
import { MongoClient } from 'mongodb';

async function handler(req, res) {
    const {title, email, comment} = req.body.data;
    if(req.method === 'POST') {
        if (title !== '' && email !== '' && comment !== ''){
            const client = await MongoClient.connect(process.env.MONGODB,  {useNewUrlParser: true, useUnifiedTopology: true});
            const db = client.db();
            const commentCollection = db.collection('blogcomment');
            const result = await commentCollection.insertOne(req.body.data);
            client.close();
            res.json('Succeed');
        } else res.status(400).json({message: 'You should fill in all the blanks'})
    }
}

export default handler;