import { withIronSession } from "next-iron-session";

export function withSession(handler){
    return withIronSession(handler,{
        password:"somelong32characterspasswordforthesession",
        cookieName: "CookieCreatedByIronSessionForNextjsApp",
        cookieOptions: {
      secure: false,
        }
    })
}
