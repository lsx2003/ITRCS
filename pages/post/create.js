import styles from '../../styles/post/PostWrite.module.css';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/router';
import { createPost } from '../../slices/post/postSlice';

export default function PostCreate(){
    const validationSchema = Yup.object().shape({
        title: Yup.string()
            .required('제목을 입력해주세요.'),
        content: Yup.string()
            .required('내용을 입력해주세요.'),
    });
    const formOptions = { resolver: yupResolver(validationSchema) };
    const router = useRouter()

    // get functions to build form with useForm() hook
    const { register, handleSubmit, formState } = useForm(formOptions);
    const { errors } = formState;
    
    function onSubmit({ title, content }) {
        dispatch(createPost({title,content}));
    }

    return(
        <div className={styles.container}>
            <div className={styles.banner}>
                <h1>사례 공유 - 글쓰기</h1>
            </div>
            <div className={styles.wirteContainer}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <label for="title">제목</label>
                        <input name="title" id="title" type="text" {...register('title')} className={`form-control ${errors.title ? 'is-invalid' : ''}`} />
                        <div className="invalid-feedback">{errors.title?.message}</div>
                    </div>
                    <div className="form-group">
                        <label for="content">내용</label>
                        <textarea name="content" id="content" rows="15" {...register('content')} className={`form-control ${errors.content ? 'is-invalid' : ''}`} />
                        <div className="invalid-feedback">{errors.content?.message}</div>
                    </div>
                    <div className={styles.btnContainer}>
                        <button disabled={formState.isSubmitting} className={`btn btn-primary ${styles.submitBtn}`}>
                            {formState.isSubmitting && <span className="spinner-border spinner-border-sm mr-1"></span>}
                            Write
                        </button>
                        <button className={`btn btn-link ${styles.submitBtn}`} onClick={() => router.back()}>Cancel</button>
                    </div>
                </form>
            </div>
            <div className={styles.btnWrapper}>
                
            </div>
        </div>  
    )
}