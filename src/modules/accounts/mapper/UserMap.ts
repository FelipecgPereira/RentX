import { User } from '@modules/accounts/infra/typeorm/entities/Users';
import { classToClass } from 'class-transformer';
import { IUserResponseDTO } from '../dtos/IUserReponseDTO';
class UserMap{

    static toDTO({email, name, id, avatar,driver_license,avatar_url}: User): IUserResponseDTO{

        const user = classToClass({
            email,
            name,
            id, 
            avatar,
            driver_license,
            avatar_url
        })
        return user
    }
}

export{UserMap}