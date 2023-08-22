import './Review_item.css'
import axios from "axios";
import {useEffect, useState} from "react";
import {logDOM} from "@testing-library/react";
function Review_item(props){
    const [commentItem,setCommentItem]=useState([])
    const [idComment,setIdComment]=useState();
    useEffect(() => {

        axios
            .get('http://frost.runtime.kz/reviews',{
                params:{
                    productId:props.comment,
                }
            })
            .then(response => {
                let data=response.data;
                setCommentItem(data)
            })
    }, []);

    return(<div>
            {commentItem.map(function (item,index){
                return(
                <div className='comment__users' key={index}>
                    <div className='comment__user-name' >{item.user.firstName+' '+item.user.lastName}</div>
                    <div className='comment__user'>{
                        item.review
                    }
                    </div>
                </div>
                )
            })}
        </div>
            )
}
export default Review_item;