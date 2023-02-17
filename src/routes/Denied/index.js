import { Link } from "react-router-dom";
import {Container} from './style'

export const AccessDenied = () => (
    <Container>
      <h1>Acesso Negado!</h1>
      <p>Você não tem permissão para acessar esta página.</p>
      <Link to="/home" className="link">Voltar para a página inicial</Link>
    </Container>
  );