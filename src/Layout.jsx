import { QrCodeGenerator } from "./components/Generate/QrCodeGenerator";
import { QrCodeScanner } from "./components/Scan/QrCodeScanner";
import { Navigation } from "./components/Navigation/Navigation";
import { Routes, Route, Navigate } from "react-router-dom";
import { GenerateHistory } from "./components/Scan/GenerateHistory";
import { ScanHistory } from "./components/Scan/ScanHistory";

const Layout = () => {
  return (
    <div>
      <Navigation />

      <Routes>
        <Route path="/" element={<Navigate to="/generate" replace />} />
        <Route path="/generate" element={<QrCodeGenerator />} />
        <Route path="/scan" element={<QrCodeScanner />} />
        <Route path="/scanHistory" element={<ScanHistory />} />
        <Route path="/generateHistory" element={<GenerateHistory />} />
        <Route path="*" element={<h2>Page not found</h2>} />
      </Routes>
    </div>
  );
};

export { Layout };
