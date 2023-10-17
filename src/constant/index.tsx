export enum INPUT_ICON {
  ON = 'on',
  OFF = 'off',
  ARROW = 'arrow'
};

export const emailPattern = /^[A-Za-z0-9]*@([-.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/;
export const telNumberPattern = /^[0-9]{10,11}$/;

export const MAIN_PATH = () => '/';
export const AUTH_PATH = () => '/auth';
export const FILTER_PATH = () => '/Filter';
export const USER_PATH = (userEmail: string) => '/user/$(userEmail)';
export const FTFBOARD_PATH = () => '/FaceTofaceboard';
  export const FTFBOARD_WRITE_PATH = () => 'write';
  export const FTFBOARD_DETAIL_PATH = (BoardNumber: string | number) => 'detail/$(BoardNumber)';
  export const FTFBOARD_UPDATE_PATH = (BoardNumber: string | number) => 'update/$(BoardNumber)';
export const BOARD_PATH = () => '/board';
  export const BOARD_WRITE_PATH = () => 'write';
  export const BOARD_DETAIL_PATH = (BoardNumber: string | number) => 'detail/$(BoardNumber)';
  export const BOARD_UPDATE_PATH = (BoardNumber: string | number) => 'update/$(BoardNumber)';

