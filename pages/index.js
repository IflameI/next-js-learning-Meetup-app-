import Head from 'next/head';

import { MongoClient } from 'mongodb';

import { MeetupList } from '../components/';

export async function getStaticProps() {
  const client = await MongoClient.connect(
    'mongodb+srv://user:user123@cluster0.vy4bz.mongodb.net/meetups?retryWrites=true&w=majority',
  );
  const db = client.db();

  const meetupsCollection = db.collection('meetups');

  const meetups = await meetupsCollection.find().toArray();

  client.close();
  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 1, //При деплое , next js будет пытаться заново сгенерировать страницу(не чаще одного  раза в 1 секунду)
  };
}

const Home = ({ meetups }) => {
  return (
    <>
      <Head>
        <title>React Meetups</title>
        <meta name='description' content='Some description for google' />
      </Head>
      <MeetupList meetups={meetups} />
    </>
  );
};

export default Home;
