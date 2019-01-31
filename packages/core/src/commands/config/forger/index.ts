import { flags } from "@oclif/command";
import prompts from "prompts";
import { BaseCommand } from "../../command";
import { BIP38Command } from "./bip38";
import { BIP39Command } from "./bip39";

export class ForgerCommand extends BaseCommand {
    public static description: string = "Configure the forging delegate (BIP38)";

    public static examples: string[] = [
        `Configure a delegate using an encrypted BIP38
$ ark config:forger --method=bip38
`,
        `Configure a delegate using a BIP39 passphrase
$ ark config:forger --method=bip39
`,
    ];

    public static flags: Record<string, any> = {
        ...BaseCommand.flagsForger,
        method: flags.string({ char: "m", description: "the configuration method to use (bip38 or bip39)" }),
    };

    public async run(): Promise<void> {
        const { flags } = this.parse(ForgerCommand);

        if (flags.method === "bip38") {
            return BIP38Command.run(this.flagsToStrings(flags).split(" "));
        }

        if (flags.method === "bip39") {
            return BIP39Command.run(this.flagsToStrings(flags).split(" "));
        }

        // Interactive CLI
        const response = await prompts([
            {
                type: "select",
                name: "method",
                message: "What method would you like to use to store your passphrase?",
                choices: [
                    { title: "Encrypted BIP38 (Recommended)", value: "bip38" },
                    { title: "Plain BIP39", value: "bip39" },
                ],
            },
        ]);

        if (response.method === "bip38") {
            return BIP38Command.run(this.flagsToStrings(response).split(" "));
        }

        if (response.method === "bip39") {
            return BIP39Command.run(this.flagsToStrings(response).split(" "));
        }
    }
}