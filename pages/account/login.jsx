import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { Link } from 'components';
import { Layout } from 'components/account';
import { userService, alertService } from 'services';
import './../../styles/Home.module.css'
import Image from 'next/image'


export default Login;

function Login() {
    const router = useRouter();

    // form validation rules 
    const validationSchema = Yup.object().shape({
        username: Yup.string().required('Username is required'),
        password: Yup.string().required('Password is required')
    });
    const formOptions = { resolver: yupResolver(validationSchema) };

    // get functions to build form with useForm() hook
    const { register, handleSubmit, formState } = useForm(formOptions);
    const { errors } = formState;

    function onSubmit({ username, password }) {
        return userService.login(username, password)
            .then(() => {
                // get return url from query parameters or default to '/'
                const returnUrl = router.query.returnUrl || '/';
                router.push(returnUrl);
            })
            .catch(alertService.error);
    }

    return (
        <Layout>
            
            <section className="vh-100" >

  <div className="container py-5 h-100">
    <div className="row d-flex align-items-center justify-content-center h-100">
    <h1 className="text-success title text-center ">  WELCOME AL AKHDAR BANK !</h1>
   
   

   
      <div className="col-md-8 col-lg-7 col-xl-6">
       
      </div>
      <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
        <form onSubmit={handleSubmit(onSubmit)}>
         
          <div className="form-outline mb-4">
          <label className="form-label" htmlFor="form1Example13">
           Username            </label>
            <input
              type="username"
              {...register('username')} className={`form-control ${errors.username ? 'is-invalid' : ''}`}
              
            />
         <div className="invalid-feedback">{errors.username?.message}</div>

            
          </div>
          
          <div className="form-outline mb-4">
          <label className="form-label" htmlFor="form1Example23">
              Password
            </label>
            <input
              type="password"
              id="form1Example23"
              {...register('password')} className={`form-control ${errors.password ? 'is-invalid' : ''}`}
            />
            <div className="invalid-feedback">{errors.password?.message}</div>

            
          </div>
          <div className="d-flex justify-content-around align-items-center mb-4">
           
            <div className="form-check">
              
              
            </div>
            
          </div>
          
          <button type="submit" className="btn btn-success btn-lg btn-block" disabled={formState.isSubmitting}>
          {formState.isSubmitting && <span className="spinner-border spinner-border-sm mr-1"></span>}
              Login          </button>
          <div className="divider d-flex align-items-center my-4">
            <p className="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
            <Link href="/account/register" className="btn btn-link">Register</Link>
          </div>
          
        </form>
      </div>
    </div>
  </div>
</section>





            
        </Layout>
    );
}
