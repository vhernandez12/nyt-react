import React from "react";

const ResultItems = ({ _id, handleSaveButton, title, date, url }) => (
    <li>
        <div>
            <h3>{title}</h3>
            <p>Publised { date }</p>
            <button id = { _id } className = "btn btn-primary save-btn" onClick = {() => handleSaveButton(_id)} > Save Article </button>
        </div>
    </li>    
);

export default ResultItems;