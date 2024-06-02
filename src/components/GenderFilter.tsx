import React from 'react';

interface IProps {
  onChangeCallback: Function
}

export default function GenderFilter(props: IProps) {

  const { onChangeCallback } = props;

  return (
    <div className='flex flex-col items-center pb-8'>
      <label htmlFor='genderFilter' className='pb-2 block text-sm'>Gender Filter:</label>
      <select id='genderFilter' defaultValue='total' className="select select-bordered w-max" onChange={event => onChangeCallback(event.target.value)}>
        <option value='total'>Off</option>
        <option value='male'>Male</option>
        <option value='female'>Female</option>
      </select>
    </div>
  )
};
