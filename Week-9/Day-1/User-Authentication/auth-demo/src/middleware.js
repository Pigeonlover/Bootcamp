//

// All routes are public by default
// We are going to specify what routes are protected

import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
// Add the protected routes
// (.*) this will make sure nested routes in "/posts" are also matched
const isProtected = createRouteMatcher(["/posts(.*)", "/supersecretroute(.*)"]);

// This is where the middleware logic will go
export default clerkMiddleware(async (auth, req) => {
  // If the req is made in a protected route, activate auth to protect it with our middleware
  if (isProtected(req)) await auth.protect();
});

export const config = {
  matcher: [
    // This is regex: we use regex to find patterns and match them
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
