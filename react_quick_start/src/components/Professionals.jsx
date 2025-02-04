import { people } from '../data/people';
import Avatar from './Avatar';

function Professionals() {
  return (
    <div className="bg-white m-4 p-4">
      {people
        .filter((person) => person.profession === 'chemist')
        .map((person) => (
          <div key={person.id} className="flex items-center p-4">
            <Avatar profile={`https://i.imgur.com/${person.imageId}.jpg`} />

            <p className="pl-4">
              <strong>{person.name}</strong> {person.profession}{' '}
              {person.accomplishment}
            </p>
          </div>
        ))}
    </div>
  );
}

export default Professionals;
