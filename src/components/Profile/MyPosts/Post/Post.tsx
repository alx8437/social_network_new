import styles from "./Post.module.css";
import avatar from '../../../../assets/images/avatar.jpg'
import {FC} from "react";

type PostPropsType = {
    message: string
    likeCount: number
}

const Post: FC<PostPropsType> = (props) => {
    const { message, likeCount } = props;

    return  (
        <div className={styles.item}>
            <img src={avatar} alt="avatar" />
            {message}
            <div><span>likes {likeCount}</span></div>
        </div>
    )
}

export default Post