import chalk from "chalk"


function DisplayName() {
    console.log(chalk.bgCyanBright.redBright("Jawad"));
    console.log(chalk.bgGreen.blueBright("Guillaume"));
    console.log(chalk.bgYellowBright.blackBright("Pierre"));
    console.log(chalk.bgRedBright.grey("François"));

}

DisplayName();