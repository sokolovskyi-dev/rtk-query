import { ClipLoader } from 'react-spinners';

export default function Spinner({ size = 40 }) {
  return <ClipLoader color="#36d7b7" size={size} aria-label="Loading Spinner" />;
}
