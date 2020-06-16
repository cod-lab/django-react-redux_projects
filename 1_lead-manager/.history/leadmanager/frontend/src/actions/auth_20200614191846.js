import axios from "axios";                                              // importing 'axios' to make requests

import { USER_LOADING, USER_LOADED, AUTH_ERROR } from './types';

import { returnErrors } from './messages';                              // using this to return any err generated here
