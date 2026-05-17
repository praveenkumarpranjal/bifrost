import { createFileRoute } from "@tanstack/react-router";
import MCPSessionsOAuthCallbackPage from "./page";

function RouteComponent() {
	// Public-by-policy — this is the landing page after the upstream OAuth
	// provider redirects the browser through /api/oauth/callback. The backend
	// has already done the token exchange; this page just closes the popup
	// (for admin-test OAuth) or renders a fallback if there's no opener.
	return <MCPSessionsOAuthCallbackPage />;
}

export const Route = createFileRoute("/workspace/mcp-sessions/oauth-callback")({
	component: RouteComponent,
});
