import React from "react";
import { ImageBox } from "../../pages/pack/Pack.js";
import { useAppDispatch } from "../../redux/hooks.js";
import Button from "../Button.js";
import {
    setImagesLoaded,
    setInResizeMode,
} from "../../redux/features/slices/mainSlice.js";

type ResizeButtonProps = {
    setBoxes: React.Dispatch<React.SetStateAction<ImageBox[][]>>;
};

const ResizeButton = ({ setBoxes }: ResizeButtonProps) => {
    const dispatch = useAppDispatch();
    return (
        <Button
            onClick={() => {
                dispatch(setInResizeMode(true));
                dispatch(setImagesLoaded(false));
                setBoxes([]);
            }}
            className="bg-yellow-500 hover:bg-yellow-600"
        >
            Resize images
        </Button>
    );
};

export default ResizeButton;
