import * as React from 'react'
import { useParams } from 'react-router-dom'
import { useCongressContext } from '../contexts/CongressContext'

const MemberDetail = () => {
  const params = useParams()
  const memberData = useCongressContext()

  const member = memberData.allMembers.find(item => item.id === params.memberId)

  console.log(member)

  return (
    <h1>Member Detail Page</h1>
  )
}

export default MemberDetail