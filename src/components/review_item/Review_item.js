import './Review_item.css'
import axios from "axios";
import {useEffect, useState} from "react";
import Button, {buttonStyle} from "../../ui/button/Button";
import {useSelector} from "react-redux";
import useModal from "../../hooks/useModal";
import ModalAuthorization from '../modal_authorization/ModalAuthorization';

function Review_item(props) {
    const [commentItem, setCommentItem] = useState([])
    const [comment, setComment] = useState('')
    const authState = useSelector(state => state.auth);
    const [reviewExist, setReviewExist] = useState(' ');
    const [visibleLogin, openLogin, closeLogin] = useModal();
    const {loading} = useSelector(state => state.auth);
    let reviewForm;
    if (authState.user === null && !loading) {
        reviewForm = (<div className='comment__autorization'>Чтобы оставить отзыв <div
            className='comment__autorization-link' onClick={openLogin}> войдите
            на сайт</div>
            <ModalAuthorization visible={visibleLogin} close={closeLogin} />
            </div>
        );
    } else {
        reviewForm = (<div>
                <div>{!reviewExist ?
                    <div><textarea className='productInfo__input' placeholder="Оставить комментарий" value={comment}
                                   onChange={(event) => setComment(event.target.value)}/>
                        <Button buttonStyle={buttonStyle.primary} text={'Добавить комментарий'} onClick={Review}/>
                    </div> : <div>{reviewExist === '' ? 'Отзыв уже оставлен' : ''}</div>}</div>


        </div>)
    }

    useEffect(() => {
        axios.get('/reviews/exists?productId=' + props.comment,)
            .then((response) => {
                setReviewExist(response.data);
            })
    }, []);

    function closeCommentForm(){
        axios.get('/reviews/exists?productId=' + props.comment,)
            .then((response) => {
                setReviewExist(response.data);
            })
    }
    useEffect(() => {
        axios
            .get('/reviews', {
                params: {
                    productId: props.comment,
                }
            })
            .then(response => {
                let data = response.data;
                setCommentItem(data)
            })
    }, [comment]);

    function Review() {
        axios.post('/reviews', {
            product_id: props.comment,
            review: comment,
        })
            .then(() => {
                    setComment('');
                    closeCommentForm();
                }
            )
    }



    return (
        <div>{reviewForm}
            <div className='review_item'>
                {commentItem.map(function (item, index) {
                    return (
                        <div className='comment__users' key={index}>
                            <div className='comment__user-name'>{item.user.firstName + ' ' + item.user.lastName}</div>
                            <div className='comment__user'>{
                                item.review
                            }
                            </div>
                        </div>

                    )
                })}
            </div>
        </div>
    )

}

export default Review_item;