import { IsBoolean, IsOptional, IsString } from "class-validator";

export class CreateTaskDto {
    @IsString()
    readonly name: string;

    @IsString()
    readonly description: string;

    @IsOptional()
    @IsBoolean()
    readonly completed: boolean;
}