import PropTypes from 'prop-types';
import { Card, CardContent } from '@material-ui/core'
import { Typography } from '@material-ui/core'

const SenatorCard = (props) => {
    const {
      firstName,
      lastName,
      id
    } = props
    return (
      <Card key={id} sx={{color: '#ff00ff'}}>
        <CardContent >
          <Typography variant="h5" component="div">
            {firstName} {lastName}
          </Typography>
        </CardContent>
      </Card>
    )
}

SenatorCard.propTypes = {
firstName: PropTypes.string,
lastName: PropTypes.string,
id: PropTypes.string
};

export default SenatorCard
