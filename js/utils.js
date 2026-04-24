export function calculateRouteScore(matrix) {
    if (!matrix || matrix.length === 0) return 0;
    
    const n = matrix.length;
    if (!matrix.every(row => row.length === n)) {
        console.warn('Матрица должна быть квадратной');
        return 0;
    }
    
    let sum = 0;
    
    for (let i = 0; i < n; i++) {
        sum += matrix[i][i];
        
        const secondaryIndex = n - 1 - i;
        if (i !== secondaryIndex) {
            sum += matrix[i][secondaryIndex];
        }
    }
    
    return sum;
}

export function formatDestinations(sentence) {
    if (!sentence || typeof sentence !== 'string') return '';
    
    return sentence
        .trim()
        .split(/\s+/)  
        .map(word => {
            const sorted = word.toLowerCase().split('').sort().join('');
            return sorted.charAt(0).toUpperCase() + sorted.slice(1);
        })
        .sort((a, b) => a.localeCompare(b, 'ru'))
        .join(' ');
}

export function checkDestinationHint(hint, answer) {
    const normalize = str => str.toLowerCase().split('').sort().join('');
    return normalize(hint) === normalize(answer);
}