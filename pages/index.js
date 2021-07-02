import { MeetupList } from '../components/';

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'A First Meetup',
    image: 'https://tripsget.com/wp-content/uploads/2020/05/DSC06315-1360x907.jpg',
    address: 'Some address',
    description: 'This is a first meetup!',
  },
  {
    id: 'm2',
    title: 'A Second Meetup',
    image:
      'https://images.adsttc.com/media/images/5a4f/ca07/f197/cc7c/2700/0048/slideshow/2026viewfromfleetstreet.jpg?1515178486',
    address: 'Twice Some address ',
    description: 'This is a second meetup!',
  },
];

const Home = () => {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
};

export default Home;
