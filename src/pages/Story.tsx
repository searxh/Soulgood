import React from 'react'
import { Soul } from '../lib/Characters'
import { Them } from '../lib/Dialogue'

export default function Story() {
    return (
        <div className="bg-black h-screen">
            <Soul state="neutral" />
            <Them content="hello" />
        </div>
    )
}
