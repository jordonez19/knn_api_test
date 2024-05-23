const dataset = [
    { features: [1, 2], label: 'A' },
    { features: [2, 3], label: 'A' },
    { features: [3, 4], label: 'B' },
    { features: [5, 6], label: 'B' },
];

// Función para calcular la distancia euclidiana
function euclideanDistance(a, b) {
    return Math.sqrt(a.reduce((sum, val, index) => sum + Math.pow(val - b[index], 2), 0));
}

// Función KNN
function knn(features, k) {
    const distances = dataset.map(item => ({
        distance: euclideanDistance(item.features, features),
        label: item.label,
    }));
    distances.sort((a, b) => a.distance - b.distance);
    const nearestNeighbors = distances.slice(0, k);
    const frequency = nearestNeighbors.reduce((acc, item) => {
        acc[item.label] = (acc[item.label] || 0) + 1;
        return acc;
    }, {});
    return Object.keys(frequency).reduce((a, b) => (frequency[a] > frequency[b] ? a : b));
}

export { knn, euclideanDistance };