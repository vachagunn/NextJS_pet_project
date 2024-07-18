'use client';

export default function ErrorWrapper({error}: {error: Error}) {
    return <h1>Oppps! {error.message}</h1>
}