import '@testing-library/jest-dom'; 


jest.mock('next/image', () => ({
    __esModule: true,
    default: (props) => {
      const { src, alt } = props;
      // eslint-disable-next-line @next/next/no-img-element
      return <img src={src} alt={alt} />;
    },
  }));