import { create } from 'zustand';

interface IItem {
    time: string;
    desktop: number;
    mobile: number;
}

export interface IItemImp {
    sensor1: IItem[];
    sensor2: IItem[];
    sensor3: IItem[];
    sensor4: IItem[];
    sensor5: IItem[];
    sensor6: IItem[];
}

interface ItemState {
    item: IItemImp;
    setItems: (sensor: keyof IItemImp, newItem: IItem) => void;
}

const useStoreSensor = create<ItemState>((set) => ({
    item: {
        sensor1: [
            // { time: "09:00:00", desktop: 186, mobile: 86 },
            // { time: "09:05:00", desktop: 305, mobile: 26 },
            // { time: "09:10:00", desktop: 237, mobile: 16 },
            // { time: "09:15:00", desktop: 73, mobile: 56 },
            // { time: "09:20:00", desktop: 209, mobile: 46 },
        ],
        sensor2: [
            // { time: "09:00:00", desktop: 186, mobile: 86 },
            // { time: "09:05:00", desktop: 305, mobile: 26 },
            // { time: "09:10:00", desktop: 237, mobile: 16 },
            // { time: "09:15:00", desktop: 73, mobile: 56 },
            // { time: "09:20:00", desktop: 209, mobile: 46 },
        ],
        sensor3: [
            // { time: "09:00:00", desktop: 186, mobile: 86 },
            // { time: "09:05:00", desktop: 305, mobile: 26 },
            // { time: "09:10:00", desktop: 237, mobile: 16 },
            // { time: "09:15:00", desktop: 73, mobile: 56 },
            // { time: "09:20:00", desktop: 209, mobile: 46 },
        ],
        sensor4: [
            // { time: "09:00:00", desktop: 186, mobile: 86 },
            // { time: "09:05:00", desktop: 305, mobile: 26 },
            // { time: "09:10:00", desktop: 237, mobile: 16 },
            // { time: "09:15:00", desktop: 73, mobile: 56 },
            // { time: "09:20:00", desktop: 209, mobile: 46 },
        ],
        sensor5: [
            // { time: "09:00:00", desktop: 186, mobile: 86 },
            // { time: "09:05:00", desktop: 305, mobile: 26 },
            // { time: "09:10:00", desktop: 237, mobile: 16 },
            // { time: "09:15:00", desktop: 73, mobile: 56 },
            // { time: "09:20:00", desktop: 209, mobile: 46 },
        ],
        sensor6: [
            // { time: "09:00:00", desktop: 186, mobile: 86 },
            // { time: "09:05:00", desktop: 305, mobile: 26 },
            // { time: "09:10:00", desktop: 237, mobile: 16 },
            // { time: "09:15:00", desktop: 73, mobile: 56 },
            // { time: "09:20:00", desktop: 209, mobile: 46 },
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
