import { NextResponse, type NextRequest } from "next/server";
import { cookies } from "next/headers";
import { verifyAccessToken } from "./lib/jwt";
export async function middleware(request: NextRequest) {
	const admin = cookies().get("admin");
	const token = await verifyAccessToken(admin?.value);
	if (token === false || !token || token.type != "ADMIN") {
		return NextResponse.redirect(new URL("/admin/login", request.url));
	}
}

export const config = {
	matcher: ["/admin((?!/auth/create|/auth/login).*)"],
};
