import React, { useState } from 'react'
import { useIdentityAuthContext } from '../../contexts/IdentityAuthContext'
import { useLocation, useHistory } from 'react-router-dom'
import { Box, Button, TextField } from '@mui/material'
import { Formik } from 'formik'
import * as Yup from 'yup'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}

const ConfirmUser = () => {
  const [token, setToken] = useState(null)
  const { confirm } = useIdentityAuthContext()
  const location = useLocation()
  const history = useHistory()
  const handleClose = () => history.push('/welcome')
  console.log(location.hash.includes('confirmation_token'))

  React.useEffect(() => {
    const startIndex = location.hash.indexOf('=')
    setToken(location.hash.slice(startIndex + 1))
    try {
      confirm(token)
    } catch (err) {
      console.log(err)
    }
  }, [confirm, token, location.hash])

  return (
    <Box sx={style}>
      <Formik
        initialValues={{
          token: '',
        }}
        validationSchema={Yup.object().shape({
          token: Yup.string().max(255).required('Token is required'),
        })}
        onSubmit={(value, { setErrors, setStatus, setSubmitting }) => {
          try {
            setStatus({ success: true })
            setSubmitting(false)
            confirm(token)
            handleClose()
          } catch (err) {
            console.error(err)
            setStatus({ success: false })
            setErrors({ submit: err.message })
            setSubmitting(false)
          }
        }}
      >
        {({
          errors,
          values,
          handleSubmit,
          handleBlur,
          handleChange,
          isSubmitting,
          touched,
        }) => (
          <form noValidate onSubmit={handleSubmit}>
            <TextField
              error={Boolean(touched.token && errors.token)}
              fullWidth
              helperText={touched.token && errors.token}
              label='Confirmation Token'
              margin='normal'
              name='token'
              onBlur={handleBlur}
              onChange={handleChange}
              type='text'
              variant='outlined'
              value={values.token}
            />
            <Button
              color='primary'
              disabled={isSubmitting}
              fullWidth
              size='large'
              variant='contained'
              type='submit'
            >
              Confirm Token
            </Button>
          </form>
        )}
      </Formik>
    </Box>
  )
}

export default ConfirmUser
