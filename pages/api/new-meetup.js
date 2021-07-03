import { MongoClient } from 'mongodb';

async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const data = req.body;

      const client = await MongoClient.connect(
        'mongodb+srv://user:user123@cluster0.vy4bz.mongodb.net/meetups?retryWrites=true&w=majority',
      );
      const db = client.db();

      const meetupsCollection = db.collection('meetups');

      const result = await meetupsCollection.insertOne(data);

      client.close();

      res.status(201).json({ message: 'Meetup inserted' });
    } catch (err) {
      console.log(err);
    }
  }
}

export default handler;
