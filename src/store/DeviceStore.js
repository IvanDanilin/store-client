import {makeAutoObservable} from "mobx";

export default class DeviceStore {
    constructor() {
        this._types = [
            {
                "id": 14,
                "name": "Холодильники",
                "createdAt": "2022-12-25T11:23:30.151Z",
                "updatedAt": "2022-12-25T11:23:30.151Z"
            },
            {
                "id": 15,
                "name": "Смартфоны",
                "createdAt": "2022-12-25T11:23:48.925Z",
                "updatedAt": "2022-12-25T11:23:48.925Z"
            },
            {
                "id": 21,
                "name": "Стиральные машины",
                "createdAt": "2022-12-26T11:09:05.288Z",
                "updatedAt": "2022-12-26T11:09:05.288Z"
            },
            {
                "id": 22,
                "name": "Ноутбуки",
                "createdAt": "2022-12-26T11:10:52.243Z",
                "updatedAt": "2022-12-26T11:10:52.243Z"
            }
        ]
        this._brands = [
            {
                "id": 9,
                "name": "Samsung",
                "createdAt": "2022-12-25T12:51:43.881Z",
                "updatedAt": "2022-12-25T12:51:43.881Z"
            },
            {
                "id": 10,
                "name": "Apple",
                "createdAt": "2022-12-25T12:51:57.201Z",
                "updatedAt": "2022-12-25T12:51:57.201Z"
            },
            {
                "id": 11,
                "name": "Xiaomi",
                "createdAt": "2022-12-25T15:29:23.279Z",
                "updatedAt": "2022-12-25T15:29:23.279Z"
            },
            {
                "id": 12,
                "name": "Atlant",
                "createdAt": "2022-12-25T15:33:33.503Z",
                "updatedAt": "2022-12-25T15:33:33.503Z"
            }
        ]
        this._devices = [
                {
                    "id": 3,
                    "name": "12 Pro",
                    "price": 100000,
                    "rating": 0,
                    "img": "881dc880-1e77-476f-bcb7-e0b593750a11.jpg",
                    "createdAt": "2022-12-25T14:53:24.773Z",
                    "updatedAt": "2022-12-25T14:53:24.773Z",
                    "typeId": 15,
                    "brandId": 10
                },
                {
                    "id": 4,
                    "name": "A51",
                    "price": 74000,
                    "rating": 0,
                    "img": "0933974c-49bd-48a2-bb00-53344cd27d46.jpg",
                    "createdAt": "2022-12-25T15:28:11.290Z",
                    "updatedAt": "2022-12-25T15:28:11.290Z",
                    "typeId": 15,
                    "brandId": 9
                },
                {
                    "id": 5,
                    "name": "Redmi Note 10 Pro",
                    "price": 24000,
                    "rating": 0,
                    "img": "90117307-babd-490e-8a68-127896b276b2.jpg",
                    "createdAt": "2022-12-25T15:31:05.793Z",
                    "updatedAt": "2022-12-25T15:31:05.793Z",
                    "typeId": 15,
                    "brandId": 11
                },
                {
                    "id": 6,
                    "name": "ХМ-4621-181-NL",
                    "price": 55000,
                    "rating": 0,
                    "img": "594f51a1-9e51-4490-b1d7-f1c65b374e85.jpg",
                    "createdAt": "2022-12-25T15:34:45.897Z",
                    "updatedAt": "2022-12-25T15:34:45.897Z",
                    "typeId": 14,
                    "brandId": 12
                },
                {
                    "id": 7,
                    "name": "RB37A5200SA",
                    "price": 54000,
                    "rating": 0,
                    "img": "5e96f6ba-62a3-4083-882c-cbb896a99130.jpg",
                    "createdAt": "2022-12-25T16:22:56.304Z",
                    "updatedAt": "2022-12-25T16:22:56.304Z",
                    "typeId": 14,
                    "brandId": 9
                },
                {
                    "id": 8,
                    "name": "RB37A5201WW",
                    "price": 46000,
                    "rating": 0,
                    "img": "a311794f-acb6-4c33-baa8-84bd365502a3.jpg",
                    "createdAt": "2022-12-25T16:31:07.084Z",
                    "updatedAt": "2022-12-25T16:31:07.084Z",
                    "typeId": 14,
                    "brandId": 9
                }
            ]
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }
    setBrands(brands) {
        this._brands = brands
    }
    setDevices(devices) {
        this._devices = devices
    }

    get types() {
        return this._types
    }
    get brands() {
        return this._brands
    }
    get devices() {
        return this._devices
    }
}