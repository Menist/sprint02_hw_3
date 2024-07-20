import React, {ChangeEvent, FC, useState} from 'react'
import { AffairType } from '../../HW2'
import s from './Affair.module.css'
import s2 from '../Affairs.module.css'

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType
    deleteAffairCallback: any // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        // need to fix
    }

    const nameClass = s.name + ' ' + s2[props.affair.priority]
    const buttonClass = s.closeButton + ' ' + s2[props.affair.priority]
    const affairClass = s.affair + ' ' + s2[props.affair.priority]

    return (
        <div
            id={'hw2-affair-' + props.affair._id}
            className={affairClass}
        >
            <div id={'hw2-name-' + props.affair._id} className={nameClass}>
                {/*создаёт студент*/}

                {/**/}
            </div>
            <div id={'hw2-priority-' + props.affair._id} hidden>
                {props.affair.priority}
            </div>

            <button
                id={'hw2-button-delete-' + props.affair._id}
                className={buttonClass}
                // need to fix
            >
                {/*текст кнопки могут изменить студенты*/}
                X
                {/**/}
            </button>
        </div>
    )
}

export default Affair


const ParentComponent = () => {

    const [value, setValue] = useState<string>('')

    const handleSetValue = (value: string) => {
        setValue(value)
    }

    const handleSetFiltersData = (data: any) => {}

    return (
        <div>
            <Header value={value}/>
            <FiltersBlock onClick={handleSetFiltersData}/>
            <Content value={value}
                     onChange={handleSetValue}
            />
        </div>
    )
}


type Props1 = {
    value: string
}

const Header: FC<Props1> = ({value}) => {
    return (
        <div>
            {value}
        </div>
    )
}
type Props3 = {
  onClick: (data: any) => void
}

const FiltersBlock: FC<Props3> = ({onClick}) => {

   const [data, setData] = useState({
       value1: '',
       value2: '',
       value3: '',
       value4: '',
   })

    const handleClcik = () => {
     onClick(data)
    }

    return (
        <div>
            <input type="text"/>
            <input type="text"/>
            <input type="text"/>
            <input type="text"/>
            <select/>
            <button onClick={handleClcik}>addd</button>
        </div>
    )
}


type Props2 = {
    value: string
    onChange: (value: string ) => void
}


const Content: FC<Props2> = ({value, onChange}) => {

   const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
       onChange(e.currentTarget.value)
   }


    return (
        <div>
            I m content
            <input type="text" value={value} onChange={handleChange}/>
            <button>add</button>
        </div>
    )
}
