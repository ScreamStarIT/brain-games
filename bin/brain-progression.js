#!/usr/bin/env node

import gameEngine from '../src/index.js';
import { manual, coreOfGame } from '../src/games/game-progression.js';

gameEngine(manual, coreOfGame);
