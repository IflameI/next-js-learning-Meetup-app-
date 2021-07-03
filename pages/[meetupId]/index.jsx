import Head from 'next/head';

import { MongoClient, ObjectId } from 'mongodb';

import { MeetUpDetail } from '../../components';

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    'mongodb+srv://user:user123@cluster0.vy4bz.mongodb.net/meetups?retryWrites=true&w=majority',
  );
  const db = client.db();

  const meetupsCollection = db.collection('meetups');

  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();

  client.close();
  return {
    fallback: 'blocking',
    paths: meetups.map((meetup) => ({ params: { meetupId: meetup._id.toString() } })),
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  const client = await MongoClient.connect(
    'mongodb+srv://user:user123@cluster0.vy4bz.mongodb.net/meetups?retryWrites=true&w=majority',
  );
  const db = client.db();

  const meetupsCollection = db.collection('meetups');

  const selectedMeetup = await meetupsCollection.findOne({ _id: ObjectId(meetupId) });

  client.close();
  return {
    props: {
      meetUpData: {
        title: selectedMeetup.title,
        address: selectedMeetup.address,
        image: selectedMeetup.image,
        id: selectedMeetup._id.toString(),
        description: selectedMeetup.description,
      },
    },
  };
}

const MeetUpDetails = ({ meetUpData }) => {
  return (
    <>
      <Head>
        <title>{meetUpData.title}</title>
        <meta name='description' content={meetUpData.description} />
      </Head>
      <MeetUpDetail
        image={meetUpData.image}
        title={meetUpData.title}
        address={meetUpData.address}
        description={meetUpData.description}
      />
    </>
  );
};

export default MeetUpDetails;
