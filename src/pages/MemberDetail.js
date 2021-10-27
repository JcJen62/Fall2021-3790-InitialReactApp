import * as React from 'react'
import { useParams } from 'react-router-dom'
import { useCongressContext } from '../contexts/CongressContext'
import {
  Box,
  Card,
  CardMedia,
  CardHeader,
  CardContent,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography
} from '@mui/material'
import palpatinePic from '../components/Emperor-Palpatine.jpeg'

const MemberDetail = () => {
  const params = useParams()
  const memberData = useCongressContext()

  const member = memberData.allMembers.find(item => item.id === params.memberId)

  const handleImageLoadError = (e) => {
    e.target.onerror = null
    e.target.src = palpatinePic
  }

  console.log(member)

  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'center'
    }}>
      <Card sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }}>
      <CardMedia component='img' alt='Congress member' height='200'
      image={`https://www.govtrack.us/static/legislator-photos/${member.govtrack_id}-200px.jpeg`} onError={handleImageLoadError}/>
      <CardContent sx={{ p: 0 }}>
        <Typography color="success.dark" gutterBottom variant='subtitle2'>
          {member.first_name} {member.last_name}
        </Typography>
      </CardContent>
      </Card>
    <Card>
    <CardHeader title="Contact Details" />
    <Divider />
    <Table>
      <TableBody>
        <TableRow>
          <TableCell>
            <Typography
              color="textPrimary"
              variant="subtitle2"
            >
              Home Page
            </Typography>
          </TableCell>
          <TableCell>
            <Typography
              color="textSecondary"
              variant="body2"
            >
              {member.url}
            </Typography>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <Typography
              color="textPrimary"
              variant="subtitle2"
            >
              Phone
            </Typography>
          </TableCell>
          <TableCell>
            <Typography
              color="textSecondary"
              variant="body2"
            >
              {member.phone}
            </Typography>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <Typography
              color="textPrimary"
              variant="subtitle2"
            >
              Party
            </Typography>
          </TableCell>
          <TableCell>
            <Typography
              color="textSecondary"
              variant="body2"
            >
              {member.party}
            </Typography>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <Typography
              color="textPrimary"
              variant="subtitle2"
            >
              State/Region
            </Typography>
          </TableCell>
          <TableCell>
            <Typography
              color="textSecondary"
              variant="body2"
            >
              {member.state}
            </Typography>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <Typography
              color="textPrimary"
              variant="subtitle2"
            >
              Office
            </Typography>
          </TableCell>
          <TableCell>
            <Typography
              color="textSecondary"
              variant="body2"
            >
              {member.office}
            </Typography>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <Typography
              color="textPrimary"
              variant="subtitle2"
            >
              Leadership Role
            </Typography>
          </TableCell>
          <TableCell>
            <Typography
              color="textSecondary"
              variant="body2"
            >
              {member.leadership_role}
            </Typography>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
      </Card>
      </Box>
  )
}

export default MemberDetail