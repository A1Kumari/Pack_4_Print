import { RefreshCw } from "lucide-react";
import Button from "../Button.js";
import { resetMargin, resetState, setContainer } from "../../redux/features/slices/mainSlice.js";
import { useAppDispatch, useAppSelector } from "../../redux/hooks.js";
import { clearFileInput } from "../../utils.js";
import { ImageBox } from "../../pages/pack/Pack.js";

type ResetButtonProps = {
    setImages: React.Dispatch<React.SetStateAction<ImageBox[]>>;
    setBoxes: React.Dispatch<React.SetStateAction<ImageBox[][]>>;
    updateScaleFactor: () => void;
};

const ResetButton = ({
    setImages,
    setBoxes,
    updateScaleFactor,
}: ResetButtonProps) => {
    const dispatch = useAppDispatch();

    const reset = () => {
        setImages([]);
        setBoxes([]);
        dispatch(resetState());
        updateScaleFactor();
        clearFileInput();
        dispatch(resetMargin());

    };

    return (
        <Button
            onClick={reset}
            className="transition-all bg-transparent text-slate-700 hover:bg-transparent hover:rotate-180"
        >
            <RefreshCw size={24} />
        </Button>
    );
};

export default ResetButton;
