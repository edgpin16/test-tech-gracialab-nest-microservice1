import { 
    IsBoolean,
    IsDateString, 
    IsEnum, 
    IsNotEmpty, 
    IsNumber, 
    IsOptional, 
    IsPositive, 
    IsString, 
    MinLength, 
    } 
from "class-validator";

enum typeReservations {
    cena = 'cena',
    almuerzo = 'almuerzo',
    onces = 'onces',
    cumpleanos = 'cumplea#os',
    ocasion_especial = 'ocasion especial'
};

export class CreateUsersReservationDto {

    @IsString()
    @MinLength(1)
    @IsNotEmpty()
    identificacion_document: string;

    @IsNumber()
    @IsPositive()
    @IsOptional()
    type_rol?: number;
    
    @IsString()
    @MinLength(1)
    @IsNotEmpty()
    name: string;

    @IsString()
    @MinLength(1)
    @IsNotEmpty()
    last_name: string;

    @IsString()
    @MinLength(1)
    @IsNotEmpty()
    type_document: string;

    @IsString()
    @MinLength(1)
    @IsNotEmpty()
    email: string;

    // @IsString()
    // @IsOptional()
    // password: string;

    @IsDateString()
    @IsNotEmpty()
    reservation_date : string;

    @IsEnum(typeReservations)
    @IsNotEmpty()
    reservation_type : string;

    @IsNumber()
    @IsPositive()
    @IsNotEmpty()
    people_quantity : number;

    @IsString()
    @MinLength(1)
    @IsNotEmpty()
    description: string;

    @IsString()
    @MinLength(1)
    @IsNotEmpty()
    observation: string;

    @IsBoolean()
    @IsOptional()
    is_confirm?: number;

}
