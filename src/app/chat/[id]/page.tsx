"use client"
import React from 'react'
import { useParams } from 'next/navigation'
import Chat from '@/components/component/chat-bot'

const Component = () => {
    const { id } = useParams()
    return (
        <>
        <Chat chatID={id as string}/>
        </>
    )
}

export default Component