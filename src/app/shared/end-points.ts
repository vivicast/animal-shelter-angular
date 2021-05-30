import {environment} from '@env';

export class EndPoints {
  static ADOPTERS = environment.REST_ANIMAL_SHELTER_ADOPTER + '/adopters';
  static COLONIES = environment.REST_ANIMAL_SHELTER_COLONY + '/colonies';
  static CATS = environment.REST_ANIMAL_SHELTER_CAT + '/cats';
}
