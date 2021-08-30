import { useHistory } from 'react-router-dom';

import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage(){

    const history = useHistory();

    function addMeetuoHandler(meetupData) {
        fetch('https://react-getting-d7047-default-rtdb.firebaseio.com/meetups.json',
        {
            method:'POST',
            body: JSON.stringify(meetupData),
            headers: {
                'Content-Type': 'application/json'
            }
        }
        ).then(()=> {
            history.replace('/')
        });
    } 
    return (
        <section>
            <h1>Add New Meetup</h1>
            <NewMeetupForm onAddMeetup={addMeetuoHandler}/>
        </section>
    );
}

export default NewMeetupPage;