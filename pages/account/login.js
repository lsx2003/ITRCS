import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import {useDispatch, useSelector} from 'react-redux';
import NextLink from 'next/link';
import { Layout } from 'components/account';
import { login } from 'slices/account/authSlice';
import { alertService } from 'services';

export default Login;

function Login() {
    const router = useRouter();
    const dispatch = useDispatch();
    const {user, error} = useSelector(({auth}) => ({
        user: auth.user,
        error: auth.error,
    }));
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
        dispatch(login({username,password}));
    }

    useEffect(() => {
        if(error) {
            alertService.error;
            return;
        }
        if(user) {
            router.push('/');
            try{
                localStorage.setItem('user',JSON.stringify(user));
            } catch(e) {
                console.log('localStorage is not working');
            }
        }
        
    },[user,error,router]);

    return (
        <Layout>
            <div className="card">
                <h4 className="card-header">Login</h4>
                <div className="card-body">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                            <label>Username</label>
                            <input name="username" type="text" {...register('username')} className={`form-control ${errors.username ? 'is-invalid' : ''}`} />
                            <div className="invalid-feedback">{errors.username?.message}</div>
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input name="password" type="password" {...register('password')} className={`form-control ${errors.password ? 'is-invalid' : ''}`} />
                            <div className="invalid-feedback">{errors.password?.message}</div>
                        </div>
                        <button disabled={formState.isSubmitting} className="btn btn-primary">
                            {formState.isSubmitting && <span className="spinner-border spinner-border-sm mr-1"></span>}
                            Login
                        </button>
                        <NextLink href="/account/register" className="btn btn-link">Register</NextLink>
                    </form>
                </div>
            </div>
        </Layout>
    );
}
