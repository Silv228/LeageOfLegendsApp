'use client'
import React from 'react'
import styles from './Card.module.css'
import { CardProps } from './Card.props'

const Card = ({ children, className}: CardProps) => {

    return (
        <div className={`${styles.card} ${className}`}>
            {children}
        </div>
    )
}
export default Card