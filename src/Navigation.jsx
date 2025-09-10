import{Link} from 'react-router-dom'



export const Navigation = () => {
  return (
    <nav>
      <Link to="/generate">Generate QR code</Link>
      <Link to="scan">Scan QR code</Link>
      <Link to="/">Scaning History</Link>
      <Link to="/">Generaitin History</Link>
    </nav>
  );
}