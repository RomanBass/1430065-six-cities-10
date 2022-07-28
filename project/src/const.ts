export enum AppRoute {
  LoginPath = '/login',
  FavoritesPath = '/favorites',
  RootPath = '/',
  WrongPath = '*',
  OfferPath = 'offer/:id'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN'
}

export const STARS_RATING: {
  starsNumber: number, description: string}[] = [
    {starsNumber: 5, description: 'perfect'},
    {starsNumber: 4, description: 'good'},
    {starsNumber: 3, description: 'not bad'},
    {starsNumber: 2, description: 'baddly'},
    {starsNumber: 1, description: 'terribly'},
  ];
