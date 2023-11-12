// - Returned – тип возвращаемого санком значения
// - ThunkArg – тип аргумента санка
// createAsyncThunk = <Returned, ThunkArg>

import { createAsyncThunk } from "@reduxjs/toolkit";


// export const fetchOauth = createAsyncThunk('oauth/authorize', async () => {
//     const url = process.env.REACT_APP_OAUTH_AUTHORIZE_URL + '?redirect_uri=' + getApiPathUrl('oauth/callback');
//     window.location = url as unknown as Location;
// });


export const fetchOauth = createAsyncThunk('oauth/authorize', async () => {
    const url = 'https://science.iu5.bmstu.ru/sso/authorize' + '?response_type=token' + '&redirect_uri=http://localhost:3000';
    window.location = url as unknown as Location;
});