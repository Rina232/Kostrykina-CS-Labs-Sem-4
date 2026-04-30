/*import {BackButtonComponent} from "../../components/back-button/index.js";*/
import {ProductComponent} from "../../components/product/index.js";
import {MainPage} from "../main/index.js";

import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { compressRanges, calculateAverage } from '../../js/utils.js';

export class ProductPage {
    constructor(parent, id) {
        this.parent = parent
        this.id = id

    }

    bindBackButton() { 
        const routesLinks = document.querySelectorAll('a[data-action="go-main"]');
        
        routesLinks.forEach(link => {
            const newLink = link.cloneNode(true);
            link.replaceWith(newLink);
            
            newLink.addEventListener('click', (e) => {
                e.preventDefault();
                const mainPage = new MainPage(this.parent);
                mainPage.render();
            });
        });
    }

    getData() {
        const dataMap = {
        1: {
            id: 1,
            src: "https://images.unsplash.com/photo-1526821799652-2dc51675628e?q=80&w=2156&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Франция",
            text: [
                "Париж с Эйфелевой башней, Лувром и Нотр-Дамом.",
                "Винные туры в регионы Бордо и Шампань. Лазурный берег, Прованс и Версаль.",
                "Французская кухня, мода и искусство. Индивидуальные и групповые туры. От 45 000 ₽"
            ],
            matrix: [
                [9, 7, 6, 8],
                [8, 9, 7, 6],
                [7, 8, 9, 5],
                [6, 5, 8, 9]
            ],
            availableDates: [1,2,3,4,5, 10,11,12, 20,21,22,23, 28,29,30],
            reviews: [9, 8, 10, 7, 9, 8, 10, 9]
        },
        2: {
            id: 2,
            src: "https://images.unsplash.com/photo-1570970168428-4e6347943681?q=80&w=1934&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Италия",
            text: [
                "Рим с Колизеем и Ватиканом, романтическая Венеция, живописная Флоренция.",
                "Амальфитанское побережье и озёра Комо и Гарда. Настоящая итальянская кухня: пицца, паста, джелато.",
                "Экскурсии, гастрономические и пляжные туры. От 42 000 ₽"
            ],
            matrix: [
                [10, 9, 7, 8],
                [9, 10, 8, 7],
                [7, 8, 9, 6],
                [8, 7, 6, 9]
            ],
            availableDates: [1,2,3, 7,8,9,10, 15,16, 25,26,27,28,29],
            reviews: [10, 9, 9, 8, 10, 7, 9]
        },
        3: {
            id: 3,
            src: "https://images.unsplash.com/photo-1516690561799-46d8f74f9abf?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Индонезия",
            text: [
                "Остров Бали с храмами Улувату и Танах Лот. Рисовые террасы Тегалаланг и вулкан Батур.",
                "Тропические пляжи, сноркелинг и дайвинг. Уникальная культура, традиционные танцы и спа-ритуалы.",
                "Пакетные и авторские туры. От 65 000 ₽"
            ],
            matrix: [
                [7, 8, 10, 6],
                [8, 9, 9, 7],
                [9, 8, 10, 5],
                [6, 7, 8, 8]
            ],
            availableDates: [5,6,7,8, 12,13,14,15,16, 22,23,24, 30,31],
            reviews: [9, 10, 8, 9, 10, 9, 8]
        },
        4: {
            id: 4,
            src: "https://plus.unsplash.com/premium_photo-1661963210464-73560a246e06?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Япония",
            text: [
                "Современный Токио и древний Киото с тысячами храмов. Цветение сакуры весной и красные клёны осенью.",
                "Традиционные онсэны, суши-мастер-классы и технология будущего.",
                "Безопасность, чистота и уникальная культура. От 75 000 ₽"
            ],
            matrix: [
                [9, 10, 8, 9],
                [10, 10, 9, 8],
                [8, 9, 10, 7],
                [9, 8, 7, 10]
            ],
            availableDates: [1,2, 8,9,10,11,12, 18,19,20, 26,27,28,29,30],
            reviews: [10, 10, 9, 10, 9, 10, 9, 10]
        },
        5: {
            id: 5,
            src: "https://images.unsplash.com/photo-1569069438599-4b719f7463b4?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "ОАЭ",
            text: [
                "Дубай с Бурдж-Халифой, искусственными островами и крупнейшими торговыми центрами.",
                "Сафари по пустыне, верблюжьи треки и ужин под звёздами. Абу-Даби с мечетью Шейха Зайда.",
                "Роскошные отели, шопинг и круглогодичное солнце. От 38 000 ₽"
            ],
            matrix: [
                [8, 7, 5, 10],
                [7, 8, 6, 10],
                [6, 9, 7, 9],
                [9, 8, 5, 10]
            ],
            availableDates: [1,2,3,4,5,6,7, 14,15,16,17, 21,22,23,24,25, 28,29,30],
            reviews: [8, 9, 7, 8, 9, 8, 7, 9, 8]
        },
        6: {
            id: 6,
            src: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=1439&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Таиланд",
            text: [
                "Бангкок с Великим дворцом и храмом Изумрудного Будды. Пхукет, Самуи и острова с бирюзовой водой.",
                "Тайский массаж, уличная еда и ночные рынки. Экскурсии к слонам, сноркелинг и тропическая природа.",
                "От 48 000 ₽"
            ],
            matrix: [
                [9, 8, 10, 7],
                [8, 9, 9, 8],
                [10, 8, 10, 6],
                [7, 8, 9, 9]
            ],
            availableDates: [3,4,5,6,7, 11,12,13,14,15, 19,20,21, 27,28,29,30],
            reviews: [9, 8, 9, 10, 8, 9, 8, 9]
        }
    };
        const selected = dataMap[this.id] || dataMap[1];
        const commonModelPath = "../../models/Airplane.glb"
        return {
            ...selected,
            model: commonModelPath,
            dateRanges: compressRanges(selected.availableDates),
            averageRating: calculateAverage(selected.reviews)
        };
    }
        

    get pageRoot() {
        return document.getElementById('product-page')
    }

    getHTML() {
        return (
            `   
                <div id="product-page"></div>
            `
        )
    }

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

    /*clickBack() {
        const mainPage = new MainPage(this.parent)
        mainPage.render()
    }*/

    render() {
        this.parent.innerHTML = ''
        const html = this.getHTML()
        this.parent.insertAdjacentHTML('beforeend', html)

        /*const backButton = new BackButtonComponent(this.pageRoot)
        backButton.render(this.clickBack.bind(this))*/

        this.bindBackButton();

        const data = this.getData()
        const stock = new ProductComponent(this.pageRoot)
        stock.render(data)

        this.init3D(data.model);
    }
}