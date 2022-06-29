import "../styles/PageLayout.css";

import { useNavigate } from "react-router-dom";

export default function PageLayout({ children}) {
  const navigate = useNavigate();

  return (
    <main className="page-layout">

      {children}
    </main>
  );
}
