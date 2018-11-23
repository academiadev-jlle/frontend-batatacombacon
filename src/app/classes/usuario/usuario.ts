export interface Usuario {
    email: string;
    id?: number;
    nome: string;
    senha: string;
    confirmSenha?: string;
}

export interface UsuarioAPI {
    email: string;
    nome: string;
    senha: string;
}

export const APIUsuarioFactory = function(usuario: Usuario): UsuarioAPI {
    return {
        nome: usuario.nome,
        email: usuario.email,
        senha: usuario.senha
    };
};
