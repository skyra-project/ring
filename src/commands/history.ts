import { EmbedBuilder } from '@discordjs/builders';
import { Command, RegisterCommand } from '@skyra/http-framework';
import { resolveKey, type TypedT } from '@skyra/http-framework-i18n';

@RegisterCommand((builder) =>
	builder
		.setName('history')
		.setDescription("Get a random bit of information about a character's backstory")
		.addStringOption((builder) =>
			builder
				.setName('character')
				.setDescription('The character to get information about')
				.setRequired(true)
				.setChoices(
					{ name: Character.Nova, value: Character.Nova },
					{ name: Character.Acrysel, value: Character.Acrysel },
					{ name: Character.Aelia, value: Character.Aelia },
					{ name: Character.Alestra, value: Character.Alestra },
					{ name: Character.Artiel, value: Character.Artiel },
					{ name: Character.Crysrel, value: Character.Crysrel },
					{ name: Character.Evlyn, value: Character.Evlyn },
					{ name: Character.Iriss, value: Character.Iriss },
					{ name: Character.Nayre, value: Character.Nayre },
					{ name: Character.Nekokai, value: Character.Nekokai },
					{ name: Character.Ring, value: Character.Ring },
					{ name: Character.Skyra, value: Character.Skyra },
					{ name: Character.Teryl, value: Character.Teryl }
				)
		)
)
export class UserCommand extends Command {
	public override chatInputRun(interaction: Command.ChatInputInteraction, options: Options) {
		const lines = resolveKey(interaction, `commands/history:information${options.character}` as TypedT<string[]>);
		const embed = new EmbedBuilder()
			.setTitle(options.character)
			.setColor(Colors[options.character])
			.setDescription(lines[Math.floor(Math.random() * lines.length)]);
		return interaction.reply({ embeds: [embed.toJSON()] });
	}
}

interface Options {
	character: Character;
}

const enum Character {
	Nova = 'Nova',
	Acrysel = 'Acrysel',
	Aelia = 'Aelia',
	Alestra = 'Alestra',
	Artiel = 'Artiel',
	Crysrel = 'Crysrel',
	Evlyn = 'Evlyn',
	Iriss = 'Iriss',
	Nayre = 'Nayre',
	Nekokai = 'Nekokai',
	Ring = 'Ring',
	Skyra = 'Skyra',
	Teryl = 'Teryl'
}

const Colors = {
	[Character.Nova]: 0x4caf50,
	[Character.Acrysel]: 0xa5ef7d,
	[Character.Aelia]: 0xff63d5,
	[Character.Alestra]: 0x7ec7ff,
	[Character.Artiel]: 0xebb971,
	[Character.Crysrel]: 0xffc107,
	[Character.Evlyn]: 0xa1c5e8,
	[Character.Iriss]: 0xddbd96,
	[Character.Nayre]: 0xf16a6a,
	[Character.Nekokai]: 0xa185e5,
	[Character.Ring]: 0xe3ca9e,
	[Character.Skyra]: 0x1e88e5,
	[Character.Teryl]: 0x6b79c9
} as const;
