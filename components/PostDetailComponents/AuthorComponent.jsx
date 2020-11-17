import React from 'react'

export default function AuthorComponent(props) {
    return (
        <>
            <h2>Author details</h2>
            {Object.entries(props.author).map((item, index) => {
                const capitalizedFirstChar = item[0].charAt(0).toUpperCase() + item[0].slice(1)
                item[0] = capitalizedFirstChar.replace(/([a-z])([A-Z])/g, '$1 $2')

                //console.log(item[0]);

                //item[0] = item[0].replace(/(\s[A-Z])(\s[a-z])/, '$1')
                //console.log(item[0]);

                if (item[1] === null) {
                    item[1] = "Not available"
                }
                return (
                    <h4 key={index}>{item[0]}: <span>{item[1]}</span></h4>
                )
            })}
        </>
    )
}
