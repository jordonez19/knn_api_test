const { knn, euclideanDistance } = require('./knnService');

// Pruebas unitarias usando Jest
describe('KNearestNeighbors', () => {
    test('knn function', () => {
        const dataset = [
            { features: [1, 2], label: 'A' },
            { features: [2, 3], label: 'A' },
            { features: [3, 4], label: 'B' },
            { features: [5, 6], label: 'B' },
        ];
        const features = [2, 3];
        const k = 3;
        const result = knn(features, k);
        expect(result).toBe('A');
    });

    test('euclideanDistance function', () => {
        const point1 = [0, 0];
        const point2 = [3, 4];
        const distance = euclideanDistance(point1, point2);
        expect(distance).toBe(5);
    });
});
