import Team from "../set";

describe('Team', () => {
    let team;

    beforeEach(() => {
        team = new Team();
    });

    test('should add one unique name of character', () => {
        const result = 'лучник';
        expect(team.add('лучник')).toContain(result);
    });

    test('should throw error', () => {
        expect(() => {
            team.add('лучник');
            team.add('лучник')
        }).toThrowError('Такой персонаж уже существует!')
    });

    test('should add all unique characters', () => {
        const result = (new Set(['лучник', 'мечник', 'нежить', 'орк']));
        expect(team.addAll('лучник', 'мечник', 'нежить', 'орк', 'нежить')).toEqual(result)
    });

    test('should convert to array', () => {
        const result = (['лучник', 'мечник', 'нежить', 'орк']);
        const collection = team.addAll('лучник', 'мечник', 'нежить', 'орк', 'нежить');
        expect(team.toArray(collection)).toEqual(result)
    });

});


