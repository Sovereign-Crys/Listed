import React from "react";
//import { styles } from "ansi-colors";

const Grocery = ({ id, name, complete, groceryClick }) => (
    <li 
    style={ complete ? { ...styles.grocery, ...styles.complete } : styles.grocery }
    onClick={ () => groceryClick(id) }
>
{ name }
</li>
);

const styles = {
    grocery: { cursor: 'pointer'},
    complete: { color: 'grey', textDecoration: 'line-through' },
};

export default Grocery;