import classess from './MeetUpDetail.module.css';

const MeetUpDetail = ({ image, title, address, description }) => {
  return (
    <section className={classess.detail}>
      <img src={image} alt={title} />
      <h1>{title}</h1>
      <address>{address}</address>
      <p> {description}</p>
    </section>
  );
};

export default MeetUpDetail;
