# Домашнее задание

**Кострыкина Екатерина ИУ5-44Б**

## Содержание <!-- omit in toc -->

- [Цель работы](#цель-данной-лабораторной-работы)
- [Тема](#тема-регистрация-авиабагажа)
- [Сайт для вдохновения](#сайт-для-вдохновения-аэропорт-внуково)
- [Дополнительные задания](#дополнительные-задания)
- [Порядок показа](#порядок-показа)

## Цель данной лабораторной работы 
Работа с коллекциями, функциями, классами.

### Тема: Регистрация авиабагажа
 
### Сайт для вдохновения: [Аэропорт Внуково](https://www.vnukovo.ru/ru/?utm_source=google.com&utm_medium=organic&utm_campaign=google.com&utm_referrer=google.com)

## Дополнительные задания:
1. Дана квадратная матрица matrix, верните сумму основной и побочной диагоналей матрицы.
``` javascript
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
```

2. Напишите функцию sort, которая будет сортировать буквы в словах по алфавиту, а потом получившиеся слова в предложении — тоже. Первую букву каждого слова она сделает прописной, остальные — строчными
   ```javascript
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
   ```
3. Вычислить среднее арифметическое элементов массива и вернуть его.
    ``` javascript
        export function calculateAverage(arr) {
            if (!arr || arr.length === 0) return 0;
            const sum = arr.reduce((acc, val) => acc + val, 0);
            return Math.round((sum / arr.length) * 10) / 10; 
        }
    ```

4. Дан список неотрицательных целых чисел, повторяющихся элементов в списке нет. Нужно преобразовать это множество в строку, сворачивая соседние по числовому ряду числа в диапазоны.
    ``` javascript
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
    ```
5. Необходимо на странице Подробнее выводить вместе с картинкой 3D модель самолёта.
    ``` javascript
        
    init3D(modelPath) {
        const canvas = document.getElementById('viewer-canvas');
        if (!canvas) return;

        const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
        renderer.setSize(canvas.clientWidth, canvas.clientHeight, false);

        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0xe6ebf5);


        const camera = new THREE.PerspectiveCamera(70, canvas.clientWidth / canvas.clientHeight, 0.1, 300);
        camera.position.set(50, 70, 70);


        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;

        const ambientLight = new THREE.AmbientLight(0xffffff, 1);
        scene.add(ambientLight);
        const dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
        dirLight.position.set(100, 100, 10);
        scene.add(dirLight);

        const loader = new GLTFLoader();
        loader.load(modelPath, (gltf) => {
            const model = gltf.scene;
            const box = new THREE.Box3().setFromObject(model);
            const center = box.getCenter(new THREE.Vector3());
            model.position.x -= center.x;
            model.position.y -= center.y;
            model.position.z -= center.z;

            scene.add(model);
        }, undefined, (error) => {
            console.error('Ошибка загрузки модели:', error);
        });

        document.getElementById('view-front').onclick = () => {
            camera.position.set(0, 0, 70);
            controls.target.set(0, 0, 0);
            controls.update();
        };
        document.getElementById('view-back').onclick = () => {
            camera.position.set(0, 0, -70);
            controls.target.set(0, 0, 0);
            controls.update();
        };


        const animate = () => {
            requestAnimationFrame(animate);
            controls.update();
            renderer.render(scene, camera);
        };
        animate();

        window.addEventListener('resize', () => {
            camera.aspect = canvas.clientWidth / canvas.clientHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(canvas.clientWidth, canvas.clientHeight, false);
        });
    }
    ```

## Порядок показа 
Объяснить реализацию требуемых функций, объяснить использование three.js