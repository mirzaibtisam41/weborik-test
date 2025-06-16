import {InputStyles as Styles} from '../../styles';

const Input = ({error, ...props}) => {
  return (
    <div className={Styles.inputWrapper}>
      <input
        {...props}
        className={`${Styles.input} ${error ? Styles.isError : ''}`}
      />
      {error && <p className={Styles.errorText}>{error}</p>}
    </div>
  );
};

export default Input;
