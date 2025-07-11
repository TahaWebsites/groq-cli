#!/usr/bin/env node

import readline from 'readline';
import { apiCall } from './ai.js';
import { marked } from 'marked';
import TerminalRenderer from 'marked-terminal';
import chalk from 'chalk';
import { createSpinner } from 'nanospinner';

marked.setOptions({ renderer: new TerminalRenderer() });

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function ask(question) {
    return new Promise((resolve) => {
        rl.question(question, (answer) => {
            resolve(answer);
        });
    });
}

const timeHandler = () => {
    const date = new Date();
    const hours = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    const ampm = date.getHours() > 12 ? 'PM' : 'AM';

    const time = `${hours}:${minutes}:${seconds} ${ampm}`;
    return time;
}

let messages = [{ role: "user", content: "hi" }];

async function main() {

    try {
        function introLoader() {
            console.clear()
            console.log(chalk.red('===> created by: MOHAMMED MASOODUDDIN <==='));
            console.log(chalk.red('visit https://masood.onrender.com for more projects'));
            console.log(chalk.red('CLI x AI - v1.0.0'));
            
            console.log(chalk.red('type /help for more options'));
        }

        introLoader();


        while (true) {
            console.log()
            let prompt = await ask((chalk.yellow.bold(`Prompt [${timeHandler()}] : `)));
            prompt = prompt.trim();

            if(prompt.length === 0) continue;
            if (prompt.toLowerCase() === '/exit') break;

            if (prompt[0] == '/') {
                switch (prompt) {
                    case '/cls':
                        console.clear();
                        introLoader();
                        continue;

                    case '/model':
                        const res = await apiCall(messages);
                        console.log(chalk.red('Model: ', res.model));
                        let newMsg = {
                            role: 'user',
                            content: res.model
                        }
                        messages.push(newMsg);
                        continue;

                    case '/switch':
                        console.log(chalk.red('Under Prodcution')); //Under Prodcution
                        continue;

                    case '/viewconfig':
                        console.log(chalk.red('Under Prodcution')); //Under Prodcution
                        continue;

                    case '/help':
                        console.log(chalk.red('/exit          -> exit ai-cli'));
                        console.log(chalk.red('/cls           -> clears ai-cli'));
                        console.log(chalk.red('/model         -> displays AI model being used'));
                        console.log(chalk.red('/switch        -> [UNDER PRODUCTION] allows to change AI models to openAi, deepSeek, meta etc.'));
                        console.log(chalk.red('/viewconfig    -> [UNDER PRODUCTION] allows to view configurations of ai-cli'));
                        continue;

                    default:
                        console.log(chalk.red('No such command. type "/help" for more.'))
                        continue;
                }
            }

            let newMsg = {
                role: 'user',
                content: prompt
            }
            messages.push(newMsg);

            const spinner = createSpinner('Bot Typing...').start();

            const res = await apiCall(messages);
            const ans = res.choices[0]?.message?.content || 'Error while fetching response';
            newMsg = {
                role: 'assistant',
                content: ans
            }

            const markdownResponse = marked(ans);

            spinner.stop();
            process.stdout.write('\r\x1b[2K');

            process.stdout.write(chalk.green.bold(`Bot [${timeHandler()}]: `));
            process.stdout.write(markdownResponse);

        }

        rl.close();
    } catch (error) {
        console.log(chalk.red('Session Terminated due to an error, Restart Service Manually, Ctrl + c to exit'))
    }
}

main();
