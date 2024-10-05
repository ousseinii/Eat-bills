import Button from './Button';

export default function Friend({ friend, onSelection, selectedFriend }) {
  const isSelected = selectedFriend?.id === friend.id;

  return (
    <li className={isSelected ? 'selected' : ''}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>

      {friend.balance < 0 && (
        <p className='red'>
          Vous devez {friend.name} {Math.abs(friend.balance)}€
        </p>
      )}
      {friend.balance > 0 && (
        <p className='green'>
          {friend.name} vous doit {Math.abs(friend.balance)}€
        </p>
      )}
      {friend.balance === 0 && <p>Vous et {friend.name} êtes quittes</p>}

      <Button onClick={() => onSelection(friend)}>
        {isSelected ? 'Fermer' : 'Sélectionner'}
      </Button>
    </li>
  );
}
