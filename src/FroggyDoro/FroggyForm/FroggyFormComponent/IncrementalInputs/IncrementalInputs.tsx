import { ChangeEventHandler } from 'react';

interface IProps {
    value: number
    changeHandler: ChangeEventHandler<HTMLInputElement>
    type: string
    limit: string
}

export default function IncrementalInputs ({ value , changeHandler, type, limit } : IProps) {
    return (
        <input
        className="froggyform-incinput"
        name={type}
        type="number"
        min="0"
        max={limit}
        placeholder="0"
        value={value? value : 0}
        onChange={changeHandler}
      />
    )
}