#!/usr/bin/env node

import gameEngine from '../src/index.js';
import { manual, coreOfGame } from '../src/games/game-even.js';

gameEngine(manual, coreOfGame);
