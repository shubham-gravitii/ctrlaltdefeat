'use client'

import { useFormStatus } from 'react-dom'
export default function DeleteButton({ disable, className, onClick }: { onClick: Function, disable: boolean, className?: string }) {
    const { pending } = useFormStatus()
    return (
        <button
            onClick={() => onClick(true)}
            className={className + ' disabled:opacity-40 bg-red-500 hover:bg-red-400 border-none rounded-md h-14 mt-6 text-white'}
            disabled={pending || disable}
        >
            {pending ? "Deleting..." : "Delete"}
        </button>
    )
}