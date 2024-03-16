import css from './Loader.module.css';
import { TailSpin } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <div>
      <TailSpin
        visible={true}
        height="100"
        width="100"
        color="#4fa94d"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass={css.spiner}
      />
    </div>
  );
};
