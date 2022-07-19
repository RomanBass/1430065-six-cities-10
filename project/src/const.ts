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
