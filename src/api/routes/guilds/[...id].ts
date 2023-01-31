import { container } from '@sapphire/pieces';
import { isNullish, isNullishOrEmpty } from '@sapphire/utilities';

container.server.route({
	url: '/guilds/:id',
	method: 'GET',
	handler: async (request, reply) => {
		if (isNullishOrEmpty(request.headers.authorization)) {
			return reply.code(401).send({ success: false, message: 'Missing authorization' });
		}

		const properties = getProperties(request.headers.authorization);
		if (!properties) {
			return reply.code(403).send({ success: false, message: 'Missing access to this resource' });
		}

		if (typeof request.params !== 'object' || isNullish(request.params) || !('id' in request.params)) {
			return reply.code(400).send({ success: false, message: 'Missing parameters' });
		}

		let id: bigint;
		try {
			id = BigInt(request.params.id as string);
		} catch {
			return reply.code(400).send({ success: false, message: 'Invalid Guild ID' });
		}

		const data = await container.prisma.guild.findFirst({ where: { id }, select: properties });
		return reply.code(200).send(data);
	}
});

function getProperties(token: string) {
	switch (token) {
		case process.env.INTERNAL_API_ACRYSEL_TOKEN:
			return { maximumYouTubeSubscriptions: true, maximumTwitchSubscriptions: true };
		case process.env.INTERNAL_API_SKYRA_TOKEN:
			return { maximumFilteredWords: true, maximumFilteredReactions: true, maximumAllowedLinks: true, maximumAllowedInviteCodes: true };
		case process.env.INTERNAL_API_TERYL_TOKEN:
			return { maximumTagCount: true };
		default:
			return null;
	}
}
