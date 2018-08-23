import { serverUrl } from '../config';

export default {
  AUTHENTICATION_LOGIN: `${serverUrl}/api/auth/login/`,
  AUTHENTICATION_REGISTER: `${serverUrl}/api/register/`,
  TEAMS: `${serverUrl}/api/teams`,
  TEAMS_CREATE: `${serverUrl}/api/teams`,
  USER_AUTH: `${serverUrl}/api/auth/user`,
  TEAMS_ID: `${serverUrl}/api/teams/:id`,
  TEAMS_ID_PLAYERS: `${serverUrl}/api/teams/:id/players/`,
};
