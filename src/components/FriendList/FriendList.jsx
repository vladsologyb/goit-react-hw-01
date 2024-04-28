import FriendListItem from "../FriendListItem/FriendListItem";
export default function FriendList ({data}) {
    return (
        <div>
            <ul className={css.list}>
            {data.map((friend) => (
        <li className={css.item} key={friend.id}>
          <FriendListItem data={friend} />
        </li>
      ))}
            </ul>
        </div>
    );
}