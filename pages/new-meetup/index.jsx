import Head from 'next/head';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { NewMeetupForm } from '../../components';

const NewMeetUp = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const addMeetUpHandler = async (enteredMeetUpData) => {
    try {
      setIsLoading(true);
      const response = await fetch('/api/new-meetup', {
        method: 'POST',
        body: JSON.stringify(enteredMeetUpData),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      if (data.message === 'Meetup inserted') {
        setIsLoading(false);
        router.push('/');
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <Head>
        <title>Add a New Meetup</title>
        <meta name='description' content='Some description for google second' />
      </Head>
      <NewMeetupForm isLoading={isLoading} onAddMeetup={addMeetUpHandler} />
    </>
  );
};

export default NewMeetUp;
