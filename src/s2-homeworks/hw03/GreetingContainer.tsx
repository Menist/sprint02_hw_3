import React, {ChangeEvent, Dispatch, KeyboardEvent, SetStateAction, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from './HW3'

type GreetingContainerPropsType = {
    users: Array<UserType>
    addUserCallback: (name: string) => void
}

export const pureAddUser = (name: string, setName: Dispatch<SetStateAction<string>>, addUserCallback: (name: string) => void, setError: (error: string) => void) => {
    if (name.trim() === '') {
        setError('Ошибка! Введите имя!')
    } else {
        addUserCallback(name)
        setName('')
    }
}

export const pureOnBlur = (name: string, setError: (error: string) => void) => { // если имя пустое - показать ошибку
    if (name.trim() === '') {
        setError('Ошибка! Введите имя!')
    }
}

export const pureOnEnter = (e: KeyboardEvent<HTMLInputElement>, addUser: () => void) => { // если нажата кнопка Enter - добавить
    if (e.key === 'Enter') {
        addUser()
    }
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {
// более современный и удобный для про :)
const GreetingContainer: React.FC<GreetingContainerPropsType> =
    ({
         addUserCallback,
         users,
     }) => {
        // деструктуризация пропсов
        const [name, setName] = useState<string>('') // need to fix any
        const [error, setError] = useState<string>('') // need to fix any
        const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any
            setName(e.currentTarget.value) // need to fix
            error && setError('')
        }

        const addUser = () => {
            pureAddUser(name, setName, addUserCallback, setError)
        }

        const onBlur = () => {
            pureOnBlur(name, setError)
        }

        const onEnter = (e: KeyboardEvent<HTMLInputElement>) => {
            pureOnEnter(e, addUser)
        }

        const totalUsers = users.length // need to fix
        const lastUserName = users[users.length - 1]?.name ?? ''

        return (
            <Greeting
                name={name}
                setNameCallback={setNameCallback}
                addUser={addUser}
                onBlur={onBlur}
                onEnter={onEnter}
                error={error}
                totalUsers={totalUsers}
                lastUserName={lastUserName}
            />
        )
    }

export default GreetingContainer
