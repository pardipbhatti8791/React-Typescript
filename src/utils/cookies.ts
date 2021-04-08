import Cookies from 'universal-cookie';

const cookies = new Cookies();

export interface CookieKeyInterface {
    key: string
}

export interface SetCookieKeyInterface {
    key: string
    value: any
}



/**
 * @param c
 */
export const getCookie = (c: CookieKeyInterface) => {
    return cookies.get(c.key)
}

/**
 * @param c
 */
export const setCookie = (c: SetCookieKeyInterface) => {
    return cookies.set(c.key, c.value)
}
