import players from '../unlimited/mrwhite/players.js';
import data from '../unlimited/mrwhite/data.js';
import { expect } from '@jest/globals';

test('', () => {
    players.addPlayer();
    players.addPlayer();
    players.addPlayer();

    players.assignRoles();

    const players = players.players();
    let numberOfImposters;
    let numberOfMrWhite;
    let numberOfCivilians;
    players.forEach(player => {
        if (player.role === data.MR_WHITE) {
            numberOfMrWhite++;
        } else if (player.role === data.IMPOSTER) {
            numberOfImposters++;
        } else {
            numberOfCivilians++;
        }
    });
    expect(numberOfImposters).toBe(1);
    expect(numberOfMrWhite).toBe(0);
    expect(numberOfCivilians).toBe(2);
})