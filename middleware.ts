import { withSSRContext } from "aws-amplify/lib-esm/withSSRContext";
import { NextMiddleware, NextResponse } from "next/server";

const redirecter: NextMiddleware = (req) => {
  const url = req.nextUrl.clone();
  url.pathname = "/login";
  url.searchParams.set(
    "callbackUrl",
    req.nextUrl.pathname + req.nextUrl.search
  );
  return NextResponse.redirect(url);
};

const adminOnlyRoutes = ["/admin"];

export const middleware: NextMiddleware = async (req, evt) => {
  const { Auth } = withSSRContext({ req });

  let data;
  let user;
  try {
    user = await Auth.currentAuthenticatedUser();
    console.log("user is authenticated");
    console.log(user);
    // admin routes requires admin group
    if (
      adminOnlyRoutes.some((route) => req.nextUrl.pathname.startsWith(route))
    ) {
      if (!user) return redirecter(req, evt);
      const groups = user["cognito:groups"] as string[];
      if (!groups?.includes("Admins")) {
        console.warn(`User is not in Admins group`);
        return redirecter(req, evt);
      }
    }
  } catch (err) {
    console.log("error: no authenticated user");
    return redirecter(req, evt);
  }
};

export const config = {
  matcher: ["/loggedin/:path*"],
};
