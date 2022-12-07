import { Fragment } from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";

const MeetupDetails = () => {
  return (
    <MeetupDetail image='' title='' address='' description=''/>
  );
};

export const getStaticPaths = async () => {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: 'm1'
        },
        params: {
          meetupId: 'm2'
        },
      }
    ]
  }
}

export const getStaticProps = async (context) => {
  const meetupId = context.params.meetupId;

  return {
      props: {
          meetupData: {
            image: '',
            id: '',
            title: '',
            address: '',
            description: ''
          }
      },
      revalidate: 1
  }
}

export default MeetupDetails;
