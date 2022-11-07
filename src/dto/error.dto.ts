import { ApiProperty } from "@nestjs/swagger";
import { Expose} from 'class-transformer'

export class ApiErrorDto {
  @Expose()
  @ApiProperty()
  status: number;

  @Expose()
  @ApiProperty()
  error: string;

  @Expose()
  @ApiProperty()
  message: string;
}