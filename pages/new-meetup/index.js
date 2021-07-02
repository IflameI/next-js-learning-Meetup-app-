import { NewMeetupForm } from '../../components/';

const NewMeetUp = () => {
  const addMeetUpHandler = (meetUpData) => {
    console.log(meetUpData);
  };
  return <NewMeetupForm onAddMeetup={addMeetUpHandler} />;
};

export default NewMeetUp;
