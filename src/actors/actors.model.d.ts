export interface actorCreateDTO {
    name: string;
    birthDate?: Date;
    image?: File;
    imageUrl?: string;
    biography?: string;
}


export interface movieActorsDTO {
    id: number;
    name: string;
    character: string;
    photo: string;
}