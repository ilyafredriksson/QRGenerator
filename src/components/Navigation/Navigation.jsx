import{Link} from 'react-router-dom'
import s from './Navigation.module.css'


export const Navigation = () => {
  return (
    <nav style={{display:'flex',flexDirection:'column',gap:'10px',alignItems:'center',marginTop:'30px'}}>
      <Link to="/generate">Generate QR code</Link>
      <Link to="scan">Scan QR code</Link>
      <Link to="/scanHistory">Scaning History</Link>
      <Link to="/generateHistory">Generaitin History</Link>
    </nav>
  );
}