import React from 'react';

function NameListItem(props){
    return(
        <li>
            name - {props.name} / course - {props.course} / email - {props.email}
            </li>

    );
}

export default NameListItem ;