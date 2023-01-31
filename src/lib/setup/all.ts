import { setup as envSetup } from '@skyra/env-utilities';
import { setInvite, setRepository } from '@skyra/shared-http-pieces';

envSetup(new URL('../../../src/.env', import.meta.url));
setRepository('ring');
setInvite('368462408777203722', '0');

await import('#lib/setup/fastify');
await import('#lib/setup/logger');
await import('#lib/setup/prisma');

export async function setup() {
	// Load all routes
	await import('#api/routes/_load');
}
