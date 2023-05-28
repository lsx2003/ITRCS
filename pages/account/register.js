import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { Fragment, useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux';
import NextLink from 'next/link';
import { Layout } from 'components/account';
import { registerUser } from 'slices/account/authSlice';
import { alertService } from 'services';

export default Register;

function Register() {
    const router = useRouter();
    const dispatch = useDispatch();

    const {user, error} = useSelector(({auth}) => ({
        user: auth.user,
        error: auth.error,
    }));
    // form validation rules 
    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .required('이메일을 입력해주세요.'),
        username: Yup.string()
            .required('이름을 입력해주세요.'),
        password: Yup.string()
            .required('패스워드를 입력해주세요')
            .min(6, '패스워드는 반드시 6자 이상이여야 합니다.'),
        passwordConfirm: Yup.string().oneOf([Yup.ref('password'), null],
            '비밀번호가 일치하지 않습니다.')
    });
    const formOptions = { resolver: yupResolver(validationSchema) };

    // get functions to build form with useForm() hook
    const { register, handleSubmit, formState } = useForm(formOptions);
    const { errors } = formState;

    function onSubmit(user) {
        dispatch(registerUser(user));
    }
    useEffect(() => {
        if(error) {
            alertService.error(error);
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
                <h4 className="card-header">회원가입</h4>
                <div className="card-body">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                            <label>이메일</label>
                            <input name="email" type="text" {...register('email')} className={`form-control ${errors.email ? 'is-invalid' : ''}`} />
                            <div className="invalid-feedback">{errors.email?.message}</div>
                        </div>
                        <div className="form-group">
                            <label>이름</label>
                            <input name="username" type="text" {...register('username')} className={`form-control ${errors.username ? 'is-invalid' : ''}`} />
                            <div className="invalid-feedback">{errors.username?.message}</div>
                        </div>
                        <div className="form-group">
                            <label>비밀번호</label>
                            <input name="password" type="password" {...register('password')} className={`form-control ${errors.password ? 'is-invalid' : ''}`} />
                            <div className="invalid-feedback">{errors.password?.message}</div>
                        </div>
                        <div className="form-group">
                            <label>비밀번호 확인</label>
                            <input name="passwordConfirm" type="password" {...register('passwordConfirm')} className={`form-control ${errors.passwordConfirm ? 'is-invalid' : ''}`} />
                            <div className="invalid-feedback">{errors.passwordConfirm?.message}</div>
                        </div>
                        <button disabled={formState.isSubmitting} className="btn btn-primary">
                            {formState.isSubmitting && <span className="spinner-border spinner-border-sm mr-1"></span>}
                            확인
                        </button>
                        <NextLink href="/account/login" className="btn btn-link">취소</NextLink>
                    </form>
                </div>
            </div>
        </Layout>
    );
}
