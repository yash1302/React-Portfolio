import React from 'react'


export default function WorkItem(props) {
  return (
    <ol className='flex flex-col md:flex-row relative border-l border-stone-200 '>
        <li>
            <div>{props.year}</div><br />
            <div>{props.title}</div><br />
            <div>{props.duration}</div><br />
            <div>{props.details}</div><br />
        </li>
    </ol>
  )
}
