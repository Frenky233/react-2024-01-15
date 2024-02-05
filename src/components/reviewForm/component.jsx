import { useReducer, useContext } from "react";
import { UserContext } from '../../contexts/user';
import styles from './styles.module.scss'
import classNames from 'classnames'

const initialValue = {
    name: '',
    text: '',
    rating: 1
}

const reducer = (state, {type, payLoad}) => {
    switch (type){
        case 'setText': {
            return{
                ...state,
                text: payLoad
            }
        }
        case 'setRating':{
            return{
                ...state,
                rating: payLoad
            }
        }
        default:
            return state
    }
}

export const ReviewForm = ({className}) =>{
    const { name } = useContext(UserContext);
    const [form, dispatch] = useReducer(reducer, {...initialValue, name});
    
    const onChange = {
        setName: (name) => dispatch({type: 'setName', payLoad: name}),
        setText: (text) => dispatch({type: 'setText', payLoad: text}),
        setRating: (rating) => dispatch({type: 'setRating', payLoad: rating}),
    }

    return (
        <form className={classNames(styles.reviewForm, className)}>
            <div className={styles.reviewFormField}>
                <div>Name</div>
                <strong>{name}</strong>
            </div>
            <div className={styles.reviewFormField}>
                <label htmlFor="text">Text</label>
                <textarea 
                    type="text"
                    id="text"
                    value={form.text}
                    onChange={event => onChange.setText(event.target.value)}
                />
            </div>
            <div className={styles.reviewFormField}>
                <label htmlFor="rating">Rating</label>
                <input 
                    type="number"
                    id="rating"
                    min={1}
                    max={5}
                    value={form.rating}
                    onChange={event => onChange.setRating(Number(event.target.value))}
                />
            </div>
        </form>
    )
};