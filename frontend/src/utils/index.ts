export const formataCPF = (cpf: string) => {
  //retira os caracteres indesejados...
  cpf = cpf
    .replace(/\D/g, "")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1-$2")
    .replace(/(-\d{2})\d+?$/, "$1");
  return cpf;
};
