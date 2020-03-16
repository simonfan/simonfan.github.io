import React from 'react'
import './RichText.scss'

interface RichTextProps {
  children: React.ReactNode | [React.ReactNode]
}

export const RichText = ({ children }: RichTextProps) => (
  <div className='RichText'>
    {children}
  </div>
)
