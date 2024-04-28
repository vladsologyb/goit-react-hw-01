import css from "./Profile.module.css";
export default function Profile ({ data: {username, tag, location, avatar, stats:{followers, views, likes} }}) {
    return (
        <div>

        <img className="{css.img}" src={avatar} alt="" width={100} height={100} />
        <p>{username}</p>
        <p>{tag}</p>
        <p>{location}</p>
    </div>
       
    ); 

};