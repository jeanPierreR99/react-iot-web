import { create } from 'zustand';

interface IItem1 {
    hour: string;
    sensor1NameKey1: number;
    sensor1NameKey2: number;
}
interface IItem2 {
    hour: string;
    sensor2NameKey1: number;
    sensor2NameKey2: number;
}
interface IItem3 {
    hour: string;
    sensor3NameKey1: number;
    sensor3NameKey2: number;
}
interface IItem4 {
    hour: string;
    sensor4NameKey1: number;
    sensor4NameKey2: number;
}
interface IItem5 {
    hour: string;
    sensor5NameKey1: number;
    sensor5NameKey2: number;
}
interface IItem6 {
    hour: string;
    sensor6NameKey1: number;
    sensor6NameKey2: number;
}

export interface IItemImp {
    sensor1: IItem1[];   //key useStore
    sensor2: IItem2[];
    sensor3: IItem3[];
    sensor4: IItem4[];
    sensor5: IItem5[];
    sensor6: IItem6[];
}

type IItem = IItem1 | IItem2 | IItem3 | IItem4 | IItem5 | IItem6;


interface ItemState {
    item: IItemImp;
    setItems: (sensor: keyof IItemImp, newItem: IItem) => void;
}

const useStoreSensor = create<ItemState>((set) => ({
    item: {
        sensor1: [
            { hour: "09:00:00", sensor1NameKey1: 286, sensor1NameKey2: 86 },
            { hour: "09:05:00", sensor1NameKey1: 305, sensor1NameKey2: 26 },
            { hour: "09:10:00", sensor1NameKey1: 237, sensor1NameKey2: 16 },
            { hour: "09:15:00", sensor1NameKey1: 73, sensor1NameKey2: 56 },
            { hour: "09:20:00", sensor1NameKey1: 209, sensor1NameKey2: 46 },
        ],
        sensor2: [
            { hour: "09:00:00", sensor2NameKey1: 186, sensor2NameKey2: 86 },
            { hour: "09:05:00", sensor2NameKey1: 305, sensor2NameKey2: 26 },
            { hour: "09:10:00", sensor2NameKey1: 237, sensor2NameKey2: 16 },
            { hour: "09:15:00", sensor2NameKey1: 73, sensor2NameKey2: 56 },
            { hour: "09:20:00", sensor2NameKey1: 209, sensor2NameKey2: 46 },
        ],
        sensor3: [
            { hour: "09:00:00", sensor3NameKey1: 186, sensor3NameKey2: 86 },
            { hour: "09:05:00", sensor3NameKey1: 305, sensor3NameKey2: 26 },
            { hour: "09:10:00", sensor3NameKey1: 237, sensor3NameKey2: 16 },
            { hour: "09:15:00", sensor3NameKey1: 73, sensor3NameKey2: 56 },
            { hour: "09:20:00", sensor3NameKey1: 209, sensor3NameKey2: 46 },
        ],
        sensor4: [
            { hour: "09:00:00", sensor4NameKey1: 186, sensor4NameKey2: 86 },
            { hour: "09:05:00", sensor4NameKey1: 305, sensor4NameKey2: 26 },
            { hour: "09:10:00", sensor4NameKey1: 237, sensor4NameKey2: 16 },
            { hour: "09:15:00", sensor4NameKey1: 73, sensor4NameKey2: 56 },
            { hour: "09:20:00", sensor4NameKey1: 209, sensor4NameKey2: 46 },
        ],
        sensor5: [
            { hour: "09:00:00", sensor5NameKey1: 186, sensor5NameKey2: 86 },
            { hour: "09:05:00", sensor5NameKey1: 305, sensor5NameKey2: 26 },
            { hour: "09:10:00", sensor5NameKey1: 237, sensor5NameKey2: 16 },
            { hour: "09:15:00", sensor5NameKey1: 73, sensor5NameKey2: 56 },
            { hour: "09:20:00", sensor5NameKey1: 209, sensor5NameKey2: 46 },
        ],
        sensor6: [
            { hour: "09:00:00", sensor6NameKey1: 186, sensor6NameKey2: 86 },
            { hour: "09:05:00", sensor6NameKey1: 305, sensor6NameKey2: 26 },
            { hour: "09:10:00", sensor6NameKey1: 237, sensor6NameKey2: 16 },
            { hour: "09:15:00", sensor6NameKey1: 73, sensor6NameKey2: 56 },
            { hour: "09:20:00", sensor6NameKey1: 209, sensor6NameKey2: 46 },
        ],
    },
    setItems: (sensor, newItem) =>
        set((state) => {
            const updatedItems = [...state.item[sensor], newItem];

            if (updatedItems.length > 5) {
                updatedItems.shift();
            }

            return {
                item: {
                    ...state.item,
                    [sensor]: updatedItems,
                },
            };
        }),
}));

export default useStoreSensor;
