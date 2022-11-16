import React from 'react'
import { BadgeContainer } from './style'

export function BadgeProject({ status }) {
  return (
      <BadgeContainer 
        bg={status.color?.button_color} 
        color={status.color?.text_color} 
      >
        {status.name}
      </BadgeContainer>
  )
}
