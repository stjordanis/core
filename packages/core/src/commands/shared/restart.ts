import { restart } from "../../helpers/pm2";
import { BaseCommand } from "../command";

export abstract class AbstractRestartCommand extends BaseCommand {
    public static flags: Record<string, any> = {
        ...BaseCommand.flagsNetwork,
    };

    public async run(): Promise<void> {
        const { flags } = this.parse(this.getClass());

        restart(`${flags.token}-${this.getSuffix()}`);
    }

    public abstract getClass();

    public abstract getSuffix(): string;
}