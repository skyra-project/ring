import type { IntegerString } from '@skyra/env-utilities';

declare module '@skyra/env-utilities' {
	interface Env {
		CLIENT_VERSION: string;

		DISCORD_CLIENT_ID: string;
		DISCORD_TOKEN: string;
		DISCORD_PUBLIC_KEY: string;

		HTTP_ADDRESS: string;
		HTTP_PORT: IntegerString;

		REGISTRY_GUILD_ID: string;

		API_ADDRESS: string;
		API_PORT: IntegerString;

		INTERNAL_API_ACRYSEL_TOKEN: string;
		INTERNAL_API_SKYRA_TOKEN: string;
		INTERNAL_API_TERYL_TOKEN: string;
	}
}
