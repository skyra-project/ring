import { setup as envSetup } from '@skyra/env-utilities';
import { setRepository } from '@skyra/shared-http-pieces';

envSetup(new URL('../../../src/.env', import.meta.url));
setRepository('ring');

import '#lib/setup/fastify';
import '#lib/setup/logger';
import '#lib/setup/prisma';

export async function setup() {
	// Load all routes
	await import('#api/routes/_load');
}
