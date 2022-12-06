import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
    {
        id: 'm1',
        title: 'The First Meetup',
        image: 'https://upload.wikimedia.org/wikipedia/commons/d/d7/Bas%C3%ADlica_de_Nuestra_Se%C3%B1ora%2C_Ciudad_Ho_Chi_Minh%2C_Vietnam%2C_2013-08-14%2C_DD_03.JPG',
        address: 'Some address 5, 12345 Some City',
        description: 'This is the first meetup'
    },
    {
        id: 'm2',
        title: 'The Second Meetup',
        image: 'https://upload.wikimedia.org/wikipedia/commons/d/d7/Bas%C3%ADlica_de_Nuestra_Se%C3%B1ora%2C_Ciudad_Ho_Chi_Minh%2C_Vietnam%2C_2013-08-14%2C_DD_03.JPG',
        address: 'Some address 10, 12345 Some City',
        description: 'This is the second meetup'
    }
]

const HomePage = () => {
    return <MeetupList meetups={DUMMY_MEETUPS}/>
}

export default HomePage;