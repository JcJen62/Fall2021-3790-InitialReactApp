import * as Yup from 'yup';
import { Formik } from 'formik';
import {
  Box,
  Button,
  TextField,
} from '@mui/material';

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
  
const LoginForm = (props) => {

    const { closeHandler } = props

    return (
      <Box sx={{...style}}>
      <Formik
        initialValues={{
          email: 'foo@example.com',
          password: 'Password123!',
        }}
        validationSchema={Yup
          .object()
          .shape({
            email: Yup
              .string()
              .email('Must be a valid email')
              .max(255)
              .required('Email is required'),
            password: Yup
                .string()
                .min(8, 'Must be at least 8 characters')
              .max(255)
              .required('Password is required')
          })}
        onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
          try {
              setStatus({ success: true });
              setSubmitting(false);
          } catch (err) {
            console.error(err);
              setStatus({ success: false });
              setErrors({ submit: err.message });
              setSubmitting(false);
          } finally {
            closeHandler()
          }
        }}
      >
        {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
          <form
            noValidate
            onSubmit={handleSubmit}
          >
            <TextField
              error={Boolean(touched.email && errors.email)}
              fullWidth
              helperText={touched.email && errors.email}
              label="Email Address"
              margin="normal"
              name="email"
              onBlur={handleBlur}
              onChange={handleChange}
              type="email"
              value={values.email}
              variant="outlined"
            />
            <TextField
              error={Boolean(touched.password && errors.password)}
              fullWidth
              helperText={touched.password && errors.password}
              label="Password"
              margin="normal"
              name="password"
              onBlur={handleBlur}
              onChange={handleChange}
              type="password"
              value={values.password}
              variant="outlined"
            />
{/*             {errors.submit && (
              <Box sx={{ mt: 3 }}>
                <FormHelperText error>
                  {errors.submit}
                </FormHelperText>
              </Box>
            )} */}
            <Box sx={{ mt: 2 }}>
              <Button
                color="primary"
                disabled={isSubmitting}
                fullWidth
                size="large"
                type="submit"
                variant="contained"
              >
                Log In
              </Button>
            </Box>
{/*             <Box sx={{ mt: 2 }}>
              <Alert severity="info">
                <div>
                  You can use
                  {' '}
                  <b>foo@example.com</b>
                  {' '}
                  and password
                  {' '}
                  <b>Password123!</b>
                </div>
              </Alert>
            </Box> */}
          </form>
        )}
      </Formik>
      </Box>
    )
}

export default LoginForm