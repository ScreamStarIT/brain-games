#!/usr/bin/env node

import gameEngine from '../src/index.js';
import { manual, coreOfGame } from '../src/games/game-calc.js';

gameEngine(manual, coreOfGame);
