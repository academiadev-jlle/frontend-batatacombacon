import { Especie } from "../especie/especies";
import { Sexo } from "../sexo/sexo";
import { Porte } from "../porte/porte";
import { Objetivo } from "../objetivo/objetivo";

export interface Pet {
    id?: number;
    nome: string;
    descricao: string;
    sexo: Sexo['sexo'];
    porte: Porte['porte'];
    especie: Especie['especie'];
    objetivo: Objetivo['objetivo'];
    localPet: string;
    fotos: Array<string>;
    dataPet: string;
    idUsuario: number;
}

export interface PetAPI {
    descricao: string;
    especie: Especie['especie'];
    fotos: Array<string>;
    idUsuario: number;
    localPet: string;
    nome: string;
    objetivo: Objetivo['objetivo'];
    porte: Porte['porte'];
    sexo: Sexo['sexo'];
}

export class PetPagination {
    content: Array<Pet>;
    pageable:{
        sort: {
            sorted: boolean,
            unsorted: boolean,
            empty: boolean
        },
        pageSize: number,
        pageNumber: number,
        offset: number,
        unpaged: boolean,
        paged: true
    };
    last: boolean;
    totalPages: number;
    totalElements: number;
    first: boolean;
    sort: {
        sorted: boolean,
        unsorted: boolean,
        empty: boolean
    };
    numberOfElements: number;
    size: number;
    empty: boolean;
    
}

export const APIPetFactory = function(pet: Pet): PetAPI {
    return {
        descricao: pet.descricao,
        especie: pet.especie,
        fotos: pet.fotos,
        idUsuario: pet.idUsuario,
        localPet: pet.localPet,
        nome: pet.nome,
        objetivo: pet.objetivo,
        porte: pet.porte,
        sexo: pet.sexo
    };
};