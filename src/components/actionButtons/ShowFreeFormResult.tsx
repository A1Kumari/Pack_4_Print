import React from "react";
import Button from "../Button.js";
import { useAppDispatch, useAppSelector } from "../../redux/hooks.js";
import {
    setInResizeMode,
    setIsPacking,
    setPackingProgress,
} from "../../redux/features/slices/mainSlice.js";
import { ImageBox } from "../../pages/pack/Pack.js";
import { createWorkerInstance } from "../../workerUtils.js";
import { freeFormPacking } from "@/algorithms/freeForm.js";


type ShowFreeFromResultProps = {
    setBoxes: React.Dispatch<React.SetStateAction<ImageBox[][]>>;
    images: ImageBox[];
};

const ShowFreeFormResult = ({ setBoxes, images }: ShowFreeFromResultProps) => {
    const dispatch = useAppDispatch();
    const { container, packingFactor, algorithm } = useAppSelector((state) => state.main);

    const showResult = async () => {
        dispatch(setInResizeMode(false));
        setBoxes(freeFormPacking({ images, container }));



    };

    return (
        <Button
            onClick={showResult}
            className="px-8 py-2 font-bold text-white transition duration-200 border-2 border-transparent rounded-md bg-secondary-700 w-fit hover:bg-white hover:text-secondary-700 hover:border-secondary-700"
        >
            Show Result
        </Button>
    );
};

export default ShowFreeFormResult;
