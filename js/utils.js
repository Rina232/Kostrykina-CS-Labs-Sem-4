export function calculateDiagonalSum(matrix) {
    if (!matrix || matrix.length === 0) return 0;
    
    const n = matrix.length;
    let sum = 0;
    
    for (let i = 0; i < n; i++) {
        sum += matrix[i][i]; 
        const j = n - 1 - i; 
        if (i !== j) { 
            sum += matrix[i][j];
        }
    }
    return sum;
}

export function formatDestinations(sentence) {
    if (!sentence) return '';
    return sentence
        .split(' ')
        .map(word => {
            const sorted = word.toLowerCase().split('').sort().join('');
            return sorted.charAt(0).toUpperCase() + sorted.slice(1);
        })
        .sort()
        .join(' ');
}

export function checkDestinationHint(hint, answer) {
    const normalize = str => str.toLowerCase().split('').sort().join('');
    return normalize(hint) === normalize(answer);
}

export function compressRanges(numbers) {
    if (!numbers || numbers.length === 0) return '';
    
    const sorted = [...new Set(numbers)].sort((a, b) => a - b);
    const ranges = [];
    let start = sorted[0];
    let end = sorted[0];
    
    for (let i = 1; i < sorted.length; i++) {
        if (sorted[i] === end + 1) {
            end = sorted[i];
        } else {
            ranges.push(start === end ? `${start}` : `${start}-${end}`);
            start = end = sorted[i];
        }
    }
    ranges.push(start === end ? `${start}` : `${start}-${end}`);
    
    return ranges.join(', ');
}

export function calculateAverage(arr) {
    if (!arr || arr.length === 0) return 0;
    const sum = arr.reduce((acc, val) => acc + val, 0);
    return Math.round((sum / arr.length) * 10) / 10; 
}
