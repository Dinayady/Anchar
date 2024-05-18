import { Footer } from '../footer/Footer';
import { Navigation } from '../navigation/Navigation';

type Props = {
  children: React.ReactNode;
};

export const Layout = ({ children }: Props) => {
  return (
    <>
      <Navigation />
      <div className='container' style={{ height: '100%', marginTop: '20px' }}>
        {children}
      </div>
      <Footer />
    </>
  );
};
