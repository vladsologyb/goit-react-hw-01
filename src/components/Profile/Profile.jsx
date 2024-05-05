import css from "./Profile.module.css";
export default function Profile ({ data: {username, tag, location, avatar, stats:{followers, views, likes} }}) {
    return (
        
        <div className={css.container}>
        <div>
        <img className={css.img} src={avatar} alt="" width={200} height={200} />
        <p className={css.name}>{username}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
    </div>
     <ul className={css.list}>
     <li className={css.item}>
       <span className={css.span}>Followers</span>
       <span className={css.span}>{followers}</span>
     </li>
     <li className={css.item}>
       <span className={css.span}>Views</span>
       <span className={css.span}>{views}</span>
     </li>
     <li className={css.item}>
       <span className={css.span}>Likes</span>
       <span className={css.span}>{likes}</span>
     </li>
   </ul>  
   </div>
  
    ); 

};