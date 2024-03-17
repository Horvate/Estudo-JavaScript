class usuario{
  constructor(login,senha){
    this.login = login;
    this.senha = senha;
  }
  validarLogin(){
    return this.login.toString().includes('@') && 
    this.login.toString().includes('.')
    ? 'Login valido'
    : 'login invalido';
  }
}
class Administrador extends usuario{
  constructor (login,senha,resumoProfussionar){
    super(login,senha);
    this.resumoProfissional = resumoProfussionar;
  }
}

const usuario1 = new usuario('edu@gmail.com.br', 'edu1700');
  console.log(usuario1.login, usuario1.validarLogin());

const usuario2 = new usuario('jorge', '2200',);
  console.log(usuario2.login, usuario2.validarLogin());

const administrador1 = new Administrador('tavares', '0044', 'Resumo profissional');
  console.log(administrador1.login, administrador1.validarLogin());