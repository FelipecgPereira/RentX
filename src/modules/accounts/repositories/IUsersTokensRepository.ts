import { ICreateUsersTokenDTO } from "../dtos/ICreateUsersTokenDTO";
import { UserTokens } from "../infra/typeorm/entities/UserTokens";

interface IUsersTokensRepository{

    create({expires_date,refresh_token, user_id}: ICreateUsersTokenDTO): Promise<UserTokens>
    

}

export{IUsersTokensRepository}