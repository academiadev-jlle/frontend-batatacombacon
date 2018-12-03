export class Pet {
    id?: number;
    nome: string;
    descricao: string;
    sexo: string;
    porte: string;
    especie: string;
    objetivo: string;
    localPet: string;
    fotos?: [string];
    dataPet: string;
    idUsuario: number;
}

export class PetPagination {
    content: [ Pet ];
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