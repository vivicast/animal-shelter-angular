import {environment} from '@env';

export class EndPoints {
  static ADOPTERS = environment.REST_ANIMAL_SHELTER + '/adopters';
  static COLONIES = environment.REST_ANIMAL_SHELTER + '/colonies';
  static CATS = environment.REST_ANIMAL_SHELTER + '/cats';
}
