import {ButtonStyles as Styles} from '../../styles';
const Button = ({...props}) => {
  return (
    <button {...props} className={Styles.button}>
      {props.children}
    </button>
  );
};

export default Button;
