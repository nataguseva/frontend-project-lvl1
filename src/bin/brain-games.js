#!/usr/bin/env node
import { getUserName, checkAnswer, evenGame, generator, isEven } from '..';
console.log('Welcome to the Brain Games!/nAnswer "yes" if the number is even, otherwise answer "no".');
export const userName = getUserName();
console.log(`Hello, ${userName}!`);
evenGame();