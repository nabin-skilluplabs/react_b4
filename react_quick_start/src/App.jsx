import Avatar from './components/Avatar';
import Professionals from './components/Professionals';
import { Profile } from './components/Profile';

function App() {
  const greetings = 'Hello!';
  const showValue = '1';
  const people = [
    'Creola Katherine Johnson: mathematician',
    'Mario José Molina-Pasquel Henríquez: chemist',
    'Mohammad Abdus Salam: physicist',
    'Percy Lavon Julian: chemist',
    'Subrahmanyan Chandrasekhar: astrophysicist',
    'Donald Trump: president',
  ];
  return (
    <div className="flex justify-center p-4">
      <article className="bg-white p-4 w-1/2 rounded-2xl shadow-xl">
        <h2
          className="text-3xl font-bold mb-2"
          style={{ color: 'red', fontStyle: 'italic' }}
        >
          - {greetings}, Amazing scientists -{' '}
        </h2>
        <div className="flex gap-1">
          <Profile />
          <Profile />
          <Profile />
          <Profile />
          <Profile />
        </div>
        <hr className="m-4" />
        <div>
          <Avatar
            width={50}
            height={50}
            profile="https://i.imgur.com/1bX5QH6.jpg"
          />
          <Avatar
            width={100}
            height={100}
            profile="https://i.imgur.com/MK3eW3Am.jpg"
          />
          <Avatar profile="https://i.imgur.com/MK3eW3Am.jpg" />
        </div>
        <hr className="m-4" />
        <div>
          {showValue === 'profile' ? (
            <Profile />
          ) : (
            <Avatar profile="https://i.imgur.com/1bX5QH6.jpg" />
          )}

          {showValue === 'profile' && <Profile />}
          {showValue === 'profile' || (
            <Avatar profile="https://i.imgur.com/1bX5QH6.jpg" />
          )}
        </div>
        <hr className="m-4" />
        <ul>
          {people.map((person, index) => (
            <li key={index}>{person}</li>
          ))}
        </ul>
      </article>
      <Professionals />
    </div>
  );
}

export default App;
