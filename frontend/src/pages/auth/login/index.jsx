import {useState} from 'react';
import {Input, Button} from '../../../components';
import {LoginPageStyles as Styles} from '../../../styles';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {LoginFormSchema as schema} from '../../../utils/schemas';
import {toast} from 'react-hot-toast';
import axios from 'axios';

const Login = () => {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_URL}/auth/login`,
        data
      );
      toast.success(response.data?.message || 'Login successful');
    } catch (error) {
      const message =
        error?.response?.data?.message || error.message || 'Login failed';
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={Styles.container}>
      <div className={Styles.login_box}>
        <h2>Authorization</h2>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <Input
            type="email"
            placeholder="Email"
            {...register('email')}
            error={errors.email?.message}
          />
          <Input
            type="password"
            placeholder="Password"
            {...register('password')}
            error={errors.password?.message}
          />
          <Button type="submit" disabled={loading}>
            {loading ? 'Signing in...' : 'SIGN IN'}
          </Button>
        </form>

        <p className={Styles.signup_text}>
          Don’t have an account? <a href="#">Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
