import { useState } from "react";
import './PageButtons.css'

function PageButtons(props) {

    let navigation = [];

    // for (let i = 1; i <= props.totalPages; i++) {
    //
    //         navigation.push(i);
    //
    //
    // }
    //
    if (props.totalPages <= 8) {
        for (let i = 1; i <= props.totalPages; i++) {
            navigation.push(<div key={i} className={props.currentPage!== i ? 'navigation__button ' : 'navigation__button active' } onClick={() => props.onPageChange(i)}>{[i]}</div>);

        }

    }
    if (props.totalPages > 8) {

        if (props.currentPage !== 1) {
            navigation.push(<div key={1} className='navigation__button' onClick={() => props.onPageChange(1)}>1</div>);
        } else {
            navigation.push(
                <div key={props.currentPage} className='navigation__button active' onClick={() =>props.onPageChange(props.currentPage)}>{props.currentPage}</div>,
                <div key={props.currentPage+1} className='navigation__button' onClick={() =>props.onPageChange(props.currentPage + 1)}>{props.currentPage + 1}</div>,
                <div key={props.currentPage+2} className='navigation__button' onClick={() =>props.onPageChange(props.currentPage + 2)}>{props.currentPage + 2}</div>
            );
        }

        if (props.currentPage === 2) {
            navigation.push(<div key={props.currentPage} className='navigation__button active' onClick={() =>props.onPageChange(props.currentPage)}>{props.currentPage}</div>,
                <div key={props.currentPage+1} className='navigation__button' onClick={() =>props.onPageChange(props.currentPage + 1)}>{props.currentPage + 1}</div>);
        }

        if (props.currentPage > 3) {
            navigation.push(<div key={'before'}>...</div>);
        }

        if (props.currentPage >= 3 && props.currentPage <= props.totalPages - 2) {
            navigation.push(<div key={props.currentPage-1} className='navigation__button' onClick={() =>props.onPageChange(props.currentPage - 1)}>{props.currentPage - 1}</div>,
                <div key={props.currentPage} className='navigation__button active' onClick={() =>props.onPageChange(props.currentPage)}>{props.currentPage}</div>,
                <div key={props.currentPage+1} className='navigation__button' onClick={() =>props.onPageChange(props.currentPage + 1)}>{props.currentPage + 1}</div>);
        }

        if (props.currentPage < props.totalPages - 2) {
            navigation.push(<div key={'after'}>...</div>);
        }

        if (props.currentPage === props.totalPages - 1) {
            navigation.push(<div key={props.currentPage-1} className='navigation__button' onClick={() =>props.onPageChange(props.currentPage - 1)}>{props.currentPage - 1}</div>,
                <div key={props.currentPage} className='navigation__button active' onClick={() =>props.onPageChange(props.currentPage)}>{props.currentPage}</div>);
        }

        if (props.currentPage !== props.totalPages) {
            navigation.push(<div key={props.totalPages} className='navigation__button' onClick={() =>props.onPageChange(props.totalPages)}>{props.totalPages}</div>);
        } else {
            navigation.push(<div key={props.currentPage-2} className='navigation__button' onClick={() =>props.onPageChange(props.currentPage - 2)}>{props.currentPage - 2}</div>,
                <div key={props.currentPage-1} className='navigation__button' onClick={() =>props.onPageChange(props.currentPage - 1)}>{props.currentPage - 1}</div>,
                <div key={props.currentPage} className='navigation__button active' onClick={() =>props.onPageChange(props.currentPage)}>{props.currentPage}</div>);
        }



    }




    function nextButton() {
        props.onPageChange(props.currentPage + 1);
    }

    function backButton() {
        props.onPageChange(props.currentPage - 1);
    }

    return (
        <div className='navigation' >
            {props.currentPage !== 1 ? <div className='back-page next-page'  onClick={() => {
                backButton();
            }}>Назад</div> : ''}
            {navigation}
            {props.currentPage !== props.totalPages ? <div className='next-page' onClick={() => {
                nextButton()
            }}>Вперед</div> : ''}

        </div>
    )
}

export default PageButtons;
