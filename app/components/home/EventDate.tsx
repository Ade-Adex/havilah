'use client'

import React, { useEffect, useState } from 'react'

const EventDate = ({ date }: { date: string }) => {
  const [formattedDate, setFormattedDate] = useState<string | null>(null)

  useEffect(() => {
    setFormattedDate(
      new Date(date).toLocaleString('en-US', {
        weekday: 'short',
        month: 'short',
        day: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      })
    )
  }, [date])

  if (!formattedDate) return null // avoids mismatch

  return <>{formattedDate}</>
}

export default EventDate
