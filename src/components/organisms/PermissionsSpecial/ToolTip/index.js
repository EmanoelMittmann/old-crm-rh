export function modulesDescription(id) {
  switch (id) {
    case 1:
      return { first: "Criar Profissionais", second: "Editar Profissionais" };
    case 2:
      return { first: "Criar Projetos", second: "Editar Projetos"};
    case 3:
      return { first: "Aprovação de Horas" };
    case 4:
      return { first: "Lançamento de notas fiscais" };
    case 5:
      return { first: "Exportar Pagamentos" };
    case 6:
      return { first: "Criar Ordem de serviço", second: "Gerar Ordem de serviço" };
    case 7:
      return { first: "Criar Cargos, Status, tipos de projetos", second: "Editar Cargos, Status, tipos de projetos" };
    case 8:
      return { first: "Criar empresas", second: "Editar empresas" };
    case 9:
      return { first: "Lançamento de Horas de profissionais"};
    case 10:
      return { first: "Lançamento de notas fiscais de profissionais"};
    default:
      break;
  }
}
