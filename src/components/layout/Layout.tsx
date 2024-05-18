import { Footer } from '../footer/Footer';
import { Navigation } from '../navigation/Navigation';

type Props = {
  children: React.ReactNode;
};

export const Layout = ({ children }: Props) => {
  return (
    <>
      <Navigation />
      <div className='container'>{children}</div>
      <Footer />
    </>
  );
};
