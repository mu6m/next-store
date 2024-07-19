import { NextResponse, type NextRequest } from "next/server";
import { cookies } from "next/headers";
import { verifyAccessToken } from "./lib/jwt";
export async function middleware(request: NextRequest) {
	const cookie = cookies().get("user");
	const token = await verifyAccessToken(cookie?.value);
	if (token === false || !token || token.type != "ADMIN") {
		return NextResponse.redirect(new URL("/auth/admin/login", request.url));
	}
}

export const config = {
	matcher: ["/admin"],
};
